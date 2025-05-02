import React from 'react';
import { motion } from 'framer-motion';

interface MediaItem {
  type: 'image' | 'video' | 'document';
  url: string;
  alt?: string;
  caption?: string;
}

interface PortfolioProps {
  title: string;
  subtitle?: string;
  description: string;
  media: MediaItem[];
  skills?: string[];
  role?: string;
  timeline?: string;
  client?: string;
}

const Portfolio: React.FC<PortfolioProps> = ({
  title,
  subtitle,
  description,
  media,
  skills,
  role,
  timeline,
  client
}) => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
          {subtitle && (
            <h2 className="text-2xl text-primary mb-6">{subtitle}</h2>
          )}
          <p className="text-lg text-gray-600 max-w-3xl">{description}</p>
        </motion.div>

        {/* Project Details */}
        {(role || timeline || client || skills) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {role && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-sm font-semibold text-gray-500 mb-1">Role</h3>
                <p className="text-lg text-gray-900">{role}</p>
              </div>
            )}
            {timeline && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-sm font-semibold text-gray-500 mb-1">Timeline</h3>
                <p className="text-lg text-gray-900">{timeline}</p>
              </div>
            )}
            {client && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-sm font-semibold text-gray-500 mb-1">Client</h3>
                <p className="text-lg text-gray-900">{client}</p>
              </div>
            )}
            {skills && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-sm font-semibold text-gray-500 mb-1">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Media Gallery */}
        <div className="space-y-12">
          {media.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              {item.type === 'image' && (
                <div className="relative">
                  <img
                    src={item.url}
                    alt={item.alt || ''}
                    className="w-full h-auto"
                  />
                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                      <p className="text-sm">{item.caption}</p>
                    </div>
                  )}
                </div>
              )}
              {item.type === 'video' && (
                <div className="relative aspect-video">
                  <video
                    src={item.url}
                    controls
                    className="w-full h-full object-cover"
                  />
                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                      <p className="text-sm">{item.caption}</p>
                    </div>
                  )}
                </div>
              )}
              {item.type === 'document' && (
                <div className="p-6">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary-dark"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span>{item.caption || 'View Document'}</span>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 