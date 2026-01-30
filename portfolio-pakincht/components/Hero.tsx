
import React from 'react';
import RollingLink from './RollingLink';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col gap-12 pt-28 pb-20 px-4 sm:px-8 lg:px-12 bg-bg-main">
      <div className="max-w-6xl">
        <h1 className="text-5xl font-light leading-[1.1] text-text-main sm:text-5xl lg:text-[4rem] tracking-tight">
          Designer based in Bangkok,
          <span className="block mt-2">
            Currently working at{' '}
            <RollingLink 
              name="SCBTechX"
              href="https://scbtechx.io" 
              target="_blank" 
              rel="noreferrer" 
              className="font-semibold text-white"
              autoRoll={true}
            />.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
