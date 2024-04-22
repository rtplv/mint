import { HomeHeader } from './components/HomeHeader'
import { HomeCoinPickerPanel } from './components/HomeCoinPickerPanel'
import { HomeCoinComparator } from './components/HomeCoinComparator'
import style from './Home.module.css'

function Home() {
  return (
    <>
      <HomeHeader/>
      <HomeCoinPickerPanel className={style.picker_panel}/>
      <HomeCoinComparator />
    </>
  )
}

export default Home
