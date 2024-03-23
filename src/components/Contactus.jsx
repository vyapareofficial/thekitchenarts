import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Contact from './Contact'
import BackToTopButton from './Backtotbutton'
import WhatsAppButton from './Whatsappbutton'

const Contactus = () => {
  return (
   <>
    <BackToTopButton />
      <WhatsAppButton />
      <Navbar />
      <Contact />
      <Footer />

   </>
  )
}

export default Contactus