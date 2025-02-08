import { fetcher } from '@/lib/fetcher'
import { Transaction } from '../schemas/type'
import { auth } from '@/lib/next-auth'
import { generateJWT } from '@/lib/next-auth/auth.config'

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
