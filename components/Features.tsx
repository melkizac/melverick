import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { FEATURES, JOURNEY_IMAGE_URL, NEXIUS_LABS_LOGO_URL } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 border-b border-gray-300">
      <div className="container mx-auto">
        <div className="mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 font-heading">What I Do</h2>
        </div>

        {/* Journey Image */}
        <div className="mb-16 w-full rounded-xl overflow-hidden shadow-soft bg-white">
            <img 
                src={JOURNEY_IMAGE_URL} 
                alt="Melverick Journey Roadmap" 
                className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-500"
            />
        </div>

        {/* Section Heading for Labs & Academy */}
        <div className="mb-10 mt-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 font-heading">
                I build it. Then I teach it.
            </h3>
        </div>

        {/* Nexius Labs & Academy Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-16 rounded-2xl overflow-hidden shadow-soft">
          
          {/* Nexius Labs - Left Card */}
          <div className="bg-[#35395c] p-10 md:p-14 text-white flex flex-col justify-center items-start relative overflow-hidden group">
             {/* Background decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

             <div className="mb-6 w-fit">
               <img 
                 src={NEXIUS_LABS_LOGO_URL} 
                 alt="Nexius Labs Logo" 
                 className="h-16 w-auto object-contain"
               />
             </div>
             
             <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 leading-tight">
               Building the Future of Work: Agentic AI Systems
             </h3>
             
             <p className="text-gray-300 mb-8 leading-relaxed">
               Architecting the AI native business OS, focusing on ERP/CRMS solutions and event-driven workflows that redefine enterprise efficiency.
             </p>
             
             <a 
               href="https://nexiuslabs.com" 
               target="_blank" 
               rel="noreferrer"
               className="px-6 py-3 bg-[#ff014f] hover:bg-[#0069d9] text-white rounded-md font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
             >
            Visit Nexius Labs
             </a>
          </div>

          {/* Nexius Academy - Right Card */}
          <div className="bg-[#e4e7eb] p-10 md:p-14 text-gray-800 flex flex-col justify-center items-start relative overflow-hidden">
             
             <div className="mb-6 p-3 bg-white rounded-lg w-fit shadow-sm text-[#007bff]">
               <BookOpen size={40} strokeWidth={1.5} />
             </div>
             
             <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 leading-tight text-gray-900">
               Empowering AI Adoption for Everyone
             </h3>
             
             <p className="text-gray-600 mb-8 leading-relaxed">
               Teaching non-coders, leading hackathons, and building with our core stack: Bolt.new, Supabase, n8n.
             </p>
             
             <a 
               href="https://academy.nexiuslabs.com"
               target="_blank" 
               rel="noreferrer"
               className="px-6 py-3 bg-transparent border-2 border-gray-400 text-gray-700 hover:bg-white hover:border-white hover:text-[#007bff] rounded-md font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
             >
               Visit Nexius Academy
             </a>
          </div>

        </div>

        {/* Section Heading for Core Focus Areas */}
        <div className="mb-10 mt-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 font-heading">
                My Core Focus Areas
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id}
              className="group p-8 rounded-xl bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-soft hover:-translate-y-2 transition-all duration-300 hover:bg-gradient-to-b hover:from-[#1e2024] hover:to-[#23272b]"
            >
              <div className="mb-6 text-primary group-hover:text-white transition-colors duration-300">
                <feature.icon size={42} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300 font-heading">
                {feature.title}
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
              <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <ArrowRight className="text-white" size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;