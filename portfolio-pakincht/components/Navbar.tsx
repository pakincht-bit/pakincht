import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import RollingLink from './RollingLink';

const Navbar: React.FC = () => {
  return (
    <nav className="flex w-full items-center justify-between py-8 px-4 sm:px-8 lg:px-12 bg-bg-main">
      <div className="text-lg font-medium text-text-main">
        <RollingLink
          name="Pakincht"
          href="/"
          className="text-lg font-medium text-text-main"
        />
      </div>
      <ul className="flex items-center gap-2 sm:gap-4">
        <li>
          <a
            href="mailto:pakincht@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 text-text-muted hover:text-text-main hover:bg-white/5 rounded-full transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} strokeWidth={1.5} fill="currentColor" fillOpacity={0.2} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pakincht/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 text-text-muted hover:text-text-main hover:bg-white/5 rounded-full transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} strokeWidth={1.5} fill="currentColor" fillOpacity={0.2} />
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1YKZMsIFGna-Wv_SDxNOOZy2_Uhd8170q/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-4 h-10 text-sm font-medium text-text-muted hover:text-text-main hover:bg-white/5 rounded-full border border-white/5 transition-all duration-300 uppercase tracking-widest"
          >
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
