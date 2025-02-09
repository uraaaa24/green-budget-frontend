import { generateJWT } from '@/lib/api'
import { useSession } from 'next-auth/react'

export const useAuthHeaders = () => {
  const { data } = useSession()

  /**
   * 認証情報を含むヘッダーを生成する
   */
  const generateAuthHeader = (): HeadersInit => {
    if (!data?.accessToken || !data?.user) return {}
    const jwt = generateJWT(data.accessToken, data.user)

    return {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    }
  }

  return {
    generateAuthHeader
  }
}
