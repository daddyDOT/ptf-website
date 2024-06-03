import { Button } from "@nextui-org/react"
import data, { sliderSettings } from "../../../utils/data"
import { useEffect, useRef, useState } from "react"
import Slider from "react-slick";

const Slideshow = () => {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePrevSlide = () => {
        slider.current.slickPrev();
        currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(3);
    };
    const handleNextSlide = () => {
        slider.current.slickNext();
        currentPage < 3 ? setCurrentPage(currentPage + 1) : setCurrentPage(1);
    };

    useEffect(() => {
        fetch('http://localhost:3000/news.json')
            .then(response => response.json())
            .then(data => setNews(data));
    }, []);

    const slider = useRef(null);

    useEffect(() => {
        console.log("currentPage", currentPage);
    }, [currentPage]);

  return (
    <>
        <div className="w-[100vw] absolute top-auto z-[2] h-[81vh]" id="slide-overlay">
        <div className="flex items-center justify-center w-full h-full">

        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center h-full gap-10 px-7">
                <div className="w-[70%] lg:w-[50%] h-full flex flex-col justify-center items-start">
                    <h1 className="text-5xl font-bold text-slate-100 !z-[10]">{news[currentPage-1]?.title}</h1>
                    <p className="text-slate-100 py-5 line-clamp-3 max-h-[90px] !z-[10]">{news[currentPage-1]?.description}</p>
                    
                    <div className="flex gap-10 flex-row-reverse absolute h-[70vh]">
                        <div className="w-full h-full flex flex-row-reverse justify-end items-end py-14 gap-[4rem]">
                            <a className="text-white flex items-center" id="arrow-right" onClick={() => handleNextSlide()}>
                                <span className="mr-[3rem] text-white" id="arrow-right-line">&#8213;</span>
                                <span className="text-white" id="arrow-right-anchor">&#10230;</span>
                            </a>
                            <a className="text-white flex items-center" id="arrow-left" onClick={() => handlePrevSlide()}>
                                <span className="text-white" id="arrow-left-anchor">&#10229;</span>
                                <span className="ml-[3rem] text-white" id="arrow-left-line">&#8213;</span>
                            </a>
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
        </div>
        <Slider ref={slider} {...sliderSettings}>
            {news.map((item) => (
                <div className='w-full' id={`slideshow${item.id}`} key={item.id}>
                    <div className="max-w-6xl mx-auto h-[81vh]">
                    </div>
                </div>
            ))}
        </Slider>
    </>
  )
}

export default Slideshow