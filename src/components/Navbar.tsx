import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import clsx from 'clsx';

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
      setIsScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHomePage]);

  const navClasses = clsx(
    'fixed w-full z-50 transition-colors duration-300',
    {
      'bg-white shadow-lg': isScrolled || !isHomePage,
      'bg-transparent': !isScrolled && isHomePage
    }
  );

  const menuButtonClasses = clsx(
    'inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary',
    {
      'text-gray-400 hover:text-gray-500 hover:bg-gray-100': isScrolled || !isHomePage,
      'text-white/90 hover:text-white hover:bg-white/10': !isScrolled && isHomePage
    }
  );

  const navLinkClasses = (isActive = false) => clsx(
    'border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
    {
      'text-gray-500 hover:text-primary': isScrolled || !isHomePage,
      'text-white/90 hover:text-white': !isScrolled && isHomePage
    }
  );

  const mobileMenuClasses = clsx(
    'sm:hidden',
    {
      'block': isOpen,
      'hidden': !isOpen,
      'bg-white': isScrolled,
      'bg-gray-900/90': !isScrolled
    }
  );

  const mobileLinkClasses = clsx(
    'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium',
    {
      'text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-primary': isScrolled,
      'text-white/90 hover:text-white hover:bg-white/10 hover:border-primary': !isScrolled
    }
  );

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-3xl md:text-4xl font-bold">
                <motion.span
                  className={clsx(
                    'bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text',
                    {
                      'text-transparent': isScrolled || !isHomePage,
                      'text-white': !isScrolled && isHomePage
                    }
                  )}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  whileHover={{
                    scale: 1.25,
                    backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 2,
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
                  className={navLinkClasses()}
                >
                  {section.title}
                </Link>
              ))}
              <Link
                to="/resume"
                className={navLinkClasses()}
              >
                Resume
              </Link>
              <Link
                to="/contact"
                className={navLinkClasses()}
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={menuButtonClasses}
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
      <div className={mobileMenuClasses}>
        <div className="pt-2 pb-3 space-y-1">
          {portfolioData.map((section) => (
            <Link
              key={section.id}
              to={`/portfolio/${section.id}`}
              className={mobileLinkClasses}
            >
              {section.title}
            </Link>
          ))}
          <Link
            to="/resume"
            className={mobileLinkClasses}
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className={mobileLinkClasses}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 