import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";

const ProductsNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const titleStyle = 'font-JosefinSans font-normal m-4 text-[#605E5E] cursor-pointer hover:text-[#A0A09F]';
  const activeLinkStyle = 'text-black';

  const handleClick = () => {
    if (location.pathname === "/") {
      // Already on home → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate("/");
    } else {
      // Not on home → navigate to home page
      navigate("/");
    }
  };
  
  return (
    <div className=''>
        <ul className='hidden lg:flex justify-center text-sm items-center mr-6'>
            <li className={`${titleStyle} ${location.hash === '' ? activeLinkStyle : ''}`} onClick={handleClick}>HOME</li>
            <li className={titleStyle} ><a href='#about' className={`${titleStyle} ${location.hash === '#about' ? activeLinkStyle : ''}`}>ABOUT</a> </li>
            <li className={titleStyle} ><a href='#projects' className={`${titleStyle} ${location.hash === '#projects' ? activeLinkStyle : ''}`}>PROJECTS</a> </li>
            <li className={titleStyle} ><a href='#experience' className={`${titleStyle} ${location.hash === '#experience' ? activeLinkStyle : ''}`}>EXPERIENCE</a> </li>
            <li className={titleStyle} ><a href='#contact' className={`${titleStyle} ${location.hash === '#contact' ? activeLinkStyle : ''}`}>CONTACT</a> </li>
        </ul>
    </div>
  )
}

export default ProductsNav;