import { Flex, ScrollArea, Title, Text, Input, Loader } from '@mantine/core'
import style from './HomeCoinPickerPanel.module.css'
import { Suspense } from 'react'
import { CoinIcon } from '@/components/ui'
import { PRIMARY_COLOR } from '@/constants'

const dummyCurrenciesList = ['USDT', 'BTC', 'ETH', 'USDC', 'XRP', 'XZC', 'SUMO', 'SUB', 'STX', 'TNT']

export interface HomeCoinPickerPanelProps {
  className: string
}

export function HomeCoinPickerPanel({ className }: HomeCoinPickerPanelProps) {
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
          <Suspense fallback={<Loader color={PRIMARY_COLOR} />}>
            {dummyCurrenciesList.map(coinName =>
              <Flex key={coinName}
                direction="column"
                justify="center"
                align="center"
                gap=".5rem">
                <CoinIcon name={coinName}
                  imageProps={{ w: '5rem' }}/>

                <Text c="dimmed">{coinName}</Text>
              </Flex>
            )}
          </Suspense>
        </Flex>
      </ScrollArea>
    </Flex>
  )
}


export default HomeCoinPickerPanel