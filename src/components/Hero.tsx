import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white pt-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Hello!</h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8">
          Designer · Creative Problem Solver · Lifelong Learner
        </h2>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12">
          I'm Marissa, a creative professional trained in graphic design and learning. I love elephants, travel, and am passionate about people.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#learning-design"
            className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 