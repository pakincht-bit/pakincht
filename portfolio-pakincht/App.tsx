
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';
import ProjectDetail from './components/ProjectDetail';
import { ABOUT_TEXT, PROJECTS } from './constants';

// Added delay prop to ScrollReveal to support staggered animations
const ScrollReveal: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  id?: string; 
  'aria-label'?: string;
  delay?: number;
}> = ({ children, className, id, 'aria-label': ariaLabel, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

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
    <div
      ref={domRef}
      id={id}
      aria-label={ariaLabel}
      className={`${className} transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
};

const App: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        setSelectedProjectId(hash.replace('#project-', ''));
      } else {
        setSelectedProjectId(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    handlePopState(); // Initial check
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSelectProject = (id: string) => {
    setSelectedProjectId(id);
    window.history.pushState({ projectId: id }, '', `#project-${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedProjectId(null);
    window.history.pushState({}, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);

  if (selectedProjectId && selectedProject) {
    return (
      <div className="relative min-h-screen bg-bg-main font-sans text-text-main">
        <ProjectDetail 
          project={selectedProject} 
          onBack={handleBackToHome} 
          onNavigate={handleSelectProject} 
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-bg-main text-text-main">
      <div className="mx-auto max-w-7xl font-sans">
        <Navbar />
        <Hero />

        <main className="px-4 sm:px-8 lg:px-12 mt-6">
          {/* Main Case Studies */}
          <section id="projects" className="mb-48">
            <ProjectSection onSelectProject={handleSelectProject} />
          </section>

          {/* Centered Content Block (About & Experience) */}
          <div className="max-w-4xl mx-auto">
            
            {/* Bio / About - Each paragraph now reveals in order with staggered delay */}
            <div id="about" className="mb-48 scroll-mt-24" aria-label="About me">
              <div className="text-text-muted leading-tight space-y-10 font-normal text-2xl sm:text-3xl lg:text-4xl text-left tracking-tight">
                {ABOUT_TEXT.split('\n\n').filter(p => p.trim() !== '').map((paragraph, i) => (
                    <ScrollReveal key={i} delay={i * 200}>
                      <p className="text-text-main/90 hover:text-text-main transition-colors duration-500 cursor-default">
                        {paragraph.trim()}
                      </p>
                    </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Work History */}
            <ScrollReveal id="experience" className="mb-48 scroll-mt-24">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-text-muted mb-16 opacity-50">Experience</h2>
              <ExperienceSection />
            </ScrollReveal>

          </div>

          {/* Standard SaaS Footer */}
          <footer className="pb-16 border-t border-white/5 pt-12 text-sm text-text-muted font-normal flex flex-col sm:flex-row justify-between gap-4">
            <p className="opacity-60">
              &copy; {new Date().getFullYear()} Pakin Chitwaranggoon.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
