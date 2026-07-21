import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import logo from "@assets/logo1.png";
import logo2 from "@assets/logo3.png";
import useTheme from '@/hooks/useTheme';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  const iconStyle = 'flex items-center justify-center size-9 rounded-full border border-border text-(--color-text-muted) hover:text-text hover:border-(--color-accent) transition-colors';


  return (
    <footer className="w-full bg-(--color-bg) border-t border-border px-6 py-8">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-text">
          <img className="size-8" src={isDark ? logo2 : logo} alt="" aria-hidden="true" />
          Youssef Ramadan
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/youssefry01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className={iconStyle}
          >
            <FaGithub className="size-4" />
          </a>
          <a
            href="https://linkedin.com/in/youssefry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className={iconStyle}
          >
            <FaLinkedin className="size-4" />
          </a>
          <a href="mailto:youssefry01@gmail.com" aria-label="Send an email" className={iconStyle}>
            <MdMail className="size-4" />
          </a>
        </div>

        <p className="text-sm text-text-muted">
          &copy; {currentYear} Youssef Ramadan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;