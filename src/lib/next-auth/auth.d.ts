// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    accessToken: string
    jwt: string
    error?: 'RefreshTokenError'
    user: {
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    access_token: string
    jwt: string
    expires_at: number
    refresh_token?: string
    error?: 'RefreshTokenError'
    name?: string | null
    email?: string | null
    picture?: string | null
  }
}
