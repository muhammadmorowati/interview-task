import Header from './header'
import InformDivision from './inform'
import SideBar from './sidebar'

const UserInformation = () => {
  return (
      <div dir="rtl" className="bg-slate-200 h-screen flex">
  <SideBar />

  <div className="flex-1 flex flex-col items-center justify-center">
    <Header />
    <InformDivision />
  </div>
</div>
  )
}

export default UserInformation