import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/images/hero.jpg")',
              filter: 'brightness(0.5)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Marissa Hart
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="font-semibold text-white">UX Designer</span> & <span className="font-semibold text-white">Learning Experience Designer</span> crafting exceptional digital experiences
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                to="/learning-design" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              >
                View My Work
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:border-white rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-16">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Learning Design Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card group"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Learning Experience Design</h3>
              <p className="text-gray-600 mb-4">
                Creating engaging and effective learning experiences through thoughtful design
              </p>
              <Link
                to="/learning-design"
                className="text-primary font-medium inline-flex items-center group-hover:translate-x-1 transition-transform"
              >
                View Projects
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Technical Writing Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card group"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Technical Writing</h3>
              <p className="text-gray-600 mb-4">
                Simplifying complex concepts through clear and engaging documentation
              </p>
              <Link
                to="/technical-writing"
                className="text-primary font-medium inline-flex items-center group-hover:translate-x-1 transition-transform"
              >
                View Projects
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Graphic Design Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card group"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Graphic Design</h3>
              <p className="text-gray-600 mb-4">
                Creating visually stunning designs that communicate effectively
              </p>
              <Link
                to="/graphic-design"
                className="text-primary font-medium inline-flex items-center group-hover:translate-x-1 transition-transform"
              >
                View Projects
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 