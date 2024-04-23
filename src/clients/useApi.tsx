import { useCallback, useState } from 'react'

export const useApi = <T, >(baseUrl: string) => {
  const [ data, setData ] = useState<T | null>(null)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState<Error | null>(null)

  const handleRequest = useCallback(async (endpointPath: string,
    method: string = 'GET',
    params?: Record<string, string>) => {
    const queryParams = '?' + new URLSearchParams({
      ...(params ?? {}),
      'x_cg_api_key': import.meta.env.VITE_COINGECKO_API_KEY
    })
    const url = `${baseUrl}${endpointPath}${queryParams}`

    setIsLoading(true)

    try {
      const response = await fetch(url, { method })

      if (!response.ok)
        return setError(new Error(response.statusText))

      setData(await response.json() as T)
    } catch (e) {
      setError(e as Error)
    }

    setIsLoading(false)
  }, [data, isLoading, error])

  return { data, error, isLoading, handleRequest }
}