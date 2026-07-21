import React, { useState } from 'react';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import ProjectLightbox from './ProjectLightbox';
import { projects } from '@data/projects';
import useTheme from '@hooks/useTheme';
import SectionGlow from '../General/SectionGlow';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { isDark } = useTheme();

  return (
    <section id="projects" className="relative overflow-hidden w-full bg-bg-subtle px-6 py-20 lg:py-28">
      <SectionGlow />
      <div className="max-w-4xl z-10 mx-auto">
        <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-3">
          Projects
        </p>
        <h2 className="text-3xl font-bold text-text mb-12">My Work</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-lg border border-border bg-(--color-surface) p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={isDark ? project.lightImage : project.darkImage}
                  alt=""
                  className="size-10 rounded-md object-contain bg-bg-subtle p-1.5"
                />
                <div>
                  <h3 className="font-bold text-text leading-tight">{project.title}</h3>
                  <p className="text-xs text-text-muted">{project.tagline}</p>
                </div>
              </div>

              <p className="text-sm text-text-muted leading-relaxed mb-4">
                {project.summary}
              </p>

              <ul className="flex flex-wrap gap-2 mb-5">
                {project.tech?.length > 0 && project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="text-xs font-mono px-2 py-1 rounded-md bg-bg-subtle border border-border text-text-muted transition-colors duration-200 hover:border-accent hover:text-text"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 mt-auto pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-text transition-colors"
                >
                  <FaGithub className="size-4" />
                  Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-text transition-colors"
                  >
                    <FaArrowUpRightFromSquare className="size-3.5" />
                    Live Demo
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="ml-auto text-sm font-medium text-accent hover:text-accent-strong transition-colors cursor-pointer"
                >
                  Details
                </button>
              </div>
            </article>
          ))}
        </div>

        {selectedProject && (
          <ProjectLightbox
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
