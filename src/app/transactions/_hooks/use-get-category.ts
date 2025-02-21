import useSWR from 'swr'
import { useSWRFetcher } from '@/hooks/use-swr-fetcher'
import { CATEGORIES_ENDPOINT } from '@/constants/api'

/**
 * Hook to get categories using SWR
 */
export const useGetCategory = () => {
  const { fetcher } = useSWRFetcher()

  const { data, isLoading, error, isValidating } = useSWR(CATEGORIES_ENDPOINT, fetcher)

  return {
    data,
    error,
    isLoading,
    isValidating
  }
}
