import React from 'react';

interface RollingLinkProps {
  name: string;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
}

const RollingLink: React.FC<RollingLinkProps> = ({ name, href, target, rel, className }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`group relative inline-flex ${className || ''}`}
    >
      <div className="flex overflow-hidden">
        {name.split('').map((char, i) => (
          <span
            key={i}
            className="relative inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${i * 15}ms` }}
          >
            <span className="block">{char === ' ' ? '\u00A0' : char}</span>
            <span className="absolute top-full left-0 block">
              {char === ' ' ? '\u00A0' : char}
            </span>
          </span>
        ))}
      </div>
    </a>
  );
};

export default RollingLink;