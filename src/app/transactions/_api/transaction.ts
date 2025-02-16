import { createDeleteRequestInit, createGetRequestInit, createPostRequestInit } from '@/lib/api'
import { CreateTransaction } from '../_schemas/validation'
import { generateDeleteTransactionEndpoint, TRANSACTIONS_ENDPOINT } from '@/constants/api'

/**
 * Get all transactions
 */
export const getTransactions = async (authHeaders: HeadersInit): Promise<Response> => {
  const init = createGetRequestInit(authHeaders)

  const response = await fetch(TRANSACTIONS_ENDPOINT, init)
  return response
}

/**
 * Create a new transaction
 */
export const createTransaction = async (
  authHeaders: HeadersInit,
  body: CreateTransaction
): Promise<Response> => {
  const init = createPostRequestInit(authHeaders, body)

  const response = await fetch(TRANSACTIONS_ENDPOINT, init)
  return response
}

/**
 * Delete a transaction
 */
export const deleteTransaction = async (
  authHeaders: HeadersInit,
  id: string
): Promise<Response> => {
  const init = createDeleteRequestInit(authHeaders)

  const response = await fetch(generateDeleteTransactionEndpoint(id), init)
  return response
}
