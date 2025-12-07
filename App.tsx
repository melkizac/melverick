import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
// import Portfolio from './components/Portfolio';
// import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-700 bg-[#ecf0f3]">
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
  );
};

export default App;