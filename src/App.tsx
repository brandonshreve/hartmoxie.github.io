import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import PortfolioSection from './components/PortfolioSection';
import Project from './components/Project';
import { portfolioData } from './data/portfolio';

const PortfolioSectionWrapper: React.FC = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const section = portfolioData.find(s => s.id === sectionId);
  
  if (!section) {
    return <div>Section not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <PortfolioSection section={section} />
    </motion.div>
  );
};

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
    return <div>Project not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Project project={project} backLink={`/portfolio/${sectionId}`} />
    </motion.div>
  );
};

const AnimatedRoutes: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/portfolio/:sectionId"
          element={<PortfolioSectionWrapper />}
        />
        <Route
          path="/projects/:projectId"
          element={<ProjectWrapper />}
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/resume"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Resume />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
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
