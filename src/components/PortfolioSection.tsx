import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PortfolioSection as PortfolioSectionType, Project } from '../data/portfolio';

interface PortfolioSectionProps {
  section: PortfolioSectionType;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ section }) => {
  const mediaItems = section.projects.map(project => ({
    type: 'image' as const,
    url: project.media[0].url,
    alt: project.title,
    caption: project.title,
    link: `/projects/${project.id}`
  }));

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{section.title}</h1>
          <h2 className="text-2xl text-primary mb-6">{section.subtitle}</h2>
          <p className="text-lg text-gray-600 max-w-3xl">{section.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-semibold text-gray-500 mb-1">Role</h3>
            <p className="text-lg text-gray-900">{section.role}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-semibold text-gray-500 mb-1">Timeline</h3>
            <p className="text-lg text-gray-900">{section.timeline}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-semibold text-gray-500 mb-1">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {section.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-semibold text-gray-500 mb-1">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {section.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="space-y-12">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              {item.link ? (
                <Link to={item.link} className="block hover:opacity-90 transition-opacity">
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
                </Link>
              ) : (
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection; 