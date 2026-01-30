
import React from 'react';
import { EXPERIENCES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <ol className="flex flex-col gap-12">
      {EXPERIENCES.map((exp) => (
        <li key={exp.id} className="group relative">
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
      ))}
    </ol>
  );
};

export default ExperienceSection;
