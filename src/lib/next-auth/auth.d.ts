// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    error?: 'RefreshTokenError'
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    access_token: string
    expires_at: number
    refresh_token?: string
    error?: 'RefreshTokenError'
  }
}
