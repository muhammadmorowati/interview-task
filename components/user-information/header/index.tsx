import ModeButton from './ModeButton'
import MainHeader from './MainHeader'
import CenterHeader from './CenterHeader'

const Header = () => {
  return (
    <div className='bg-white w-[95%] flex h-14 rounded-full'>
      
     
      <MainHeader />
       <CenterHeader />
      <ModeButton />
    </div>
  )
}

export default Header