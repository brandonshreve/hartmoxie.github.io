import React from 'react';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Resume</h1>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="public/resume.pdf"
              className="w-full h-[calc(100vh-12rem)]"
              title="Resume PDF Viewer"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume; 