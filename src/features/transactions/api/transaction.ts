import { fetcher } from '@/lib/fetcher'
import { auth } from '@/lib/next-auth'
import { generateJWT } from '@/lib/next-auth/auth.config'
import { Transaction } from '../types/transaction'

export const getTransactions = async (): Promise<Transaction[]> => {
  const session = await auth()
  const jwt = generateJWT(session?.accessToken, session?.user)

  return fetcher('/transactions', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  })
}
