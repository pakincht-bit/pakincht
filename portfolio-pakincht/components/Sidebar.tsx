import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { SOCIALS, TAGLINE, NAME } from '../constants';

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const navItems = ['About', 'Experience', 'Projects'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const IconMap: Record<string, React.ReactNode> = {
    Github: <Github size={20} />,
    Linkedin: <Linkedin size={20} />,
    Twitter: <Twitter size={20} />,
    Instagram: <Instagram size={20} />,
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-regular tracking-tight text-text-main sm:text-5xl">
          <a href="/">{NAME}</a>
        </h1>
        <h2 className="mt-3 text-lg font-regular leading-tight text-text-main sm:text-xl max-w-md">
          {TAGLINE}
        </h2>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`group flex items-center py-3 text-xs font-medium uppercase tracking-widest transition-all hover:text-text-main ${
                      isActive ? 'text-text-main' : 'text-text-muted'
                    }`}
                  >
                    <span
                      className={`mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-text-main ${
                        isActive ? 'w-16 bg-text-main' : 'bg-text-muted'
                      }`}
                    ></span>
                    <span>{item}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        {SOCIALS.map((social) => (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-text-muted transition hover:text-text-main"
              aria-label={`${social.name} (opens in a new tab)`}
            >
              {IconMap[social.icon]}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Sidebar;
