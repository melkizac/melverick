import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, PROFILE_IMAGE_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            Jone
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-xs font-medium text-gray-600 hover:text-primary uppercase tracking-widest transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
           <a href="#contact" className="px-6 py-3 rounded-md text-primary bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-soft hover:-translate-y-[2px] hover:text-white hover:bg-primary hover:from-primary hover:to-primary transition-all duration-300 text-xs font-bold uppercase tracking-widest">
             Hire Me
           </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-600 p-2 rounded-md hover:bg-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-100 shadow-xl border-t border-gray-200">
          <div className="flex flex-col p-6 gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-primary uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
             <a href="#contact" className="mt-4 text-center px-6 py-3 rounded-md text-primary bg-white shadow-soft font-bold uppercase tracking-widest" onClick={() => setIsOpen(false)}>
             Hire Me
           </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;