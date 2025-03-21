import { useState } from 'react'
import { CreateTransaction } from '../_schemas/validation'
import { isError } from '@/lib/type-guards'
import { Transaction } from '../_types/transaction'
import { createTransaction as _createTransaction } from '@/app/transactions/_api/transaction'
import { useSession } from 'next-auth/react'
import { getAuthHeaders } from '@/lib/api'

/**
 * Hook to create a transaction
 */
export const useCreateTransaction = () => {
  const { data: session } = useSession()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const createTransaction = async (data: CreateTransaction): Promise<Transaction | undefined> => {
    setIsLoading(true)
    setError(null)

    try {
      const authHeaders = await getAuthHeaders(session)
      const response = await _createTransaction(authHeaders, data)

      if (!response.ok) {
        throw new Error('Failed to create transaction')
      }

      return response.json()
    } catch (error) {
      console.error('Error submitting transaction:', error)
      if (isError(error)) {
        setError(error)
      }
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    createTransaction,
    isLoading,
    error
  }
}
