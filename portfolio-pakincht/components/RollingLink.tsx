
import React, { useState, useEffect } from 'react';

interface RollingLinkProps {
  name: string;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  autoRoll?: boolean;
}

const RollingLink: React.FC<RollingLinkProps> = ({ name, href, target, rel, className, autoRoll }) => {
  const [isAutoRolling, setIsAutoRolling] = useState(false);

  useEffect(() => {
    if (autoRoll) {
      // Trigger the "demo" roll after a delay
      const startTimer = setTimeout(() => {
        setIsAutoRolling(true);
      }, 1000);

      // Roll back after it stays up for a bit
      const endTimer = setTimeout(() => {
        setIsAutoRolling(false);
      }, 2200);

      return () => {
        clearTimeout(startTimer);
        clearTimeout(endTimer);
      };
    }
  }, [autoRoll]);

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
            className={`relative inline-block transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full ${
              isAutoRolling ? '-translate-y-full' : ''
            }`}
            style={{ transitionDelay: `${i * 20}ms` }}
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
