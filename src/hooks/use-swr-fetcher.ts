import { getAuthHeaders } from '@/lib/api'
import { useSession } from 'next-auth/react'

/**
 * Hook to create a transaction using SWR
 */
export const useSWRFetcher = () => {
  const { data: session } = useSession()

  /**
   * Execute a fetch request with authentication information
   */
  const fetcher = async (url: string): Promise<boolean | null> => {
    const authHeaders = await getAuthHeaders(session)

    const response = await fetch(url, {
      headers: {
        ...authHeaders
      }
    })
    return response.json()
  }

  return { fetcher }
}
