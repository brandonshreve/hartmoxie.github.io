import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  link: string;
  imageUrl?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  link, 
  imageUrl,
  className = '' 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`card group ${className}`}
    >
      <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg relative">
        {imageUrl ? (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 transition-opacity duration-300 ${
              isLoading ? 'opacity-100' : 'opacity-0'
            }`} />
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              onLoad={() => setIsLoading(false)}
            />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
        )}
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
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
  );
};

export default Card; 