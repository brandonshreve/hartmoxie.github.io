import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Home: React.FC = () => {
  const portfolioItems = [
    {
      title: 'Learning Experience Design',
      description: 'Creating engaging and effective learning experiences through thoughtful design',
      link: '/learning-design',
      imageUrl: 'https://placehold.co/800x450/4f46e5/ffffff?text=Learning+Design'
    },
    {
      title: 'Technical Writing',
      description: 'Simplifying complex concepts through clear and engaging documentation',
      link: '/technical-writing',
      imageUrl: 'https://placehold.co/800x450/7c3aed/ffffff?text=Technical+Writing'
    },
    {
      title: 'Graphic Design',
      description: 'Creating visually stunning designs that communicate effectively',
      link: '/graphic-design',
      imageUrl: 'https://placehold.co/800x450/ec4899/ffffff?text=Graphic+Design'
    },
  ];

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
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 