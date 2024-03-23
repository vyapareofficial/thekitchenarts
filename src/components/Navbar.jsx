import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/images/kitchen_art_logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = ({test,scrollToContact,scrollToModularwardrobe,scrollToModularkitchen,scrollToService,scrollToAboutus}) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  


  return (
    <div className='flex justify-between h-[100px] items-center py-4 sm:h-24 w-full mx-auto bg-[#890809] px-2 sm:py-4 text-black'>
      <img className='w-[150px] sm:w-[200px] '  src={logo} alt="" />
      
      <ul className='hidden md:flex'>
        <li className='p-4 font-normal text-xl text-white hover:text-white hover:cursor-pointer'>
          <span><NavLink to="/">HOME</NavLink></span>
        </li>
        <li className='p-4  font-normal text-xl text-white hover:text-white hover:cursor-pointer '>
          <span><NavLink to="/about">ABOUT US</NavLink></span>
        </li>
        <li onClick={scrollToService} className='p-4  font-normal text-xl text-white hover:text-white hover:cursor-pointer'>
          <span> <NavLink to="/service">SERVICES</NavLink></span>
        </li>
        <li onClick={scrollToModularkitchen} className='p-4  font-normal text-xl text-white hover:text-white hover:cursor-pointer'>
          <span><NavLink to="/modularkitchen">MODULAR KITCHEN </NavLink> </span>
        </li>
        <li className='p-4  font-normal text-xl text-white hover:text-white hover:cursor-pointer'>
          <span><NavLink to="/modularwardrobe">MODULAR WARDROBE</NavLink></span>
        </li>
        <li   className='p-4  font-normal text-xl text-white hover:text-white hover:cursor-pointer'>
          <span><NavLink to="/contact">CONTACT US</NavLink></span>
        </li>
      </ul>

      
      
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose color='white' size={20} /> : <AiOutlineMenu color='white' size={20} />}
      </div>
      
      <ul className={nav ? 'fixed z-50 left-0 top-0 w-[65%] h-full bg-[#890809] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[white] m-4'></h1>
        <li className='p-4 font-normal text-xl text-[#D9D9D9] hover:text-[#11B99F] hover:cursor-pointer' onClick={handleNav}>
        <span><NavLink to="/">HOME</NavLink></span>
        </li>
        <li className='p-4 font-normal text-xl text-[#D9D9D9] hover:text-[#11B99F] hover:cursor-pointer' onClick={handleNav}>
        <span><NavLink to="/about">ABOUT US</NavLink></span>
        </li>
        <li className='p-4 font-normal text-xl text-[#D9D9D9] hover:text-[#11B99F] hover:cursor-pointer' onClick={ handleNav}>
        <span> <NavLink to="/service">SERVICES</NavLink></span>
        </li>
        <li className='p-4  font-normal text-xl text-[#D9D9D9] hover:text-[#11B99F] hover:cursor-pointer' onClick={ handleNav}>
        <span><NavLink to="/modularkitchen">MODULAR KITCHEN </NavLink> </span>
        </li>
        <li className='p-4  font-normal text-xl text-[#D9D9D9] hover:text-[#11B99F] hover:cursor-pointer' onClick={ handleNav}>
        <span><NavLink to="/modularwardrobe">MODULAR WARDROBE</NavLink></span>
        </li>
        <li className='p-4  font-normal text-xl text-[#D9D9D9] hover:text-[#11B99F] hover:cursor-pointer' onClick={ handleNav}>
        <span><NavLink to="/contact">CONTACT US</NavLink></span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
