import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';
import ProjectDetail from './components/ProjectDetail';
import { ABOUT_TEXT, PROJECTS } from './constants';

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
          {/* Main Case Studies - Full width of 7xl container */}
          <section id="projects" className="mb-32">
            <ProjectSection onSelectProject={handleSelectProject} />
          </section>

          {/* Centered Content Block (About & Experience) - Using max-w-4xl for readability */}
          <div className="max-w-4xl mx-auto">
            
            {/* Bio / About */}
            <section id="about" className="mb-32 scroll-mt-24" aria-label="About me">
              <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted mb-8 text-left">About me</h2>
              <div className="text-text-muted leading-relaxed space-y-6 font-normal text-lg lg:text-xl text-left">
                {ABOUT_TEXT.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Side Projects Section Hidden for now */}

            {/* Work History */}
            <section id="experience" className="mb-32 scroll-mt-24">
              <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted mb-12 text-left">Experience</h2>
              <ExperienceSection />
            </section>

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