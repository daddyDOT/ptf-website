import videoFile from '../../../assets/ptf-video.mp4'
import NavBar from './NavBar'

const Hero = () => {
  return (
    <div>
        <div className='w-full h-[750px] overflow-hidden'>
            <NavBar />
            <div className='w-full h-[750px] absolute' id="overlay"></div>
            <video id="video" className='w-full' autoPlay loop muted>
                <source src={videoFile} type="video/mp4" />
            </video>
        </div>
    </div>
  )
}

export default Hero