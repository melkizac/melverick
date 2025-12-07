import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 border-b border-gray-300">
      <div className="container mx-auto">
        <div className="mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 font-heading">What I Do</h2>
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