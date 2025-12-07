import React, { useState, useEffect } from 'react';
import { PROFILE_IMAGE_URL } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-100/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
             <img src={PROFILE_IMAGE_URL} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-bold font-heading uppercase tracking-wider text-gray-800">
            Melverick
          </span>
        </div>

        {/* CTA Button */}
        <div className="block">
           <a href="#contact" className="px-6 py-3 rounded-md text-primary bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-soft hover:-translate-y-[2px] hover:text-white hover:bg-primary hover:to-primary hover:from-primary transition-all duration-300 text-xs font-bold uppercase tracking-widest">
             Hire Me
           </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;