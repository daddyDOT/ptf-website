import { Button } from "@nextui-org/react"
import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa"
import { Link } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='w-full z-10 overflow-visible transition-width duration-500 ease-in-out' id="big-nav">
        <div className="max-w-6xl px-5 mx-auto flex justify-between items-center overflow-visible">
            <div className='h-full bg-[#131A2D] w-[30%]'>
              <img src="./images/logotransparentsvg.svg" className='py-[1rem] transition-width duration-500 ease-in-out' style={{width: scrolled ? "90px" : "150px"}}></img>
            </div>
            <div className='h-full w-[70%] overflow-visible flex justify-end'>
              <div className="w-[100vw] absolute z-[10] transition-height duration-500 ease-in-out" style={{ height: scrolled ? "125px" : "190px" }}>
                <div className="flex h-full items-center justify-end gap-7">
                <Link to="/register" className="text-white font-medium">
                  <Button radius="full" variant="bordered" className="tracking-wide border-[#FFFFFF40] border-[1px] text-slate-100 px-6">Kreiraj račun</Button>
                </Link>
                <Link to="/login" className="text-white font-medium">
                  <Button radius="full" className="bg-white font-medium px-6 tracking-wide" startContent={<FaUserAlt className="text-[#131A2D] mr-1" />}>Prijavi se</Button>
                </Link>
                </div>  
              </div>
              <div className="w-[100vw] bg-[#323848] skew-x-[-24deg] transition-height duration-500 ease-in-out" style={{ height: scrolled ? "125px" : "190px" }}></div>
            </div>
        </div>
    </div>
  )
}

export default NavBar