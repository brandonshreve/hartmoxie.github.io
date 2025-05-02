import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Hartmoxie</div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-primary hover:text-secondary transition-colors">Home</a>
            <a href="#about" className="text-primary hover:text-secondary transition-colors">About</a>
            <a href="#portfolio" className="text-primary hover:text-secondary transition-colors">Portfolio</a>
            <a href="#skills" className="text-primary hover:text-secondary transition-colors">Skills</a>
            <a href="#contact" className="text-primary hover:text-secondary transition-colors">Contact</a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-primary hover:text-secondary transition-colors">Home</a>
            <a href="#about" className="block px-3 py-2 text-primary hover:text-secondary transition-colors">About</a>
            <a href="#portfolio" className="block px-3 py-2 text-primary hover:text-secondary transition-colors">Portfolio</a>
            <a href="#skills" className="block px-3 py-2 text-primary hover:text-secondary transition-colors">Skills</a>
            <a href="#contact" className="block px-3 py-2 text-primary hover:text-secondary transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 