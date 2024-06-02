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
        <hr className="border-[0px] mb-[19vh]"></hr>
        <Outlet />
    </div>
  )
}

export default Layout