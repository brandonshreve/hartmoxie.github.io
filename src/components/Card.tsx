import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, link, imageUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link to={link}>
      <motion.div
        className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative h-48 overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
          )}
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
            View Projects
            <svg
              className="w-4 h-4 ml-1"
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
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card; 