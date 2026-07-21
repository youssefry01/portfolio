import React from 'react';

const SectionGlow = ({ size = 250, className = '' }) => {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div
        style={{ width: size, height: size }}
        className={`rounded-full bg-accent/15 dark:bg-accent/10 blur-[120px] ${className}`}
      />
    </div>
  );
};

export default SectionGlow;