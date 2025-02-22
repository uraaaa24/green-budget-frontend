import { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'
import { JWT } from 'next-auth/jwt'
import { generateJWT } from './jwt'

/**
 * Refreshes the access token using the provided refresh token.
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
        refresh_token: token.refresh_token
      })
    })

    const refreshedTokens = await response.json()
    if (!response.ok) throw new Error(refreshedTokens.error || 'Failed to refresh token')

    return {
      ...token,
      access_token: refreshedTokens.access_token,
      expires_at: Math.floor(Date.now() / 1000 + refreshedTokens.expires_in),
      refresh_token: refreshedTokens.refresh_token ?? token.refresh_token
    }
  } catch (error) {
    console.error('Error refreshing access token:', error)
    return { ...token, error: 'RefreshTokenError' }
  }
}

export const config: NextAuthConfig = {
  providers: [
    Google({
      authorization: { params: { access_type: 'offline', prompt: 'consent' } }
    })
  ],
  basePath: '/api/auth',
  callbacks: {
    async jwt({ token, account, user }) {
      const customToken: JWT = token as JWT

      // Initial sign in
      if (account) {
        return {
          ...customToken,
          access_token: account.access_token,
          expires_at: Math.floor(Date.now() / 1000 + (account.expires_in ?? 3600)),
          refresh_token: account.refresh_token,
          jwt: generateJWT(account.id_token, process.env.AUTH_SECRET, user)
        } as JWT
      }

      // Return previous token if the access token has not expired
      return Date.now() < customToken.expires_at * 1000
        ? customToken
        : await refreshAccessToken(customToken)
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
