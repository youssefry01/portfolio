import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import Certificates from './Certificates';
import SectionGlow from '../General/SectionGlow';

const Home = () => {
  const iconStyle = 'size-8 ml-4 lg:size-12 lg:ml-10 hover:opacity-70';

  const handleDownload = () => {
    window.open(
      "https://raw.githubusercontent.com/youssefry01/youssefry01/main/Resume.pdf",
      "_blank"
    );
  };

  return (
    <section id='home' className='flex relative overflow-hidden flex-col justify-center items-center w-full px-6 lg:px-10 py-24 lg:py-32 bg-(--color-bg)'>
      <SectionGlow />
      <div className='flex flex-col z-10 lg:flex-row items-center lg:items-start gap-12 lg:gap-16 max-w-5xl w-full'>

        {/* Left column: photo + buttons, stacked */}
        <div className='flex flex-col items-center gap-10 shrink-0'>
          <img
            className="size-55 lg:size-80 rounded-full object-cover ring-2 ring-transparent
                      transition-all duration-300 ease-out
                      hover:ring-accent hover:scale-[1.03]"
            src={"https://github.com/youssefry01.png"}
            alt='Youssef Ramadan'
          />

          <div className='flex flex-col sm:flex-row items-center gap-4'>
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 rounded-full border border-border bg-text text-bg font-semibold text-sm hover:border-accent transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="18" width="18">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" />
              </svg>
              Download Resume
            </button>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 rounded-full border border-border text-text font-semibold text-sm hover:border-accent hover:text-accent transition-colors cursor-pointer"
            >
              Contact me
            </button>
          </div>
        </div>

        {/* Right column: name, title, bio */}
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
          <h1 className='text-4xl lg:text-6xl font-bold text-text tracking-tight'>
            Youssef Ramadan
          </h1>
          <p className='text-accent text-xl lg:text-2xl font-bold tracking-wide mt-2'>
            Computer Engineer Student <span className='font-normal'>based in</span> Egypt
          </p>

          <p className='text-text-muted text-lg leading-relaxed mt-5 max-w-2xl'>
            Computer Engineering student passionate about full-stack web development, with
            hands-on experience building complete applications — from secure, well-structured
            backend systems to clean, responsive interfaces people actually enjoy using.
          </p>

          <p className='text-text-muted text-lg leading-relaxed mt-5 max-w-2xl'>
            I put that foundation into practice by building complete projects end to end —
            designing the database, writing the backend logic, and shipping a polished interface
            on top. I'm currently focused on growing that skill set further and looking for
            opportunities to contribute as a software engineer.
          </p>

          <Certificates />
        </div>
      </div>

      <div className='flex flex-row w-full justify-center items-center text-text mt-16'>
        <a href="https://linktr.ee/yousseframadan" target="_blank" rel="noopener noreferrer"><SiLinktree className={`${iconStyle} ml-0`} /></a>
        <a href="https://linkedin.com/in/youssefry" target="_blank" rel="noopener noreferrer"><FaLinkedin  className={`${iconStyle}`} /></a>
        <a href="https://github.com/youssefry01" target="_blank" rel="noopener noreferrer"><FaGithub className={`${iconStyle}`} /></a>
        <a href="https://instagram.com/youssefry01" target="_blank" rel="noopener noreferrer"><FaInstagram className={`${iconStyle}`} /></a>
        <a href="https://facebook.com/100044181843682" target="_blank" rel="noopener noreferrer"><FaFacebook className={`${iconStyle}`} /></a>
        <a href="https://x.com/youssefry01" target="_blank" rel="noopener noreferrer"><FaTwitter className={`${iconStyle}`} /></a>
        <a href="https://youtube.com/@youssefry01" target="_blank" rel="noopener noreferrer"><FaYoutube className={`${iconStyle}`} /></a>
      </div>

    </section>
  )
}

export default Home;