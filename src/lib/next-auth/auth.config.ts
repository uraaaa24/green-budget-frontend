import { NextAuthConfig } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import Google from 'next-auth/providers/google'

/**
 * Check if the token is valid
 */
const isTokenValid = (token: JWT): boolean => {
  return token.expires_at ? Date.now() < token.expires_at * 1000 : false
}

/**
 * Refresh the access token
 */
const refreshAccessToken = async (token: JWT): Promise<JWT> => {
  if (!token.refresh_token) {
    console.error('Missing refresh_token')
    return { ...token, error: 'RefreshTokenError' }
  }

  try {
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: process.env.AUTH_GOOGLE_ID!,
        client_secret: process.env.AUTH_GOOGLE_SECRET!,
        grant_type: 'refresh_token',
        refresh_token: token.refresh_token!
      })
    })

    const tokensOrError = await response.json()
    if (!response.ok) throw tokensOrError

    return {
      ...token,
      access_token: tokensOrError.access_token,
      expires_at: Math.floor(Date.now() / 1000) + tokensOrError.expires_in,
      refresh_token: tokensOrError.refresh_token ?? token.refresh_token
    }
  } catch (error) {
    console.error('Error refreshing access_token:', error)
    return { ...token, error: 'RefreshTokenError' }
  }
}

/**
 * NextAuth configuration
 */
export const config: NextAuthConfig = {
  providers: [
    Google({
      authorization: { params: { access_type: 'offline', prompt: 'consent' } }
    })
  ],
  basePath: '/api/auth',
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isAuthorizedUrl = nextUrl.pathname !== 'login'
      if (!isAuthorizedUrl) return true

      const isLogin = !!auth?.user
      if (!isLogin) return false

      return true
    },
    async jwt({ token, account }) {
      //  If the user is logged in, return the access token
      if (account) {
        return {
          ...token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          refresh_token: account.refresh_token
        } as JWT
      }

      // If the token is not valid, refresh it
      return isTokenValid(token) ? token : await refreshAccessToken(token)
    },
    async session({ session, token }) {
      session.sessionToken = token.access_token
      session.error = token.error
      return session
    }
  }
}
