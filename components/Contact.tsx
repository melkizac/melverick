import React from 'react';
import { Phone, Mail, UserPlus } from 'lucide-react';
import { LINKEDIN_URL, FACEBOOK_URL } from '../constants';

const Contact: React.FC = () => {
    const socialLinks = [
        { label: 'FB', href: FACEBOOK_URL },
        { label: 'IN', href: LINKEDIN_URL }
    ];

    const handleSaveContact = () => {
        // Construct vCard data
        const vCardData = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            'FN:Melverick Ng',
            'N:Ng;Melverick;;;',
            'TITLE:Director & Co-founder',
            'TEL;TYPE=CELL:+6597220890',
            'EMAIL;TYPE=WORK:mel@melverick.com',
            `URL:${LINKEDIN_URL}`,
            'END:VCARD'
        ].join('\n');

        const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'MelverickNg.vcf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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

                <button 
                    onClick={handleSaveContact}
                    className="w-full mb-8 py-4 px-6 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 shadow-soft text-gray-700 font-bold uppercase tracking-wider text-sm hover:text-primary hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 border border-gray-200"
                >
                    <UserPlus size={18} />
                    Save Contact
                </button>

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