import { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'
import { generateJWT } from './jwt'
import { JWT } from 'next-auth/jwt'

/**
 * Refreshes the access token using the provided refresh token.
 */
const refreshAccessToken = async (token: JWT): Promise<JWT> => {
  try {
    const url = 'https://oauth2.googleapis.com/token'
    const response = await fetch(url, {
      method: 'POST',
      body: new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        grant_type: 'refresh_token',
        refresh_token: token.refresh_token!
      })
    })

    const refreshedTokens = await response.json()
    if (!response.ok) throw refreshedTokens

    return {
      ...token,
      access_token: refreshedTokens.access_token,
      expires_at: Date.now() + refreshedTokens.expires_at * 1000
    }
  } catch (error) {
    console.error('Error refreshing access token', error)
    return { ...token, error: 'RefreshTokenError' }
  }
}

export const config: NextAuthConfig = {
  providers: [
    Google({
      // Google requires "offline" access_type to provide a `refresh_token`
      authorization: { params: { access_type: 'offline', prompt: 'consent' } }
    })
  ],
  basePath: '/api/auth',
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isAuthorizedUrl = nextUrl.pathname !== 'login'
      if (!isAuthorizedUrl) return true
      return !!auth?.user
    },
    async jwt({ token, account, user }) {
      if (account) {
        return {
          access_token: account.access_token,
          refresh_token: account.refresh_token,
          expires_at: Date.now() + (account.expires_at ?? 0) * 1000,
          jwt: generateJWT(account.access_token, process.env.AUTH_SECRET, user)
        } as JWT
      }

      // Renew the token if it has expired
      if (Date.now() > token.expires_at) {
        return await refreshAccessToken(token)
      }

      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.access_token,
        jwt: token.jwt,
        error: token.error
      }
    }
  }
}
