import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHomePage]);

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-3xl md:text-4xl font-bold">
                <motion.span
                  className={`bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent ${isScrolled ? '' : 'text-white'}`}
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
                </motion.span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {portfolioData.map((section) => (
                <Link
                  key={section.id}
                  to={`/portfolio/${section.id}`}
                  className={`border-transparent ${isScrolled ? 'text-gray-500 hover:text-primary' : 'text-white/90 hover:text-white'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {section.title}
                </Link>
              ))}
              <Link
                to="/resume"
                className={`border-transparent ${isScrolled ? 'text-gray-500 hover:text-primary' : 'text-white/90 hover:text-white'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Resume
              </Link>
              <Link
                to="/contact"
                className={`border-transparent ${isScrolled ? 'text-gray-500 hover:text-primary' : 'text-white/90 hover:text-white'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-gray-400 hover:text-gray-500 hover:bg-gray-100' : 'text-white/90 hover:text-white hover:bg-white/10'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary`}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden ${isScrolled ? 'bg-white' : 'bg-gray-900/90'}`}>
        <div className="pt-2 pb-3 space-y-1">
          {portfolioData.map((section) => (
            <Link
              key={section.id}
              to={`/portfolio/${section.id}`}
              className={`block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium ${isScrolled ? 'text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-primary' : 'text-white/90 hover:text-white hover:bg-white/10 hover:border-primary'}`}
            >
              {section.title}
            </Link>
          ))}
          <Link
            to="/resume"
            className={`block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium ${isScrolled ? 'text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-primary' : 'text-white/90 hover:text-white hover:bg-white/10 hover:border-primary'}`}
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className={`block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium ${isScrolled ? 'text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-primary' : 'text-white/90 hover:text-white hover:bg-white/10 hover:border-primary'}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 