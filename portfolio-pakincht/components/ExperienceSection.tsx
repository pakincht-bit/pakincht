import React, { useEffect, useRef, useState } from 'react';
import { EXPERIENCES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const ExperienceItem: React.FC<{ exp: typeof EXPERIENCES[0]; index: number }> = ({ exp, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <li 
      ref={domRef}
      className={`group relative transition-all duration-1000 transform delay-[${index * 100}ms] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="grid sm:grid-cols-4 gap-4 sm:gap-8">
        <header className="text-xs font-medium uppercase tracking-wide text-text-muted pt-1">
          {exp.period}
        </header>
        <div className="sm:col-span-3">
          <h3 className="text-xl font-medium text-text-main transition-colors">
            <a 
              href={exp.link || '#'} 
              className="inline-flex items-center gap-1"
              target={exp.link ? "_blank" : undefined}
              rel={exp.link ? "noreferrer" : undefined}
            >
              <span>{exp.role} · {exp.company}</span>
              <ArrowUpRight 
                size={16} 
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 shrink-0 text-text-muted group-hover:text-text-main" 
              />
            </a>
          </h3>
          <p className="mt-3 text-lg text-text-muted font-normal leading-normal">
            {exp.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {exp.skills.map((skill) => (
              <li key={skill} className="rounded-full bg-[#232730] px-3 py-1 text-xs font-medium text-text-muted border border-white/5">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <ol className="flex flex-col gap-16">
      {EXPERIENCES.map((exp, index) => (
        <ExperienceItem key={exp.id} exp={exp} index={index} />
      ))}
    </ol>
  );
};

export default ExperienceSection;