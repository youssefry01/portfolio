import React from 'react';
import logo from "../../assets/logo1.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='flex flex-col bg-[#fafafa] w-full m-auto justify-center'>

      <div className="flex flex-col lg:flex-row w-full justify-center items-center p-2">
        <div className="flex flex-row justify-center items-center font-bold"><Link to='/'><img className="w-10 h-10 lg:w-12 lg:h-12 mr-2" src={logo} alt='logo'/></Link>Youssef Ramadan</div>
        <p className="text-black text-sm lg:text-m font-light lg:ml-48"> <span className="text-black text-opacity-60"> &copy; {currentYear} Youssef Ramadan.</span> All rights reserved.</p>

      </div>

    </footer> 
  )
}

export default Footer;