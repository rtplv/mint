import { useApi } from '@/clients/useApi.tsx'

export const useCoinGeckoApi = <T,>() =>
  useApi<T>(import.meta.env.VITE_COINGECKO_URL, {
    'x_cg_api_key': import.meta.env.VITE_COINGECKO_API_KEY
  })