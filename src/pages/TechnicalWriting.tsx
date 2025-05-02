import React from 'react';
import Portfolio from '../components/Portfolio';

const TechnicalWriting: React.FC = () => {
  const portfolioData = {
    title: 'Technical Writing',
    subtitle: 'Simplifying Complex Concepts Through Clear Documentation',
    description: 'A showcase of technical writing projects that demonstrate my ability to transform complex technical information into clear, accessible, and engaging content. These projects highlight my expertise in creating user-friendly documentation, technical guides, and instructional materials.',
    role: 'Technical Writer',
    timeline: '2019 - Present',
    skills: [
      'Technical Documentation',
      'API Documentation',
      'User Guides',
      'Content Strategy',
      'Information Architecture',
      'Technical Editing'
    ],
    media: [
      {
        type: 'image' as const,
        url: 'https://placehold.co/1200x600/930045/ffffff?text=API+Documentation',
        alt: 'API Documentation Example',
        caption: 'API Documentation - Clear and Structured Technical Content'
      },
      {
        type: 'image' as const,
        url: 'https://placehold.co/1200x600/009345/ffffff?text=User+Guide',
        alt: 'User Guide Example',
        caption: 'User Guide - Step-by-Step Instructions with Visual Aids'
      },
      {
        type: 'document' as const,
        url: '/documents/technical-writing-sample.pdf',
        caption: 'Technical Writing Sample - Complex System Documentation'
      }
    ]
  };

  return <Portfolio {...portfolioData} />;
};

export default TechnicalWriting; 