import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectSectionProps {
  onSelectProject: (projectId: string) => void;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ onSelectProject }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      {PROJECTS.map((project) => (
        <li 
          key={project.id} 
          onClick={() => onSelectProject(project.id)}
          className="group relative cursor-pointer flex flex-col h-[440px] overflow-hidden rounded-[2.5rem] border border-white/5 p-8 pb-0 gap-8 transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:shadow-black/20"
          style={{ backgroundColor: project.cardBgColor || 'var(--bg-card, #232730)' }}
        >
          {/* Project Icon/Logo */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/5 shadow-inner overflow-hidden">
            {project.logo ? (
              <img 
                src={project.logo} 
                alt={`${project.title} logo`} 
                className="w-14 h-14 object-contain" 
              />
            ) : (
              <span className="text-xl font-medium text-text-main opacity-80">{project.title[0]}</span>
            )}
          </div>
          
          {/* Text Content */}
          <div className="space-y-1">
            <h3 className="text-3xl font-regular tracking-tight text-text-main">
              {project.title}
            </h3>
            <p className="text-lg text-text-muted leading-snug max-w-[90%]">
              {project.description}
            </p>
          </div>

          {/* Image Area */}
          <div className="mt-auto relative w-full h-[240px] overflow-hidden">
            <div className="w-full h-full rounded-t-[1.5rem] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-[10px] group-hover:translate-y-[5px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top opacity-90 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProjectSection;