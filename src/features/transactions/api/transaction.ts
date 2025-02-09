import {
  createGetRequestInit,
  createPostRequestInit,
  generateApiUrl,
  generateAuthHeader
} from '@/lib/api'
import { CreateTransaction } from '../schemas/validation'

const API_URL = '/transactions'

export const getTransactions = async (): Promise<Response> => {
  const authHeader = await generateAuthHeader()
  const init = createGetRequestInit(authHeader)

  const response = await fetch(generateApiUrl(API_URL), init)
  return response
}

export const createTransaction = async (body: CreateTransaction): Promise<Response> => {
  const authHeader = await generateAuthHeader()
  const init = createPostRequestInit(authHeader, body)

  const response = await fetch(generateApiUrl(API_URL), init)
  return response
}
