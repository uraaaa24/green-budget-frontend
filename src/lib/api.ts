import { auth } from './next-auth'

/**
 * Builds authentication headers using the provided JWT token.
 */
export const buildAuthHeaders = (jwt: string | undefined): HeadersInit => {
  if (!jwt) {
    throw new Error('JWT token is missing')
  }
  return {
    Authorization: `Bearer ${jwt}`,
    'Content-Type': 'application/json'
  }
}

/**
 * Returns authentication headers for the current session.
 */
export const getAuthHeaders = async () => {
  const session = await auth()
  if (!session?.accessToken || !session?.user) throw new Error('Session not found')

  return buildAuthHeaders(session.jwt)
}

/**
 * Creates a request init object with the provided method, authentication headers, and optional body.
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

/** Creates a GET request init object with the provided authentication headers. */
export const createGetRequestInit = (authHeader: HeadersInit): RequestInit =>
  createRequestInit('GET', authHeader)
/** Creates a POST request init object with the provided authentication headers and body. */
export const createPostRequestInit = (authHeader: HeadersInit, body?: unknown): RequestInit =>
  createRequestInit('POST', authHeader, body)
/** Creates a PUT request init object with the provided authentication headers and body. */
export const createPutRequestInit = (authHeader: HeadersInit, body?: unknown): RequestInit =>
  createRequestInit('PUT', authHeader, body)
/** Creates a DELETE request init object with the provided authentication headers. */
export const createDeleteRequestInit = (authHeader: HeadersInit): RequestInit =>
  createRequestInit('DELETE', authHeader)
