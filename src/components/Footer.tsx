import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <motion.div
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] bg-clip-text text-transparent [text-shadow:_0_0_1px_white]"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              whileHover={{
                scale: 1.02,
                backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
                scale: {
                  type: "spring",
                  stiffness: 400,
                  damping: 20
                }
              }}
            >
              Marissa Hart
            </motion.div>
            <p className="text-gray-400">
              UX Designer & Learning Experience Designer crafting exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-gray-300 hover:text-primary transition-colors">
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.linkedin.com/in/marissa-hart/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hartmoxie@gmail.com"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Portfolio Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Portfolio</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/learning-design" className="text-gray-300 hover:text-primary transition-colors">
                  Learning Design
                </Link>
              </li>
              <li>
                <Link to="/technical-writing" className="text-gray-300 hover:text-primary transition-colors">
                  Technical Writing
                </Link>
              </li>
              <li>
                <Link to="/graphic-design" className="text-gray-300 hover:text-primary transition-colors">
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Marissa Hart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 