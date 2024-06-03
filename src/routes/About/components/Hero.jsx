import { Button } from "@nextui-org/react"

const Hero = () => {
  return (
    <div className="w-full" id="about">
        <div className="max-w-6xl mx-auto h-[81vh]">
            <div className="flex justify-between items-center h-full gap-10 px-7">
                <div className="w-[70%] lg:w-[50%] h-full flex flex-col justify-center items-start">
                    <h1 className="text-5xl font-bold text-slate-100">O Politehničkom fakultetu u Zenici</h1>
                    <p className="text-slate-100 py-5 line-clamp-3 max-h-[90px]">Organizaciona jedinica Univerziteta u Zenici, osnovana odlukom Skupštine Zeničko-dobojskog kantona dana 27.07.2011. godine...</p>
                    
                    <div className="flex gap-10 flex-row-reverse absolute h-[70vh]">
                        <div className="w-full h-full flex flex-row-reverse justify-end items-end py-14 gap-[4rem]">
                            <div className="text-white flex items-center" id="arrow-right">
                                <span className="mr-[3rem] text-white" id="arrow-right-line">&#8213;</span>
                                <span className="text-white" id="arrow-right-anchor">&#10230;</span>
                            </div>
                            <div className="text-white flex items-center" id="arrow-left">
                                <span className="text-white" id="arrow-left-anchor">&#10229;</span>
                                <span className="ml-[3rem] text-white" id="arrow-left-line">&#8213;</span>
                            </div>
                        </div>
                    </div>
                    <Button radius="full" className="bg-white text-[#131A2D] px-5 py-3 mt-5 font-medium">Saznaj više</Button>
                </div>
                <div className="w-[30%] lg:w-[50%] flex items-center justify-center p-5 pr-0 lg:p-20 lg:pr-0 ml-[6rem]">
                    <img src='./images/ptfsvg.svg' className="w-full"></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero