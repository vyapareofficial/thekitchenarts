import React from 'react'
import Img1 from "../assets/images/k1.png"
import Img2 from "../assets/images/k2.png"
import Img3 from "../assets/images/k3.png"
import Img4 from "../assets/images/k4.png"
import Img5 from "../assets/images/k5.png"
import Img6 from "../assets/images/k6.png"
import Img7 from "../assets/images/k7.png"
import Img8 from "../assets/images/k8.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import BackToTopButton from './Backtotbutton'
import WhatsAppButton from './Whatsappbutton'

const Modularkitchen = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

  return (
    <>
    <BackToTopButton />
    <WhatsAppButton />
    <Navbar />
    <section id="Modularwardrobe" className='bg-[#F9EBEB] p-10 sm:p-8 md:px-10'>
      <h1 className="title-font text-[#25285A] mb-8 text-center  text-4xl font-normal font-dm" data-aos="slide-down">MODULAR KITCHEN</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 px-3' data-aos="slide-up">
        <div className=' p-1 md:p-5 flex justify-center'>
          <img src={Img1} alt="" />
        </div>
        <div className=' p-1 md:p-5 flex justify-center'>
          <img src={Img2} alt="" />
        </div>
        <div className=' p-1 md:p-5 flex justify-center'>
          <img src={Img3} alt="" />
        </div>
        <div className=' p-1 md:p-5 flex justify-center'>
          <img src={Img4} alt="" />
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 px-3' data-aos="slide-up">
        <div className=' p-1 md:p-5 flex justify-center'>
          <img src={Img5} alt="" />
        </div>
        <div className=' p-1 md:p-5 flex justify-center'>
          <img src={Img6} alt="" />
        </div>
        <div className=' p-1 md:p-5 flex justify-center'>
          <img src={Img7} alt="" />
        </div>
        <div className=' p-1 md:p-5 flex justify-center'>
          <img src={Img8} alt="" />
        </div>
      </div>
    </section>
    <Footer />

  </>
  )
}

export default Modularkitchen