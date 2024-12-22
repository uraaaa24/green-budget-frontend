type FetcherOptions = RequestInit

export const fetcher = async <T>(url: string, options: FetcherOptions = {}): Promise<T> => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}${url}`
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  }

  const response = await fetch(apiUrl, {
    ...options,
    headers
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Error ${response.status}: ${errorText || response.statusText}`)
  }

  return response.json()
}
