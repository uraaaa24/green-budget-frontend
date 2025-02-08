import { NextAuthConfig, User } from 'next-auth'
import jwt from 'jsonwebtoken'
import Google from 'next-auth/providers/google'

/**
 * Generate JWT token
 */
export const generateJWT = (googleAccessToken: string | undefined, userData: User | undefined) => {
  if (!googleAccessToken || !userData) return ''

  return jwt.sign(
    {
      accessToken: googleAccessToken,
      ...userData
    },
    process.env.AUTH_SECRET || '',
    { expiresIn: '1h' }
  )
}

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
