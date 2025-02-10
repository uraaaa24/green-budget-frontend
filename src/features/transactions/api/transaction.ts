import { createGetRequestInit, createPostRequestInit, getAuthHeaders } from '@/lib/api'
import { CreateTransaction } from '../schemas/validation'
import { TRANSACTIONS_ENDPOINT } from '@/constants/api'

/**
 * Get all transactions
 */
export const getTransactions = async (): Promise<Response> => {
  const authHeader = await getAuthHeaders()
  const init = createGetRequestInit(authHeader)

  const response = await fetch(TRANSACTIONS_ENDPOINT, init)
  return response
}

/**
 * Create a new transaction
 */
export const createTransaction = async (body: CreateTransaction): Promise<Response> => {
  const authHeader = await getAuthHeaders()
  const init = createPostRequestInit(authHeader, body)

  const response = await fetch(TRANSACTIONS_ENDPOINT, init)
  return response
}
