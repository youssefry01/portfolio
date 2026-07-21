import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import { NAV_LINKS } from '../../data/navLinks';
import ThemeToggle from '../General/ThemeToggle';

const Sidebar = ({ isSidebarVisible, setIsSidebarVisible, activeId }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Lock background scroll while the mobile menu is open, and let Escape close it.
  useEffect(() => {
    if (isSidebarVisible) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsSidebarVisible(false);
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
    document.body.style.overflow = '';
  }, [isSidebarVisible, setIsSidebarVisible]);

  const handleClick = (e, id) => {
    e.preventDefault();
    setIsSidebarVisible(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 10);
    }
  };

  if (!isSidebarVisible) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        onClick={() => setIsSidebarVisible(false)}
        aria-hidden="true"
      />
      <div
        className="fixed top-0 right-0 z-50 h-screen w-72 max-w-[80vw] p-6 overflow-y-auto bg-(--color-surface) border-l border-border shadow-xl lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between mb-8">
          <ThemeToggle />
          <button
            type="button"
            className="flex items-center justify-center size-9 rounded-full text-text hover:bg-bg-subtle cursor-pointer"
            onClick={() => setIsSidebarVisible(false)}
            aria-label="Close menu"
          >
            <HiX className="size-5" />
          </button>
        </div>

        <nav aria-label="Mobile primary">
          <ul className="flex flex-col gap-1 text-base font-medium">
            {NAV_LINKS.map(({ id, label }) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleClick(e, id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`block px-3 py-3 rounded-md transition-colors ${
                      isActive
                        ? 'text-accent bg-bg-subtle'
                        : 'text-text-muted hover:text-text hover:bg-bg-subtle'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;