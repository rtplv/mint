import { Flex, ScrollArea, Image } from '@mantine/core'
import style from './HomeCoinPickerPanel.module.css'
import usdtIconUrl from 'cryptocurrency-icons/svg/color/usdt.svg'
import btcIconUrl from 'cryptocurrency-icons/svg/color/btc.svg'
import ethIconUrl from 'cryptocurrency-icons/svg/color/eth.svg'
import usdcIconUrl from 'cryptocurrency-icons/svg/color/usdc.svg'
import xrpIconUrl from 'cryptocurrency-icons/svg/color/xrp.svg'
import xzcIconUrl from 'cryptocurrency-icons/svg/color/xzc.svg'
import sumoIconUrl from 'cryptocurrency-icons/svg/color/sumo.svg'
import subIconUrl from 'cryptocurrency-icons/svg/color/sub.svg'
import stxIconUrl from 'cryptocurrency-icons/svg/color/stx.svg'
import tntIconUrl from 'cryptocurrency-icons/svg/color/tnt.svg'

// const dummyCurrenciesList = ['USDT', 'BTC', 'ETH', 'USDC', 'XRP', 'XZC', 'SUMO', 'SUB', 'STX', 'TNT']

function HomeCoinPickerPanel({ className }) {
  // TODO: replace to dynamic import
  const iconUrls = [
    usdtIconUrl,
    btcIconUrl,
    ethIconUrl,
    usdcIconUrl,
    xrpIconUrl,
    xzcIconUrl,
    sumoIconUrl,
    subIconUrl,
    stxIconUrl,
    tntIconUrl
  ]
  return (
    <Flex className={`${style.root} ${className}`} justify="center">
      <Flex>

      </Flex>
      <ScrollArea>
        <Flex direction="row" h="7rem" gap="1rem">
          {iconUrls.map(iconUrl =>
            <Image src={iconUrl}
              key={iconUrl}
              className={style.currency_icon}/>
          )}
        </Flex>
      </ScrollArea>
    </Flex>
  )
}


export default HomeCoinPickerPanel