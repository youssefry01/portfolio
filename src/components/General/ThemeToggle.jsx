import React from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import useTheme from '@hooks/useTheme';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`flex items-center justify-center size-9 rounded-full border border-border text-text-muted hover:text-text hover:border-accent transition-colors cursor-pointer ${className}`}
    >
      {isDark ? <HiOutlineSun className="size-4.5" /> : <HiOutlineMoon className="size-4.5" />}
    </button>
  );
};

export default ThemeToggle;
