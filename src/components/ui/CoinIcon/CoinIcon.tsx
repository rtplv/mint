import style from './CoinIcon.module.css'
import { Image } from '@mantine/core'
import { useEffect, useState } from 'react'
import { ImageProps } from '@mantine/core'
import { checkCoinIconSvgAvailability } from '@/components/ui/CoinIcon/checkCoinIconSvgAvailability.ts'

export interface CoinIconProps {
  name: string
  placeholderUrl: string
  imageProps: ImageProps
}

export function CoinIcon({ name, placeholderUrl, imageProps } : CoinIconProps) {
  const [iconUrl, setIconUrl] = useState('')

  useEffect(() => {
    if (!checkCoinIconSvgAvailability(name)) {
      setIconUrl(placeholderUrl)
      return
    }

    import((`../../../../node_modules/cryptocurrency-icons/svg/color/${name.toLowerCase()}.svg`))
      .then(module => setIconUrl(module.default))
  }, [name])
  
  return (
    <Image src={iconUrl}
      key={iconUrl}
      className={style.currency_icon}
      {...imageProps}/>
  )
}