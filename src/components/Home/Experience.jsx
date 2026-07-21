import React from 'react';
import { experience } from '@data/experience';
import SectionGlow from '../General/SectionGlow';

const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden w-full bg-(--color-bg) px-6 py-20 lg:py-28">
      <SectionGlow />
      <div className="max-w-4xl z-10 mx-auto">
        <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-3">
          Experience
        </p>
        <h2 className="text-3xl font-bold text-text mb-12">My Experience</h2>

        <ol className="relative border-l border-border pl-8 space-y-12">
          {experience.map((exp, index) => (
            <li key={index} className="relative">
              <span className="absolute -left-9.25 top-1.5 size-2.5 rounded-full bg-accent" />

              <p className="text-xs font-semibold tracking-wide text-text-muted uppercase mb-1">
                {exp.date}
              </p>
              <h3 className="text-xl font-bold text-text">{exp.title}</h3>
              <p className="text-sm font-medium text-accent mb-3">{exp.company}</p>
              <p className="text-text-muted leading-relaxed max-w-2xl">
                {exp.description}
              </p>

              {exp.tech?.length > 0 && (
                <ul className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-bg-subtle border border-border text-text-muted transition-colors duration-200 hover:border-accent hover:text-text"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              )}

              {exp.certificates?.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-3">
                  {exp.certificates.map((cert) => (
                    <a
                      key={cert.name}
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-accent hover:text-accent-strong underline underline-offset-2 transition-colors"
                    >
                      {cert.name} ↗
                    </a>
                  ))}
                </div>
              )}

              
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
};

export default Experience;
