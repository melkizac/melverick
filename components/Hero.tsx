import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Code, Database, Figma } from 'lucide-react';
import { PROFILE_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center bg-[#ecf0f3] border-b border-gray-300">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-sm font-medium tracking-widest uppercase text-gray-500">Welcome to my world</span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 font-heading leading-tight">
                Hi, I'm <span className="text-primary">Jone Lee</span> <br />
                <span className="text-3xl md:text-5xl">a Professional Coder.</span>
              </h1>
              <p className="text-gray-500 leading-relaxed max-w-xl text-lg">
                I use animation as a third dimension by which to simplify experiences and guiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-20 pt-8">
              {/* Socials */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Find with me</span>
                <div className="flex gap-4">
                  {[Facebook, Twitter, Linkedin].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-14 h-14 rounded-md flex items-center justify-center text-gray-600 bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-soft hover:-translate-y-1 hover:bg-primary hover:text-white hover:from-primary hover:to-primary transition-all duration-300">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Best Skill On</span>
                <div className="flex gap-4">
                  {[Code, Database, Figma].map((Icon, idx) => (
                    <div key={idx} className="w-14 h-14 rounded-md flex items-center justify-center text-gray-600 bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-soft hover:-translate-y-1 hover:bg-primary hover:text-white hover:from-primary hover:to-primary transition-all duration-300 cursor-default">
                      <Icon size={20} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] rounded-xl shadow-soft p-6">
               <div className="w-full h-full rounded-lg overflow-hidden bg-gray-200">
                 {/* 
                     PLEASE NOTE: 
                     This image is styled to match the aspect ratio and position of the reference.
                     The actual image source is defined in constants.ts.
                 */}
                 <img 
                    src={PROFILE_IMAGE_URL} 
                    alt="Jone Lee" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-out"
                  />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;