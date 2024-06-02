import { Outlet } from "react-router-dom"
import BottomBar from "./children/BottomBar"
import NavBar from "./children/NavBar"

const Layout = () => {
  return (
    <div>
        <div className="fixed w-full z-20">
          <NavBar />
          <BottomBar />
        </div>
        <div className="bg-[#131A2D] h-[19vh]"></div>
        <Outlet />
    </div>
  )
}

export default Layout