import React from 'react'
import Slideshow from '../components/Layout/children/Slideshow'
import News from '../components/News'

const Home = () => {
  return (
    <div>
        <div className='w-[100vw] overflow-x-hidden'>
        <Slideshow />
        </div>
        <News></News>
    </div>
  )
}

export default Home