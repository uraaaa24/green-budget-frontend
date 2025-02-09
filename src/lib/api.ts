import jwt from 'jsonwebtoken'
import { User } from 'next-auth'
import { auth } from './next-auth'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

/**
 * JWTを生成する関数
 */
export const generateJWT = (accessToken: string | undefined, userData: User | undefined) => {
  if (!accessToken || !userData) return ''

  return jwt.sign(
    {
      accessToken: accessToken,
      ...userData
    },
    process.env.AUTH_SECRET || '',
    { expiresIn: '1h' }
  )
}

/**
 * サーバーコンポーネントで利用する認証ヘッダーを生成する関数
 */
export const generateAuthHeader = async () => {
  const session = await auth()
  if (!session?.accessToken || !session?.user) throw new Error('Session not found')

  const jwt = generateJWT(session.accessToken, session.user)
  return {
    Authorization: `Bearer ${jwt}`,
    'Content-Type': 'application/json'
  }
}

/**
 * APIのURLを生成する関数
 */
export const generateApiUrl = (path: string): string => {
  return `${baseUrl}${path}`
}

/**
 * リクエストオプションを生成する関数
 */
const createRequestInit = (
  method: string,
  authHeader: HeadersInit,
  body?: unknown
): RequestInit => ({
  method,
  headers: { 'Content-Type': 'application/json', ...authHeader },
  ...(body ? { body: JSON.stringify(body) } : {})
})

export const createGetRequestInit = (authHeader: HeadersInit): RequestInit =>
  createRequestInit('GET', authHeader)
export const createPostRequestInit = (authHeader: HeadersInit, body?: unknown): RequestInit =>
  createRequestInit('POST', authHeader, body)
export const createPutRequestInit = (authHeader: HeadersInit, body?: unknown): RequestInit =>
  createRequestInit('PUT', authHeader, body)
export const createDeleteRequestInit = (authHeader: HeadersInit): RequestInit =>
  createRequestInit('DELETE', authHeader)
