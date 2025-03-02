import { SignJWT, JWTPayload } from 'jose'

/**
 * JWT Algorithm
 */
const JWT_ALGORITHM = 'HS256'

const JWT_EXPIRATION_TIME = '1h'

/**
 * Generate JWT
 * @param secret Secret Key
 * @param issuer Issuer(URL)
 * @param payload JWT Payload
 * @returns JWT
 */
export const generateJWT = async (secret: string, issuer: string, payload: JWTPayload) => {
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: JWT_ALGORITHM })
    .setIssuedAt()
    .setIssuer(issuer)
    .setExpirationTime(JWT_EXPIRATION_TIME)
    .sign(new TextEncoder().encode(secret))

  return jwt
}
