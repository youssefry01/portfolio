import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo1.png";
import Nav from "./Nav";
import { HiMenu } from "react-icons/hi";
import Sidebar from './Sidebar';

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarVisible(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header ref={sidebarRef} className='flex fixed  top-0 w-full p-4 h-20 bg-[#fafafa] z-9999 border-opacity-10 lg:justify-center items-center'>
        
        <Sidebar isSidebarVisible={isSidebarVisible} />

        <div className=""><Link to='/'><img className="w-10 h-10 lg:w-12 lg:h-12 mr-20" src={logo} alt='logo'/></Link></div>

        <Nav />

        <HiMenu className="lg:hidden size-8 ml-auto" onClick={toggleSidebarVisibility}/>

      </header>
    </>
  )
}

export default Header;