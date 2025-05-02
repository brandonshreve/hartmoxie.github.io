import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in">
          Welcome to Hartmoxie
        </h1>
        <p className="text-xl md:text-2xl mb-12 animate-fade-in-delay">
          Creative Portfolio & Professional Showcase
        </p>
        <a
          href="#portfolio"
          className="bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 inline-block"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero; 