
import React, { useRef, useState, useEffect } from 'react';
import { SIDE_PROJECTS } from '../constants';

const SideProjectsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(isNaN(progress) ? 0 : progress);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative group/section">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth"
      >
        {SIDE_PROJECTS.map((project) => {
          const Content = (
            <div className="flex-shrink-0 w-[320px] sm:w-[420px] snap-start group cursor-pointer">
              {/* Image Container - Now clean without title overlay */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-bg-card border border-white/5 transition-all duration-700 group-hover:border-white/10 group-hover:shadow-2xl group-hover:shadow-black/40">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Project Details Below Image */}
              <div className="mt-4 px-4">
                <div className="flex flex-col gap-2">
                  <p className="mt-1 text-lg text-text-muted/70 leading-relaxed font-normal group-hover:text-text-muted transition-colors duration-500">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          );

          if (project.link) {
            return (
              <a 
                key={project.id} 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="contents"
              >
                {Content}
              </a>
            );
          }

          return <React.Fragment key={project.id}>{Content}</React.Fragment>;
        })}
        {/* End of scroll spacer */}
        <div className="flex-shrink-0 w-24" />
      </div>
      
      {/* Interactive Progress bar */}
      <div className="relative h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 h-full bg-text-main/20 rounded-full transition-all duration-300 ease-out"
          style={{ 
            width: '20%', 
            left: `${scrollProgress * 0.8}%` 
          }}
        />
      </div>

      {/* Visual Navigation Hint */}
      <div className="mt-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-text-muted/30">
        <span>Slide to explore</span>
        <div className="flex gap-4">
          <span className={scrollProgress < 5 ? 'opacity-20' : 'opacity-100 transition-opacity'}>Prev</span>
          <span className={scrollProgress > 95 ? 'opacity-20' : 'opacity-100 transition-opacity'}>Next</span>
        </div>
      </div>
    </div>
  );
};

export default SideProjectsSection;
