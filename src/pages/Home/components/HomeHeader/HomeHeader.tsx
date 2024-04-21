import style from './HomeHeader.module.css'
import LogoUrl from '@/assets/logo.png'
import { Flex } from "@mantine/core";

function HomeHeader() {
  return (
    <header>
      <Flex className={style.logo}
            align="center"
            gap="1rem"
            direction="row">
        <img className={style.logo_img}
             src={LogoUrl}
             width="4rem"
             alt="App logo"/>
        <h1 className={style.logo_title}>Mint</h1>
      </Flex>
    </header>
  );
}

export default HomeHeader;