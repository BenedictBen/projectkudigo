import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <MainContent/>
        <Footer/>
    </div>
  )
}

export default Home