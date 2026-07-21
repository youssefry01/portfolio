import React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import { certificates } from '../../data/certificates';

const Certificates = () => {
  return (
    <div className="mt-14 pt-8 border-t border-border">
      <h3 className="text-sm font-semibold text-text uppercase tracking-wide mb-3">
        Certifications
      </h3>
      <ul className="flex flex-wrap gap-2">
        {certificates.map(({ name, issuer, url }) => {
          const content = (
            <>
              <HiBadgeCheck className="size-4 text-accent" />
              <span className="text-text">{issuer}</span>
              <span className="text-text-muted">· {name}</span>
            </>
          );

          const badgeStyle =
            'inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md bg-(--color-bg-subtle) border border-(--color-border) transition-colors';

          return url ? (
            <li key={name}>
              <a
              
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${badgeStyle} hover:border-accent`}
              >
                {content}
              </a>
            </li>
          ) : (
            <li key={name} className={badgeStyle}>
              {content}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Certificates;