import React from 'react'
import Slideshow from '../components/Layout/children/Slideshow'
import News from '../components/News'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <div className='w-[100vw] overflow-x-hidden'>
        <Slideshow />
        </div>
        <News></News>
        <Footer></Footer>
    </div>
  )
}

export default Home