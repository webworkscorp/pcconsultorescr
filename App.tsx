
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DifferentialValue from './components/DifferentialValue';
import CorporatePresentation from './components/CorporatePresentation';
import Industries from './components/Industries';
import Services from './components/Services';
import TechSolutions from './components/TechSolutions';
import WorkProcess from './components/WorkProcess';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MainCTA from './components/MainCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-corp-accent selection:text-white bg-white">
      <Navbar />
      <main>
        <Hero />
        <CorporatePresentation />
        <DifferentialValue />
        <Industries />
        <Services />
        <TechSolutions />
        <WorkProcess />
        <Testimonials />
        <MainCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
