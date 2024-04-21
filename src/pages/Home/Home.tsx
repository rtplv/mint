import { HomeHeader } from './components/HomeHeader'
import { HomeCoinPickerPanel } from './components/HomeCoinPickerPanel'
import style from './Home.module.css'

function Home() {
  return (
    <>
      <HomeHeader/>
      <HomeCoinPickerPanel className={style.picker_panel}/>
    </>
  )
}

export default Home
