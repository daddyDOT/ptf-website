import { Outlet } from "react-router-dom"
import BottomBar from "./children/BottomBar"
import NavBar from "./children/NavBar"
import Footer from "../Footer"

const Layout = () => {
  return (
    <div>
        <div className="fixed w-full z-20">
          <NavBar />
          <BottomBar />
        </div>
        <div className="bg-[#131A2D] h-[19vh]"></div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout