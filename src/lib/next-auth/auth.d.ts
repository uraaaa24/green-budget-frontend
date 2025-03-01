// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    /** User Information */
    user: {
      id?: string
      name?: string | null
      email?: string | null
    }
    /** Expiration Time */
    expires: string
    /** JWT token */
    jwt: string
    /** Refresh token of Access Token */
    refreshToken?: string
  }

  interface Profile {
    preferred_username?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    /** User ID */
    sub: string
    /** User name */
    name: string
    /** User email */
    email: string
    /** Refresh token of Access Token */
    refreshToken: string | undefined
  }
}

export type JWTPayload = {
  /** User ID */
  sub: string
  /** User name */
  name: string
  /** User email */
  email: string
  /** Refresh token of Access Token */
  refreshToken: string | undefined
  /** Issued At */
  iat: number
  /** Expiration Time */
  exp: number
  /** Issuer */
  iss: string
  /**  Unique ID */
  jti: string
}
