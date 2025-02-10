import { buildAuthHeaders } from '@/lib/api'
import { useSession } from 'next-auth/react'

export const useAuthHeaders = () => {
  const { data } = useSession()

  /**
   * Create auth headers for requests
   */
  const createAuthHeader = (): HeadersInit => {
    return buildAuthHeaders(data?.jwt)
  }

  return {
    createAuthHeader
  }
}
