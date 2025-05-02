import React from 'react';
import Portfolio from '../components/Portfolio';

const LearningDesign: React.FC = () => {
  const portfolioData = {
    title: 'Learning Experience Design',
    subtitle: 'Creating Engaging Digital Learning Experiences',
    description: 'A collection of learning experience design projects that demonstrate my approach to creating effective and engaging digital learning solutions. Each project showcases different aspects of instructional design, user experience, and educational technology.',
    role: 'Learning Experience Designer',
    timeline: '2020 - Present',
    skills: [
      'Instructional Design',
      'UX Design',
      'E-Learning Development',
      'Learning Analytics',
      'User Research',
      'Content Strategy'
    ],
    media: [
      {
        type: 'image' as const,
        url: 'https://placehold.co/1200x600/009345/ffffff?text=Learning+Design+Project+1',
        alt: 'Learning Design Project 1',
        caption: 'Interactive Learning Module - User Interface Design'
      },
      {
        type: 'image' as const,
        url: 'https://placehold.co/1200x600/930045/ffffff?text=Learning+Design+Project+2',
        alt: 'Learning Design Project 2',
        caption: 'Learning Analytics Dashboard - Data Visualization'
      },
      {
        type: 'document' as const,
        url: '/documents/learning-design-case-study.pdf',
        caption: 'Case Study: Digital Learning Transformation'
      }
    ]
  };

  return <Portfolio {...portfolioData} />;
};

export default LearningDesign; 