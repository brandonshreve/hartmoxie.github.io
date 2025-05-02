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
            <object
              data="/resume.pdf"
              type="application/pdf"
              className="w-full h-[calc(100vh-12rem)]"
            >
              <p className="p-4 text-gray-600">
                It appears you don't have a PDF plugin for this browser.
                You can <a href="/resume.pdf" className="text-primary hover:underline">click here to download the PDF file</a>.
              </p>
            </object>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume; 