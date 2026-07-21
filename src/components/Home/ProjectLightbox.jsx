import React, { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import useTheme from '@hooks/useTheme';

const ProjectLightbox = ({ selectedProject, setSelectedProject }) => {
  const { isDark } = useTheme();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setSelectedProject]);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-auto"
      onClick={() => setSelectedProject(null)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={selectedProject.title}
        className="bg-(--color-surface) border border-border rounded-xl w-full max-w-lg max-h-[85vh] overflow-y-auto flex flex-col p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-text-muted hover:text-text cursor-pointer"
          onClick={() => setSelectedProject(null)}
          aria-label="Close"
        >
          <HiX className="size-5" />
        </button>

        <div className="flex items-center gap-3 pr-8">
          <img
            className="size-10 rounded-md object-contain bg-bg-subtle p-1.5"
            src={isDark ? selectedProject.lightImage : selectedProject.darkImage}
            alt={selectedProject.title}
          />
          <div>
            <h2 className="text-lg font-bold text-text leading-tight">
              {selectedProject.title}
            </h2>
            <p className="text-xs text-text-muted">{selectedProject.tagline}</p>
          </div>
        </div>

        <p className="text-sm text-text-muted leading-relaxed mt-5 whitespace-pre-line">
          {selectedProject.description}
        </p>

        {selectedProject.tech?.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-5">
            {selectedProject.tech.map((tech) => (
              <li
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-bg-subtle border border-border text-text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-3 mt-6">
          {selectedProject.github && (
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-border rounded-md h-11 px-5 text-sm font-medium text-text hover:border-accent transition-colors"
            >
              <FaGithub />
              GitHub Repo
            </a>
          )}

          {selectedProject.live && (
            <a
              href={selectedProject.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-accent text-(--color-accent-text) rounded-md h-11 px-5 text-sm font-medium hover:bg-accent-strong transition-colors ml-auto"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectLightbox;
