import React from 'react';
import { Facebook, Linkedin, Instagram, Code, Database, Figma } from 'lucide-react';
import { PROFILE_IMAGE_URL, LINKEDIN_URL, FACEBOOK_URL, TWITTER_URL } from '../constants';

const XIcon = ({ size = 24, className }: { size?: number | string, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: FACEBOOK_URL },
    { icon: XIcon, href: TWITTER_URL },
    { icon: Linkedin, href: LINKEDIN_URL },
  ];

  return (
    <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center border-b border-gray-300">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-sm font-medium tracking-widest uppercase text-gray-500">Welcome</span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 font-heading leading-tight">
                Hi, I'm <span className="text-primary">Melverick Ng</span> <br />
                <span className="text-3xl md:text-5xl">an AI Practitioner.</span>
              </h1>
              <p className="text-gray-500 leading-relaxed max-w-xl text-lg">
                I am building an adaptive, Agentic AI systems for SMEs (ERP, CRM, Finance), allowing software to think and act autonomously based on natural language intent. This leads to an AI-native business OS.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-20 pt-8">
              {/* Socials */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Connect with me</span>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, href }, idx) => (
                    <a 
                      key={idx} 
                      href={href} 
                      target={href.startsWith('http') ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="w-14 h-14 rounded-md flex items-center justify-center text-gray-600 bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-soft hover:-translate-y-1 hover:bg-primary hover:text-white hover:from-primary hover:to-primary transition-all duration-300"
                    >
                      <Icon size={20} />
                    </a>
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
                    alt="Melverick Ng" 
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