import React from 'react';
import { PROJECT_LOGOS } from '../constants';

const ProjectLogos: React.FC = () => {
  // Duplicate logos to create a seamless infinite loop
  const duplicatedLogos = [...PROJECT_LOGOS, ...PROJECT_LOGOS];

  return (
    <section className="py-16 px-6 border-b border-gray-300 overflow-hidden bg-[#ecf0f3]">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Client Success</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 font-heading">My Projects</h2>
        </div>

        <div className="relative w-full overflow-hidden">
            {/* Gradient masks for smooth fade in/out effect at edges */}
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#ecf0f3] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#ecf0f3] to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max animate-scroll">
                {duplicatedLogos.map((logo, index) => (
                    <div 
                        key={index} 
                        className="mx-8 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    >
                        <img 
                            src={logo.url} 
                            alt={logo.name} 
                            className="max-h-16 max-w-full object-contain mix-blend-multiply"
                            onError={(e) => {
                                // Fallback if logo fails to load
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectLogos;