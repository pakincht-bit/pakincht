
import React from 'react';
import RollingLink from './RollingLink';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col gap-12 pt-[72px] lg:pt-[200px] pb-12 lg:pb-20 px-4 sm:px-8 lg:px-12 bg-bg-main">
      <div className="max-w-5xl">
        <h1 className="text-4xl font-medium leading-none text-text-main sm:text-5xl lg:text-[4.5rem] tracking-tight mb-8">
          <span className="block opacity-0 animate-blur-in" style={{ animationDelay: '0ms' }}>
            Full-Stack Product Builders based in Bangkok, Thailand
          </span>
        </h1>
        <p className="text-2xl sm:text-3xl text-text-muted font-normal opacity-0 animate-blur-in max-w-3xl leading-snug" style={{ animationDelay: '200ms' }}>
          Currently working at{' '}
          <RollingLink
            name="SCBTechX"
            href="https://scbtechx.io"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-text-main hover:text-white transition-colors"
            autoRoll={true}
          />.
        </p>
      </div>
    </section>
  );
};

export default Hero;
