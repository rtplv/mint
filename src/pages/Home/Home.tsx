import { HomeHeader } from './components/HomeHeader'
import { HomeCoinPickerPanel } from './components/HomeCoinPickerPanel'
import { HomeCoinComparator } from './components/HomeCoinComparator'
import style from './Home.module.css'
import { HomeCoinHistoryChart } from './components/HomeCoinHistoryChart'
import { Flex } from '@mantine/core'

function Home() {
  return (
    <>
      <HomeHeader/>
      <HomeCoinPickerPanel className={style.picker_panel}/>
      <Flex direction="column" gap="7rem" mt="4rem">
        <HomeCoinComparator />
        <HomeCoinHistoryChart />
      </Flex>
    </>
  )
}

export default Home
