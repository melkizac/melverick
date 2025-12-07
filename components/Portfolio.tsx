import React from 'react';
import { Heart } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#ecf0f3] border-b border-gray-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Visit my portfolio and keep your feedback</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 font-heading">My Portfolio</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="group p-6 rounded-xl bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-soft hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-xl mb-6 h-60">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {item.category}
                </span>
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <Heart size={14} />
                  <span>{item.likes}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors cursor-pointer leading-snug font-heading">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;