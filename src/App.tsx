import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LearningDesign from './pages/LearningDesign';
import TechnicalWriting from './pages/TechnicalWriting';
import GraphicDesign from './pages/GraphicDesign';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning-design" element={<LearningDesign />} />
            <Route path="/technical-writing" element={<TechnicalWriting />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
