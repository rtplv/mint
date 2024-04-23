import { Flex, ScrollArea, Title, Text, Input, Loader } from '@mantine/core'
import { Suspense, useEffect } from 'react'
import style from './HomeCoinPickerPanel.module.css'
import { CoinIcon } from '@/components/ui'
import { PRIMARY_COLOR } from '@/constants'
import { useCoinGeckoApi } from '@/clients/useCoinGeckoApi.tsx'

export interface HomeCoinPickerPanelProps {
  className: string
}

export function HomeCoinPickerPanel({ className }: HomeCoinPickerPanelProps) {
  // TODO: pass to context
  const { handleRequest, data: currenciesList, isLoading} = useCoinGeckoApi<{
    id: string
    name: string
    symbol: string
    image: string
  }[]>()

  useEffect(() => {
    handleRequest('/coins/markets', 'GET', { vs_currency: 'usd' })
  }, [])

  return (
    <Flex className={`${style.root} ${className}`}
      justify="center"
      direction="column"
      gap="2rem"
    >
      <Flex justify="space-between">
        <Title order={3}>Pick coin to compare:</Title>
        <Input placeholder="Filter by coin name"/>
      </Flex>
      <ScrollArea scrollbars="x" offsetScrollbars="x">
        <Flex align="center" gap="1rem">
          {isLoading ? (
            <Loader color={PRIMARY_COLOR}/>
          ) : (
            <Suspense fallback={<Loader color={PRIMARY_COLOR} />}>
              {currenciesList?.map(coin =>
                <Flex key={coin.id}
                  direction="column"
                  justify="center"
                  align="center"
                  gap=".5rem">
                  <CoinIcon name={coin.symbol}
                    placeholderUrl={coin.image}
                    imageProps={{ w: '4rem', radius: 'xl' }}/>
                  <Text c="dimmed">{coin.name.length < 8 ? coin.name : coin.symbol.toUpperCase() }</Text>
                </Flex>
              )}
            </Suspense>
          )}
        </Flex>
      </ScrollArea>
    </Flex>
  )
}


export default HomeCoinPickerPanel