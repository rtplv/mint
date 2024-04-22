import style from './CoinIcon.module.css'
import { Image } from '@mantine/core'
import { useEffect, useState } from 'react'

export interface CoinIconProps {
  name: string
}

export function CoinIcon({ name } : CoinIconProps) {
  const [iconUrl, setIconUrl] = useState('')

  useEffect(() => {
    import((`../../../../node_modules/cryptocurrency-icons/svg/color/${name.toLowerCase()}.svg`))
      .then(module => setIconUrl(module.default))
  })
  
  return (
    <Image src={iconUrl}
      key={iconUrl}
      className={style.currency_icon}/>
  )
}