import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
// import Portfolio from './components/Portfolio';
// import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aurora from './components/Aurora';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-700 bg-[#ecf0f3] relative">
      {/* Background Aurora Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Aurora 
          colorStops={['#ff014f', '#ecf0f3', '#5227FF']}
          speed={0.5} 
          amplitude={1.2}
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
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;