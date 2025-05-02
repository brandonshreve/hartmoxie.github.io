import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import LearningDesign from './pages/LearningDesign';
import TechnicalWriting from './pages/TechnicalWriting';
import GraphicDesign from './pages/GraphicDesign';
import Project from './components/Project';
import { portfolioData } from './data/portfolio';

const ProjectWrapper: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  // Find the project in any section
  let project = null;
  let sectionId = '';
  
  for (const section of portfolioData) {
    const foundProject = section.projects.find(p => p.id === projectId);
    if (foundProject) {
      project = foundProject;
      sectionId = section.id;
      break;
    }
  }
  
  if (!project) {
    return <Navigate to="/" replace />;
  }

  return <Project project={project} backLink={`/portfolio/${sectionId}`} />;
};

const AnimatedRoutes = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio/learning-design" element={<LearningDesign />} />
        <Route path="/portfolio/technical-writing" element={<TechnicalWriting />} />
        <Route path="/portfolio/graphic-design" element={<GraphicDesign />} />
        <Route path="/projects/:projectId" element={<ProjectWrapper />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
