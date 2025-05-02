import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LearningDesign from './components/LearningDesign';
import TechnicalWriting from './components/TechnicalWriting';
import GraphicDesign from './components/GraphicDesign';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <LearningDesign />
        <TechnicalWriting />
        <GraphicDesign />
        <section id="resume" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">Resume</h2>
            {/* Add your resume content here */}
          </div>
        </section>
        <Contact />
      </main>
    </div>
  );
};

export default App;
