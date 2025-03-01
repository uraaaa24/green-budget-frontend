import { NextAuthConfig, Session } from 'next-auth'
import Google from 'next-auth/providers/google'
import { JWT } from 'next-auth/jwt'
import { generateJWT } from './jwt'

const JWT_MAX_AGE = 1 * 60 * 60

export const config: NextAuthConfig = {
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: JWT_MAX_AGE
  },
  providers: [
    Google({authorization: { params: { access_type: "offline", prompt: "consent" } },})
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
    async jwt({ token, account, profile }) {
      const newToken: JWT = {
        ...token,
        refresh_token: token.refresh_token
      }

      if (profile) {
        if (profile.email) newToken.email = profile.email
        if (profile.preferred_username) newToken.name = profile.preferred_username
      }

      if (account) {
        newToken.refreshToken = account.refresh_token
      }

      return newToken
    },
    async session({ session, token }) {
      const newSession: Session = {
        ...session,
        refreshToken: token.refreshToken,
        jwt: await generateJWT(process.env.AUTH_SECRET!, process.env.AUTH_URL!, token)
      }

      return newSession
    }
  }
}
