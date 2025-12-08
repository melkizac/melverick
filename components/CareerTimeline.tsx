import React from 'react';
import { Briefcase, Rocket, Calendar } from 'lucide-react';
import { CAREER_PHASE_A, CAREER_PHASE_B } from '../constants';
import { CareerItem } from '../types';

const CareerTimeline: React.FC = () => {
  return (
    <section id="career-timeline" className="py-24 px-6 border-b border-gray-300 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">My Professional Evolution</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-4 font-heading leading-tight">
            From SAP Expert to <br className="hidden md:block" /> Agentic AI Business OS
          </h2>
        </div>

        <div className="space-y-16">
          {/* Phase A */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-soft shrink-0">
                  <Briefcase size={24} />
               </div>
               <h3 className="text-2xl font-bold text-gray-800 font-heading">
                 Phase I: SAP Expert & Business Process Master
                 <span className="block text-sm font-normal text-gray-500 mt-1">(1997–2010)</span>
               </h3>
            </div>

            <div className="relative pl-6 md:pl-8 border-l-2 border-primary/30 space-y-8 ml-6">
               {CAREER_PHASE_A.map((item) => (
                  <TimelineCard key={item.id} item={item} />
               ))}
            </div>
          </div>

          {/* Phase B */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-soft shrink-0">
                  <Rocket size={24} />
               </div>
               <h3 className="text-2xl font-bold text-gray-800 font-heading">
                 Phase II: Entrepreneur & AI Practitioner
                 <span className="block text-sm font-normal text-gray-500 mt-1">(2010–Current)</span>
               </h3>
            </div>

            <div className="relative pl-6 md:pl-8 border-l-2 border-primary/30 space-y-8 ml-6">
               {CAREER_PHASE_B.map((item) => (
                  <TimelineCard key={item.id} item={item} />
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineCard: React.FC<{ item: CareerItem }> = ({ item }) => {
  return (
    <div className="relative group">
      {/* Dot on the timeline */}
      <span className="absolute -left-[31px] md:-left-[39px] top-6 w-4 h-4 bg-white border-4 border-primary rounded-full group-hover:scale-125 transition-transform duration-300"></span>
      
      <div className="p-6 rounded-xl bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-soft hover:bg-white hover:-translate-y-1 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
           <h4 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors font-heading">
             {item.url ? (
               <a 
                 href={item.url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:underline decoration-primary underline-offset-4 decoration-2"
               >
                 {item.company}
               </a>
             ) : (
               item.company
             )}
           </h4>
           <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit shadow-inner-soft">
             <Calendar size={14} />
             <span className="font-semibold">{item.year}</span>
           </div>
        </div>
        {item.description && (
          <p className="text-gray-500 text-sm md:text-base border-t border-gray-200 pt-3 mt-2">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default CareerTimeline;