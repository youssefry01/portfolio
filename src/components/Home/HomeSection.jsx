import React from 'react';
import profile from "../../assets/profile.png";
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const HomeSection = () => {
  const titleStyle = 'text-4xl lg:text-8xl font-bold text-white tracking-widest mb-6';

  return (
    <section id='home' className='flex flex-col lg:flex-row justify-center items-center w-full bg-black px-10 lg:px-auto'>
      <div className='flex flex-col h-full mt-48'>

        <div className='flex lg:flex-row'>
          <div className='flex flex-col'>
            <p className={titleStyle}>I'M</p>
            <p className={titleStyle}>YOUSSEF</p>
            <p className={titleStyle}>RAMADAN.</p>
          </div>
          <div className='flex flex-col h-full justify-center items-center mx-20'>
            <img className="w-48 h-48 lg:w-96 lg:h-96 rounded-full object-scale-down" src={profile} alt='profile'/>
          </div>
        </div>

        <p className='text-white text-2xl text-center lg:text-start lg:text-3xl tracking-widest font-bold mt-4'>Computer Engineer <span className='font-normal'>based in</span> EGYPT</p>


        <div className='flex flex-row items-center mt-8 ml-16'>

          <div className='flex flex-row text-white text-center mr-12'>
            <MdMail className='self-center mr-2 size-6' />
            <a href="mailto:youssefry01@gmail.com" className="text-white font-semibold text-lg">youssefry01@gmail.com</a>
          </div>
          
          <div className='flex flex-row text-white'>
            <FaPhone className='self-center mr-2 size-5' />
            <a href="tel:+201026994847" className="text-white font-semibold text-lg">+20 102 699 4847</a>
          </div>

        </div>

        <div className='flex items-center justify-center my-16'>
          <button className="group/button relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
            onClick={() => {
              const section = document.getElementById("contact");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-lg">Contact me</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-white/20" />
            </div>
          </button>
        </div>

        <div className='flex flex-row w-full justify-center items-center text-white mt-6 mb-10 lg:mb-0'>
          <a href="https://linktr.ee/yousseframadan"><SiLinktree className='size-12 hover:opacity-70' /></a>
          <a href="https://linkedin.com/in/youssefry"><FaLinkedin  className='size-12 ml-10 hover:opacity-70' /></a>
          <a href="https://github.com/youssefry01"><FaGithub className='size-12 ml-10 hover:opacity-70' /></a>
          <a href="https://instagram.com/youssefry01"><FaInstagram className='size-12 ml-10 hover:opacity-70' /></a>
          <a href="https://facebook.com/100044181843682"><FaFacebook className='size-12 ml-10 hover:opacity-70' /></a>
          <a href="https://x.com/youssefry01"><FaTwitter className='size-12 ml-10 hover:opacity-70' /></a>
          <a href="https://youtube.com/@youssefry01"><FaYoutube className='size-12 ml-10 hover:opacity-70' /></a>
        </div>
        
      </div>

    </section>
  )
}

export default HomeSection;