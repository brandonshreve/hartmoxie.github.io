import React from 'react';
import { useParams } from 'react-router-dom';
import PortfolioSection from '../components/PortfolioSection';
import { portfolioData } from '../data/portfolio';

const GraphicDesign: React.FC = () => {
  const section = portfolioData.find(s => s.id === 'graphic-design');
  
  if (!section) {
    return <div>Section not found</div>;
  }

  return <PortfolioSection section={section} />;
};

export default GraphicDesign; 