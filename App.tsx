import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
// import Portfolio from './components/Portfolio';
// import Resume from './components/Resume';
import CareerTimeline from './components/CareerTimeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiquidEther from './components/LiquidEther';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-700 bg-[#ecf0f3] relative">
      {/* Background Liquid Ether Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LiquidEther 
          colors={['#ff014f', '#5227FF', '#ecf0f3']} 
        />
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          {/* <Portfolio /> */}
          {/* <Resume /> */}
          <CareerTimeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;