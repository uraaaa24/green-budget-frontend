export const fetcher = async (url: string): Promise<boolean | null> => {
  const response = await fetch(url)
  return response.json()
}
