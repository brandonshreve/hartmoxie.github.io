import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Home: React.FC = () => {
  const portfolioItems = [
    {
      title: 'UX Design',
      description: 'Creating visually stunning designs that communicate effectively',
      link: '/portfolio/graphic-design',
      imageUrl: '/images/thumbnails/ux_thumbnail.png'
    },
    {
      title: 'Learning Experience Design',
      description: 'Creating engaging and effective learning experiences through thoughtful design',
      link: '/portfolio/learning-design',
      imageUrl: '/images/thumbnails/learning_thumbnail.png'
    },
    {
      title: 'Technical Writing',
      description: 'Simplifying complex concepts through clear and engaging documentation',
      link: '/portfolio/technical-writing',
      imageUrl: '/images/thumbnails/writing_thumbnail.png'
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
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80 mix-blend-multiply" />
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
              <span className="text-3xl md:text-4xl font-normal">Hi, I'm</span>
              <br />
              <span className="font-dancing-script text-6xl md:text-8xl">Marissa Hart</span>
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
              <motion.a
                href="#featured-work"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="/contact"
                className="px-6 py-3 border border-white/30 bg-white/10 text-white rounded-lg hover:bg-white/20 hover:border-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="featured-work" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  imageUrl={item.imageUrl}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 