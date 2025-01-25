import NextAuth, { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'

export const config: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  basePath: '/api/auth',
  callbacks: {
    authorized({ auth }) {
      try {
        // TODO: ログインしていない場合は、ログインページにリダイレクトする
        return !!auth
      } catch (error) {
        console.error(error)
      }
    },
    jwt({ token, trigger, session }) {
      if (trigger === 'update') token.name = session.user.name

      return token
    }
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)
