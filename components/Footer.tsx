import React from 'react';
import { PROFILE_IMAGE_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#ecf0f3] text-center">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center gap-4 mb-6">
             <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
             <img src={PROFILE_IMAGE_URL} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-2xl font-bold font-heading text-gray-800 uppercase tracking-wider">
            Melverick
          </span>
        </div>
        <p className="text-gray-500">
          © {new Date().getFullYear()}. All rights reserved by <a href="#" className="text-primary hover:underline">Melverick Ng</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;