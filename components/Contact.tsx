import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { PROFILE_IMAGE_URL } from '../constants';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Message sent! (Simulation)');
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    };

  return (
    <section id="contact" className="py-24 px-6 bg-[#ecf0f3] border-b border-gray-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 font-heading">Contact With Me</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Info Card */}
            <div className="w-full lg:w-[35%] p-8 rounded-xl bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-soft h-fit">
                <div className="rounded-xl overflow-hidden mb-6 h-64">
                    <img src={PROFILE_IMAGE_URL} alt="Contact" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2 font-heading">Jone Lee</h3>
                <p className="text-gray-500 mb-4">Chief Operating Officer</p>
                <p className="text-gray-500 mb-6 leading-relaxed">
                    I am available for freelance work. Connect with me via and call in to my account.
                </p>
                
                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-600">
                        <Phone size={18} className="text-primary" />
                        <span>+0123456789</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                        <Mail size={18} className="text-primary" />
                        <span>admin@example.com</span>
                    </div>
                </div>

                <div>
                    <span className="uppercase text-xs text-gray-500 tracking-widest font-bold mb-4 block">Find With Me</span>
                     <div className="flex gap-4">
                        {['FB', 'TW', 'IN'].map((social, idx) => (
                             <div key={idx} className="w-12 h-12 rounded-md flex items-center justify-center text-gray-600 bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-soft hover:-translate-y-1 hover:bg-primary hover:text-white hover:from-primary hover:to-primary transition-all duration-300 cursor-pointer text-xs font-bold">
                                {social}
                            </div>
                        ))}
                     </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-[65%] p-8 rounded-xl bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-soft">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Your Name</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-4 rounded-lg bg-[#fdfefe] border border-gray-300 shadow-inner-soft focus:outline-none focus:border-primary text-gray-700" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                            <input 
                                type="text" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-4 rounded-lg bg-[#fdfefe] border border-gray-300 shadow-inner-soft focus:outline-none focus:border-primary text-gray-700" 
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-4 rounded-lg bg-[#fdfefe] border border-gray-300 shadow-inner-soft focus:outline-none focus:border-primary text-gray-700" 
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Subject</label>
                        <input 
                            type="text" 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full p-4 rounded-lg bg-[#fdfefe] border border-gray-300 shadow-inner-soft focus:outline-none focus:border-primary text-gray-700" 
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className="w-full p-4 rounded-lg bg-[#fdfefe] border border-gray-300 shadow-inner-soft focus:outline-none focus:border-primary text-gray-700 resize-none" 
                        />
                    </div>

                    <button type="submit" className="w-full py-4 rounded-lg bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-soft text-primary font-bold uppercase tracking-widest hover:-translate-y-1 hover:bg-primary hover:text-white hover:from-primary hover:to-primary transition-all duration-300 flex items-center justify-center gap-2">
                        Send Message <Send size={16} />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;