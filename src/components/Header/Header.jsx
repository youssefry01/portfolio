import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '@assets/logo1.png';
import logo2 from '@assets/logo3.png';
import Nav from './Nav';
import { NAV_LINKS } from '@data/navLinks';
import { HiMenu } from 'react-icons/hi';
import Sidebar from './Sidebar';
import ThemeToggle from '../General/ThemeToggle';
import useActiveSection from '@/hooks/useActiveSection';
import useTheme from '@/hooks/useTheme';

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

const Header = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const location = useLocation();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sidebarRef = useRef(null);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebarVisibility = () => setIsSidebarVisible((prev) => !prev);

  const scrollToTop = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <header
        ref={sidebarRef}
        className={`fixed top-0 inset-x-0 z-50 h-20 flex items-center bg-(--color-bg)/90 backdrop-blur-sm transition-shadow ${
          isScrolled ? 'shadow-sm border-b border-border' : 'border-b border-transparent'
        }`}
      >
        <div className="w-full max-w-6xl mx-auto flex items-center px-6">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Go to top of page"
            className="cursor-pointer shrink-0"
          >
            <img className="w-10 h-10 lg:w-11 lg:h-11" src={isDark ? logo2 : logo} alt="Youssef Ramadan logo" />
          </button>

          <div className="ml-6">
            <Nav activeId={activeId} />
          </div>

          <div className="ml-auto flex items-center gap-3">
            <ThemeToggle className="hidden lg:flex" />
            <button
              type="button"
              className="lg:hidden flex items-center justify-center size-9 rounded-full text-text hover:bg-bg-subtle cursor-pointer"
              onClick={toggleSidebarVisibility}
              aria-label="Open menu"
              aria-expanded={isSidebarVisible}
            >
              <HiMenu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      <Sidebar
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
        activeId={activeId}
      />
    </>
  );
};

export default Header;
