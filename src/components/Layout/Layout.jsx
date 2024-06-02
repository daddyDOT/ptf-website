import { Outlet } from "react-router-dom"
import BottomBar from "./children/BottomBar"
import NavBar from "./children/NavBar"

const Layout = () => {
  return (
    <div>
        <NavBar />
        <BottomBar />
        <Outlet />
    </div>
  )
}

export default Layout