import { Button } from "@nextui-org/react"
import { FaUserAlt } from "react-icons/fa"

const NavBar = () => {
  return (
    <div className='w-full z-10 overflow-visible' id="big-nav">
        <div className="max-w-6xl px-5 mx-auto flex justify-between items-center overflow-visible">
            <div className='h-full bg-[#131A2D] w-[30%]'>
              <img src="./images/LOGO.png" className="w-[150px] py-[1rem]"></img>
            </div>
            <div className='h-full w-[70%] overflow-visible flex justify-end'>
              <div className="w-[100vw] h-[190px] absolute z-[10]">
                <div className="flex h-full items-center justify-end gap-7">
                  <Button radius="full" variant="bordered" className="tracking-wide border-[#FFFFFF40] border-[1px] text-slate-100 px-6">Kreiraj račun</Button>
                  <Button radius="full" className="bg-white font-medium px-6 tracking-wide" startContent={<FaUserAlt className="text-[#131A2D] mr-1" />}>Prijavi se</Button>
                </div>  
              </div>
              <div className="w-[100vw] h-[190px] bg-[#323848] skew-x-[-24deg]"></div>
            </div>
        </div>
    </div>
  )
}

export default NavBar