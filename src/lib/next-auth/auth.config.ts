import { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'
import { generateJWT } from './jwt'

/**
 * NextAuth configuration
 */
export const config: NextAuthConfig = {
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  providers: [Google],
  basePath: '/api/auth',
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isAuthorizedUrl = nextUrl.pathname !== 'login'
      if (!isAuthorizedUrl) return true

      const isLogin = !!auth?.user
      if (!isLogin) return false

      return true
    },
    async jwt({ token, account, user }) {
      if (account) {
        token.access_token = account.access_token as string
        token.jwt = generateJWT(account.access_token, process.env.AUTH_SECRET, user)
      }
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.access_token,
        jwt: token.jwt
      }
    }
  }
}
