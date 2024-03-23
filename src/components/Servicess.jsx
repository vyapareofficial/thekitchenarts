import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Services from './Services'
import BackToTopButton from './Backtotbutton'
import WhatsAppButton from './Whatsappbutton'

const Servicess = () => {
    return (
        <>
            <BackToTopButton />
            <WhatsAppButton />
            <Navbar />
            <Services />
            <Footer />
        </>
    )
}

export default Servicess