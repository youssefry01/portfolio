import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../data/navLinks';

const Nav = ({ activeId }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e, id) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-1 text-sm">
        {NAV_LINKS.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                aria-current={isActive ? 'true' : undefined}
                className={`px-3 py-2 rounded-md font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'text-(--color-accent)'
                    : 'text-(--color-text-muted) hover:text-(--color-text)'
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
