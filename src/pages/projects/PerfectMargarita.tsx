import React from 'react';
import Project from '../../components/Project';
import { Project as ProjectType } from '../../data/portfolio';

const PerfectMargarita: React.FC = () => {
  const projectData: ProjectType = {
    id: 'perfect-margarita',
    title: 'The Perfect Margarita',
    type: 'Self-directed eLearning',
    description: 'An interactive eLearning module designed to teach bartenders the art of crafting the perfect margarita. This project combines instructional design principles with engaging multimedia to create an effective learning experience.',
    objectives: [
      'Identify the key components of a perfect margarita',
      'Demonstrate proper mixing techniques',
      'Understand the importance of ingredient quality and proportions',
      'Apply knowledge to create consistent, high-quality margaritas'
    ],
    outcomes: [
      'Increased consistency in margarita preparation across locations',
      'Improved customer satisfaction ratings',
      'Reduced ingredient waste through proper measurement',
      'Enhanced bartender confidence in cocktail preparation'
    ],
    media: [
      {
        type: 'image',
        url: 'https://placehold.co/1200x600/009345/ffffff?text=Perfect+Margarita+Module',
        alt: 'Perfect Margarita eLearning Module',
        caption: 'Interactive Learning Module Interface'
      },
      {
        type: 'image',
        url: 'https://placehold.co/1200x600/009345/ffffff?text=Ingredient+Selection',
        alt: 'Ingredient Selection Screen',
        caption: 'Interactive Ingredient Selection Exercise'
      },
      {
        type: 'video',
        url: '/videos/margarita-mixing.mp4',
        caption: 'Mixing Technique Demonstration'
      }
    ],
    skills: [
      'Instructional Design',
      'eLearning Development',
      'Interactive Design',
      'Video Production',
      'Assessment Design'
    ],
    role: 'Learning Experience Designer',
    timeline: 'Q2 2022',
    client: 'Hospitality Training Solutions'
  };

  return <Project project={projectData} backLink="/portfolio/learning-design" />;
};

export default PerfectMargarita; 