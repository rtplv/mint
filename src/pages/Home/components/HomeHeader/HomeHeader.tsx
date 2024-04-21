import style from './HomeHeader.module.css'
import LogoUrl from '@/assets/logo.png'
import { Flex, Text } from "@mantine/core";

function HomeHeader() {
  return (
    <header>
      <Flex className={style.logo}
            align="center"
            gap=".75rem"
            direction="row">
        <img className={style.logo_img}
             src={LogoUrl}
             alt="App logo"/>
        <Text
          className={style.logo_title}
          size="2rem"
          fw={600}
          variant="gradient"
          gradient={{ from: 'teal', to: 'lime', deg: 90 }}
        >
          Mint
        </Text>
      </Flex>
    </header>
  );
}

export default HomeHeader;