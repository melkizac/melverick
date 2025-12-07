import React, { useState, useEffect } from 'react';
import { PROFILE_IMAGE_URL, BOOKING_URL } from '../constants';
import { CalendarClock } from 'lucide-react';

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
        <a 
          href={BOOKING_URL} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-primary to-[#ff014f] text-white p-3 md:px-6 md:py-3 rounded-lg shadow-soft text-sm font-bold uppercase tracking-wider hover:-translate-y-1 transition-all duration-300"
        >
          <CalendarClock size={18} />
          <span className="hidden md:block">Book My Time</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;