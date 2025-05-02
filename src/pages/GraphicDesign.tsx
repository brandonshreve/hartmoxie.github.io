import React from 'react';
import Portfolio from '../components/Portfolio';

const GraphicDesign: React.FC = () => {
  const portfolioData = {
    title: 'Graphic Design',
    subtitle: 'Creating Visually Stunning Designs That Communicate Effectively',
    description: 'A collection of graphic design projects that showcase my ability to create compelling visual content. These projects demonstrate my expertise in branding, digital design, and visual communication, with a focus on creating designs that are both aesthetically pleasing and effectively convey their intended message.',
    role: 'Graphic Designer',
    timeline: '2018 - Present',
    skills: [
      'Brand Identity',
      'Digital Design',
      'Visual Communication',
      'Typography',
      'Layout Design',
      'Adobe Creative Suite'
    ],
    media: [
      {
        type: 'image' as const,
        url: 'https://placehold.co/1200x600/939300/ffffff?text=Brand+Identity',
        alt: 'Brand Identity Project',
        caption: 'Brand Identity - Logo and Visual System Design'
      },
      {
        type: 'image' as const,
        url: 'https://placehold.co/1200x600/009345/ffffff?text=Digital+Design',
        alt: 'Digital Design Project',
        caption: 'Digital Design - Web and Mobile Interface Elements'
      },
      {
        type: 'document' as const,
        url: '/documents/graphic-design-portfolio.pdf',
        caption: 'Graphic Design Portfolio - Complete Project Showcase'
      }
    ]
  };

  return <Portfolio {...portfolioData} />;
};

export default GraphicDesign; 