import React from 'react';
import logo from "../../assets/logo3.png";
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaUser, FaMap } from "react-icons/fa";
import Divider from '../General/Divider';

const About = () => {

  const handleDownload = () => {
    window.open(
      "https://raw.githubusercontent.com/youssefry01/youssefry01/main/Resume.pdf",
      "_blank"
    );
  };

  return (
    <section id='about' className='flex flex-col w-full bg-[#171717] px-10 lg:px-auto'>

      <div className='flex flex-col w-full h-full mt-24 lg:mt-48 lg:px-96'>
          <p className='text-lg font-semibold text-[#CCCCCC] mb-4'>About</p>
          <p className='font-semibold text-4xl text-white'>About me</p>
      </div>


      <div className='flex flex-col lg:flex-row lg:px-96 mt-20 mb-24 lg:mb-64'>

        <div className='flex flex-col justify-center items-center lg:w-1/2'>
          <img className="size-10 lg:size-32" src={logo} alt='logo'/>
          <p className='text-center text-3xl font-extrabold text-white tracking-wide mb-6'>Youssef Ramadan</p>
           <p className='text-white text-xl text-center lg:text-start tracking-widest font-bold'>
            Computer Engineer <span className='font-normal'>based in</span> EGYPT</p>

            
            <button onClick={handleDownload}
            className="my-10 cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Download"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path> </g> </g></svg>
              Download Resume
            </button>
        </div>


        <div className='flex flex-col lg:w-1/2'>

          <div className='flex flex-wrap mt-10 items-center'>

            <div className='flex flex-col lg:w-1/2'>
              <div className='flex items-center'> 
                <FaUser className='self-center mr-2 size-4 text-white' />
                <p className="text-white font-semibold text-md tracking-wide">Youssef Ramadan</p>
              </div>

              <div className='flex items-center mt-10'> 
                <FaMap className='self-center mr-2 size-4 text-white' />
                <p className="text-white font-semibold text-md tracking-wide">Cairo, Egypt</p>
              </div>
            </div>


            <div className='flex flex-col lg:w-1/2 lg:ml-auto mt-8 lg:mt-0'>
              <div className='flex items-center'>
                <FaPhone className='self-center mr-2 size-4 text-white' />
                <a href="tel:+201026994847" className="text-white font-semibold text-lg">+20 102 699 4847</a>
              </div>

              <div className='flex items-center mt-10'>
                <MdMail className='self-center mr-2 size-4 text-white' />
                <a href="mailto:youssefry01@gmail.com" className="text-white font-semibold text-lg">youssefry01@gmail.com</a>
              </div>
            </div>

          </div>

          
          <Divider />

          <div className='flex flex-col justify-center text-center my-4'>
            <p className='text-lg font-semibold text-[#CCCCCC] tracking-wider'>I'm a Computer Engineering student. Explore my projects, web apps, and data-driven solutions that showcase practical, 
              real-world impact. Passionate about problem-solving, clean code, and continuous learning.</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About;