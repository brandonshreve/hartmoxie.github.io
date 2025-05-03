import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface HandDrawnTextProps {
  text: string;
  className?: string;
}

const HandDrawnText: React.FC<HandDrawnTextProps> = ({ text, className = '' }) => {
  const containerClasses = clsx(
    'relative w-full max-w-[90rem] mx-auto',
    className
  );

  const textClasses = clsx(
    'font-hello text-5xl md:text-7xl inline-block px-24 md:px-32'
  );

  return (
    <motion.div
      className={containerClasses}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        className={textClasses}
        style={{
          background: 'linear-gradient(90deg, #4CAF50, #FFD700, #FF5733, #C70039, #9C27B0, #2196F3)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundSize: '200% auto',
          letterSpacing: '0.2em',
        }}
        initial={{ 
          opacity: 0,
          scale: 0.8,
          filter: 'blur(10px)',
        }}
        animate={{ 
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
        }}
        transition={{
          duration: 1.5,
          ease: [0.2, 0.65, 0.3, 0.9],
          scale: {
            duration: 1.2,
            ease: [0.2, 0.65, 0.3, 0.9],
          },
          filter: {
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9],
          }
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

export default HandDrawnText; 