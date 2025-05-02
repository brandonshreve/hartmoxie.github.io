import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project as ProjectType } from '../data/portfolio';

interface ProjectProps {
  project: ProjectType;
  backLink: string;
}

const Project: React.FC<ProjectProps> = ({ project, backLink }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            to={backLink}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-xl text-primary mb-6">{project.type}</p>
          <p className="text-lg text-gray-600 max-w-3xl">{project.description}</p>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-semibold text-gray-500 mb-1">Role</h3>
            <p className="text-lg text-gray-900">{project.role}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-semibold text-gray-500 mb-1">Timeline</h3>
            <p className="text-lg text-gray-900">{project.timeline}</p>
          </div>
          {project.client && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-semibold text-gray-500 mb-1">Client</h3>
              <p className="text-lg text-gray-900">{project.client}</p>
            </div>
          )}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-semibold text-gray-500 mb-1">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Learning Objectives */}
        {project.objectives && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Objectives</h2>
            <ul className="space-y-2">
              {project.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">{objective}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Media Gallery */}
        <div className="space-y-12">
          {project.media.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
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

        {/* Outcomes */}
        {project.outcomes && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Outcomes</h2>
            <ul className="space-y-2">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-gray-600">{outcome}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Project; 