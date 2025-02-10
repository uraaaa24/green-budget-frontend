import { User } from 'next-auth'
import jwt from 'jsonwebtoken'

const EXPIRES_IN = 60 * 60

/**
 * Generate JWT
 */
export const generateJWT = (
  accessToken: string | undefined,
  authSecret: string | undefined,
  userData: User | undefined
) => {
  if (!accessToken || !userData || !authSecret) return ''

  return jwt.sign(
    {
      accessToken,
      ...userData
    },
    authSecret,
    { expiresIn: EXPIRES_IN }
  )
}
