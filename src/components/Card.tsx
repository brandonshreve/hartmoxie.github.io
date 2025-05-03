import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface CardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, link, imageUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  const cardClasses = clsx(
    'group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
  );

  const imageContainerClasses = clsx(
    'relative h-48 overflow-hidden'
  );

  const loadingClasses = clsx(
    'absolute inset-0 bg-gradient-to-br from-primary/20 to-secondaary/20 animate-pulse'
  );

  const imageClasses = clsx(
    'w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
  );

  const contentClasses = clsx(
    'p-6'
  );

  const titleClasses = clsx(
    'text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors'
  );

  const descriptionClasses = clsx(
    'text-gray-600 mb-4'
  );

  const linkClasses = clsx(
    'inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform'
  );

  return (
    <Link to={link}>
      <motion.div
        className={cardClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className={imageContainerClasses}>
          {isLoading && (
            <div className={loadingClasses} />
          )}
          <img
            src={imageUrl}
            alt={title}
            className={imageClasses}
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <div className={contentClasses}>
          <h3 className={titleClasses}>
            {title}
          </h3>
          <p className={descriptionClasses}>{description}</p>
          <span className={linkClasses}>
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