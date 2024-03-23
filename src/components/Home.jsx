import React from 'react'
import Navbar from './Navbar'
import BackToTopButton from './Backtotbutton'
import WhatsAppButton from './Whatsappbutton'
import Herosection from './Herosection'
import About from './About'
import Services from './Services'
import Steps from './Steps'
import Benefitss from './Benefitss'
import Banner from './Banner'
import Kitchenlayouts from './Kitchenlayouts'
import Modularwardrobe from './Modularwardrobe'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <BackToTopButton/>
      <WhatsAppButton/>
      <Navbar  />
      <Herosection  />
      <About  />
      <Services />
      <Steps />
      <Benefitss  />
      <Banner   />
      <Kitchenlayouts />
      <Testimonials />
      <Contact  />
      <Footer />
      </>
  )
}

export default Home