import { Outlet } from "react-router-dom"
import Header from "../Shared/Navbar/Navbar"
import Footer from "../Shared/Footer/Footer"

const Main = () => {
  return (
    <>
      <Header/>
      <div><Outlet /></div>
      <Footer/>
    </>
  )
}

export default Main