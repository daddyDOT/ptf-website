import React from 'react'
import Slideshow from '../components/Layout/children/Slideshow'
import News from '../components/News'
import Card from '../components/Card'

const Home = () => {
  return (
    <div>
        <Slideshow />
        <News></News>
        <Card></Card>
    </div>
  )
}

export default Home