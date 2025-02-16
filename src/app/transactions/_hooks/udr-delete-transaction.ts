import { useState } from 'react'
import { deleteTransaction as _deleteTransaction } from '@/app/transactions/_api/transaction'
import { useSession } from 'next-auth/react'
import { getAuthHeaders } from '@/lib/api'
import { isError } from '@/lib/type-guards'

/**
 * Hook to delete a transaction
 */
export const useDeleteTransaction = () => {
  const { data: session } = useSession()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const deleteTransaction = async (id: string): Promise<void> => {
    setIsLoading(true)
    setError(null)

    try {
      const authHeaders = await getAuthHeaders(session)
      const response = await _deleteTransaction(authHeaders, id)

      if (!response.ok) {
        throw new Error('Failed to delete transaction')
      }
    } catch (error) {
      console.error('Error submitting transaction:', error)
      if (isError(error)) {
        setError(error)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    deleteTransaction,
    isLoading,
    error
  }
}
