import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { LINKEDIN_URL, FACEBOOK_URL } from '../constants';

const Contact: React.FC = () => {
    const socialLinks = [
        { label: 'FB', href: FACEBOOK_URL },
        { label: 'IN', href: LINKEDIN_URL }
    ];

  return (
    <section id="contact" className="py-24 px-6 border-b border-gray-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 font-heading">Contact Me</h2>
        </div>

        <div className="flex justify-center">
            {/* Contact Info Card */}
            <div className="w-full max-w-lg p-8 rounded-xl bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-soft h-fit">
                <h3 className="text-3xl font-bold text-gray-800 mb-2 font-heading">Melverick Ng</h3>
                <p className="text-gray-500 mb-4">Director & Co-founder</p>
                <p className="text-gray-500 mb-6 leading-relaxed">
                    I am available for any AI consultation. Connect with me via LinkedIn.
                </p>
                
                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-600">
                        <Phone size={18} className="text-primary" />
                        <span>+65-97220890</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                        <Mail size={18} className="text-primary" />
                        <span>mel@melverick.com</span>
                    </div>
                </div>

                <div>
                    <span className="uppercase text-xs text-gray-500 tracking-widest font-bold mb-4 block">Connect With Me</span>
                     <div className="flex gap-4">
                        {socialLinks.map((social, idx) => (
                             <a 
                                key={idx} 
                                href={social.href}
                                target={social.href.startsWith('http') ? "_blank" : "_self"}
                                rel="noreferrer"
                                className="w-12 h-12 rounded-md flex items-center justify-center text-gray-600 bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-soft hover:-translate-y-1 hover:bg-primary hover:text-white hover:from-primary hover:to-primary transition-all duration-300 cursor-pointer text-xs font-bold block leading-[3rem] text-center"
                             >
                                {social.label}
                            </a>
                        ))}
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;