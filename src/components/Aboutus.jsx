import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import BackToTopButton from './Backtotbutton'
import WhatsAppButton from './Whatsappbutton'

const Aboutus = () => {
  return (
    <>
      <BackToTopButton />
      <WhatsAppButton />
      <Navbar />
      <About />
      <Footer />
    </>
  )
}

export default Aboutus