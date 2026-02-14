import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo1.png";
import Nav from "./Nav";
import { HiMenu } from "react-icons/hi";
import Sidebar from './Sidebar';

const Header = () => {
  const navigate = useNavigate();
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  return (
    <>
      <header ref={sidebarRef} className='flex fixed top-0 w-full p-6 h-20 bg-[#fafafa] z-9999 border-opacity-10 lg:justify-center items-center'>
        
        <Sidebar isSidebarVisible={isSidebarVisible} />

        <img className="cursor-pointer w-10 h-10 lg:w-12 lg:h-12 mr-20" src={logo} alt='logo' onClick={scrollToTop}/>

        <Nav />

        <HiMenu className="lg:hidden size-8 ml-auto" onClick={toggleSidebarVisibility}/>

      </header>
    </>
  )
}

export default Header;