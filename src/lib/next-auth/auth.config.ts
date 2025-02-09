import { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'

/**
 * NextAuth configuration
 */
export const config: NextAuthConfig = {
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
    async jwt({ token, trigger, session, account }) {
      if (trigger === 'update') token.name = session.user.name

      if (account) {
        token.access_token = account.access_token as string
      }

      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.access_token
      }
    }
  }
}
