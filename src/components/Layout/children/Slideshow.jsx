import { Button } from "@nextui-org/react"
import data from "../../../utils/data"
import { useEffect, useState } from "react"

const Slideshow = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/news.json')
            .then(response => response.json())
            .then(data => setNews(data));
    }, []);

    useEffect(() => {
        console.log(news);
    }, [news]);

  return (
    <div className="w-full" id="slideshow">
        <div className="max-w-6xl mx-auto h-[81vh]">
            <div className="flex justify-between items-center h-full gap-10 px-7">
                <div className="w-[70%] lg:w-[50%] h-full flex flex-col justify-center items-start">
                    <h1 className="text-5xl font-bold text-slate-100">{data[0].title}</h1>
                    <p className="text-slate-100 py-5 line-clamp-3 max-h-[90px]">{data[0].description}</p>
                    
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
                <div className="w-[30%] lg:w-[50%] flex items-center justify-center p-5 lg:p-20 ml-[6rem]">
                <img src='./images/ptfsvg.svg' className="w-full"></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slideshow