const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL

export const TRANSACTIONS_ENDPOINT = `${BASE_API_URL}/transactions`
export const DELETE_TRANSACTION_ENDPOINT = `${BASE_API_URL}/transactions/{id}`
export const generateDeleteTransactionEndpoint = (id: string) =>
  DELETE_TRANSACTION_ENDPOINT.replace('{id}', id)
