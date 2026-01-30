import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../constants';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onNavigate: (projectId: string) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onNavigate }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(isNaN(progress) ? 0 : progress);
    }
  };

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const otherProjects = PROJECTS.filter(p => p.id !== project.id);

  return (
    <div className="min-h-screen bg-bg-main pb-24 selection:bg-brand-accent/30">
      {/* Header / Back */}
      <nav className="sticky top-0 z-50 bg-bg-main/80 backdrop-blur-md border-b border-white/5 px-4 py-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-main transition-colors"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </button>
          <div className="flex items-center gap-3 text-sm font-medium text-text-muted">
            {project.logo && (
              <img src={project.logo} alt="" className="w-5 h-5 object-contain opacity-80" />
            )}
            {project.title} · {project.year}
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <section className="px-4 py-12 sm:px-8 lg:px-12 sm:py-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-6 mb-4">
              {project.logo && (
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                  <img src={project.logo} alt={`${project.title} logo`} className="w-full h-full object-contain" />
                </div>
              )}
              <h1 className="text-5xl font-regular leading-tight text-text-main sm:text-7xl tracking-tight">
                {project.title}
              </h1>
            </div>
            
            {project.details?.impact && (
              <p className="text-xl sm:text-2xl text-text-muted mb-10 leading-relaxed font-normal max-w-3xl">
                {project.details.impact}
              </p>
            )}

            <div className="flex flex-wrap gap-8 items-center text-text-muted">
              <div>
                <p className="text-xs uppercase tracking-widest font-bold mb-1 opacity-50">Year</p>
                <p className="text-base font-medium text-text-main">{project.year}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold mb-1 opacity-50">Sector</p>
                <p className="text-base font-medium text-text-main">{project.technologies[0]}</p>
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-2 bg-text-main text-bg-main rounded-full text-sm font-bold hover:bg-white transition-colors"
                >
                  Visit Site <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-[2.5rem] border border-white/5 aspect-[16/9] sm:aspect-[21/9] bg-bg-card">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Overview Section - Centered */}
        <section className="px-4 py-12 sm:px-8 lg:px-12 sm:py-24 border-b border-white/5">
          <div className="max-w-4xl mx-auto space-y-16">
            <p className="text-3xl sm:text-4xl text-text-main leading-snug tracking-tight font-normal">
              {project.details?.overview}
            </p>

            {/* Key Features Carousel */}
            {project.details?.features && (
              <div className="space-y-12">
                <div className="flex items-center justify-between">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-text-muted">Key Features</h2>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                       <button 
                        onClick={() => scrollByAmount('left')}
                        disabled={scrollProgress <= 0}
                        className={`p-2 rounded-full border border-white/5 bg-bg-card text-text-main transition-all ${scrollProgress <= 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-white/10 active:scale-95'}`}
                        aria-label="Previous feature"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button 
                        onClick={() => scrollByAmount('right')}
                        disabled={scrollProgress >= 100}
                        className={`p-2 rounded-full border border-white/5 bg-bg-card text-text-main transition-all ${scrollProgress >= 100 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-white/10 active:scale-95'}`}
                        aria-label="Next feature"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div 
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth"
                  >
                    {project.details.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex-shrink-0 w-[85vw] sm:w-[500px] snap-start group/feature"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-bg-card border border-white/5 transition-all duration-500 group-hover/feature:border-brand-accent/20">
                          {feature.image ? (
                            <img 
                              src={feature.image} 
                              alt={feature.title} 
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-full w-full bg-gradient-to-br from-bg-card to-bg-main" />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-60" />
                        </div>
                        
                        <div className="mt-8 px-2">
                          <h4 className="text-2xl font-medium text-text-main mb-3 flex items-center gap-3">
                            {feature.title}
                          </h4>
                          <p className="text-lg text-text-muted leading-relaxed font-normal">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                    {/* Scroll Spacer */}
                    <div className="flex-shrink-0 w-8 sm:w-24" />
                  </div>

                  {/* Carousel Progress Bar */}
                  <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden mt-4">
                    <div 
                      className="h-full bg-brand-accent/30 rounded-full transition-all duration-150"
                      style={{ 
                        width: '20%', 
                        marginLeft: `${scrollProgress * 0.8}%` 
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16 sm:gap-x-20 pt-8">
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted">Goals</h3>
                <p className="text-base text-text-muted leading-relaxed font-normal">
                  {project.details?.goal || "Establish a cohesive digital experience that simplifies complex user flows and drives measurable engagement."}
                </p>
              </div>

              {/* Challenge & Solution */}
              {project.details?.challenge && (
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted">The Challenge</h3>
                  <p className="text-base text-text-muted leading-relaxed font-normal">
                    {project.details.challenge}
                  </p>
                </div>
              )}
              {project.details?.solution && (
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted">The Solution</h3>
                  <p className="text-base text-text-muted leading-relaxed font-normal">
                    {project.details.solution}
                  </p>
                </div>
              )}

              <div className="space-y-4">
               <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted">My role</h3>
                <p className="text-base text-text-muted leading-relaxed font-normal">
                  {project.details?.roleDescription || "I led the product design from research through to final delivery, ensuring alignment between technical constraints and user needs."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Centered Project Details */}
        <section className="px-4 py-20 sm:px-8 lg:px-12 mt-12">
          <div className="max-w-4xl mx-auto space-y-32">
            
            {/* Process Slides */}
            {project.details?.process && (
              <div className="space-y-32">
                {project.details.process.map((slide, i) => (
                  <div key={i} className="group/slide scroll-mt-32">
                    <div className="max-w-3xl">
                      <h3 className="text-3xl font-medium text-text-main mb-8 tracking-tight flex items-center gap-6">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-accent/10 text-sm font-bold text-brand-accent border border-brand-accent/20">0{i+1}</span>
                        {slide.sectionTitle}
                      </h3>
                      <p className="text-xl text-text-muted mb-10 leading-relaxed">
                        {slide.content}
                      </p>
                      {slide.points && (
                        <ul className="grid sm:grid-cols-1 gap-6 pl-16 mb-12">
                          {slide.points.map((point, idx) => (
                            <li key={idx} className="relative text-lg text-text-muted/80 leading-relaxed font-normal before:absolute before:-left-8 before:top-4 before:h-px before:w-6 before:bg-brand-accent/30">
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {slide.image && (
                      <div className="mt-12 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-inner bg-bg-card/50">
                         <img src={slide.image} alt={slide.sectionTitle} className="w-full h-auto" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Other Projects Section */}
        <section className="mt-48 border-t border-white/5 pt-24 px-4 sm:px-8 lg:px-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-16 text-center">More Case Studies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {otherProjects.map(other => (
              <button 
                key={other.id}
                onClick={() => onNavigate(other.id)}
                className="group relative flex flex-col gap-6 text-left"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-[2rem] bg-bg-card border border-white/5">
                  <img 
                    src={other.image} 
                    alt={other.title} 
                    className="w-full h-full object-cover grayscale opacity-40 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-center px-2">
                  <div className="pr-4">
                    <h3 className="text-xl font-medium text-text-main mb-0.5 transition-colors group-hover:text-white">{other.title}</h3>
                    <p className="text-sm text-text-muted">{other.year} · {other.technologies[0]}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex flex-shrink-0 items-center justify-center transition-all group-hover:bg-text-main group-hover:text-bg-main group-hover:translate-x-1">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;