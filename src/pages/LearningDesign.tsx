import React from 'react';
import Portfolio from '../components/Portfolio';

const LearningDesign: React.FC = () => {
  const portfolioData = {
    title: 'Learning Experience Design',
    subtitle: 'Creating Engaging Digital Learning Experiences',
    description: 'A collection of learning experience design projects that demonstrate my ability to create effective, engaging, and measurable learning solutions. These projects showcase a mix of self-directed eLearning and instructor-led training experiences.',
    role: 'Learning Experience Designer',
    timeline: '2020 - Present',
    skills: [
      'Instructional Design',
      'eLearning Development',
      'Training Design',
      'Learning Analytics',
      'User Research',
      'Content Strategy'
    ],
    media: [
      {
        type: 'image' as const,
        url: 'https://placehold.co/1200x600/009345/ffffff?text=Perfect+Margarita',
        alt: 'The Perfect Margarita Project',
        caption: 'The Perfect Margarita - Self-directed eLearning',
        link: '/projects/perfect-margarita'
      },
      {
        type: 'image' as const,
        url: 'https://placehold.co/1200x600/009345/ffffff?text=REV+101',
        alt: 'REV 101 Training Project',
        caption: 'REV 101 Training - Self-directed eLearning',
        link: '/projects/rev-101'
      },
      {
        type: 'image' as const,
        url: 'https://placehold.co/1200x600/009345/ffffff?text=Ambassador',
        alt: 'Ambassador Training Project',
        caption: 'Ambassador Training - Instructor-led training',
        link: '/projects/ambassador-training'
      },
      {
        type: 'image' as const,
        url: 'https://placehold.co/1200x600/009345/ffffff?text=STAR+Method',
        alt: 'STAR Method Training Project',
        caption: 'STAR Method Training - Self-directed eLearning',
        link: '/projects/star-method'
      }
    ]
  };

  return <Portfolio {...portfolioData} />;
};

export default LearningDesign; 