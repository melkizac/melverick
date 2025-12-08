import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 px-6 border-b border-gray-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 font-heading">What Others Say About Me</h2>
        </div>

        <div className="flex justify-center">
          <div 
            className="w-full max-w-4xl rounded-2xl bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-soft p-8 md:p-12 relative transition-all duration-300"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Quote Content */}
            <div className="flex flex-col items-center text-center space-y-8 min-h-[300px] justify-center">
              <div className="text-primary opacity-20">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-600 italic font-light leading-relaxed max-w-2xl animate-fade-in">
                "{currentTestimonial.quote}"
              </p>

              <div>
                <h4 className="text-xl font-bold text-gray-800 font-heading">
                  {currentTestimonial.name}
                </h4>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">
                  {currentTestimonial.role}, <span className="text-primary">{currentTestimonial.company}</span>
                </p>
              </div>
            </div>

            {/* Avatar Navigation Row */}
            <div className="flex justify-center items-center gap-4 mt-8 pt-8 border-t border-gray-200/50 flex-wrap">
              {TESTIMONIALS.map((t, idx) => {
                const isActive = idx === currentIndex;
                // Show a subset on mobile, or all on desktop if feasible. 
                // For simplicity and to match the 10 item requirement with 10 avatars, we show all but adjust size.
                return (
                  <button
                    key={t.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative rounded-full transition-all duration-300 overflow-hidden border-2 ${
                      isActive 
                        ? 'w-14 h-14 border-primary shadow-soft opacity-100 scale-110' 
                        : 'w-10 h-10 border-transparent opacity-40 hover:opacity-70 hover:scale-105'
                    }`}
                  >
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;