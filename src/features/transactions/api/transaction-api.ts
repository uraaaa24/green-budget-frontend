import { fetcher } from '@/lib/fetcher'
import { Transaction } from '../schemas/type'

export const getTransactions = async (): Promise<Transaction[]> => {
  return fetcher('/transactions', { method: 'GET' })
}
