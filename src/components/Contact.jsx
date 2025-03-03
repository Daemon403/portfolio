import React, { useState } from 'react';
import { Mail, Send, MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id ="contact" className="bg-[#060312] text-gray-400 py-20 flex flex-col items-center">
      <div className="max-w-[900px] w-full">
        <SectionTitle icon={<Mail />} title="Contact Me" />
      </div>
      
      <div className="max-w-[900px] w-full grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using the form or contact information.
          </p>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-3 bg-yellow-500/10 rounded-lg mr-4 text-yellow-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                <p className="text-gray-400">Accra, Ghana</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-3 bg-yellow-500/10 rounded-lg mr-4 text-yellow-400">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                <a href="mailto:nicholasmutsaka@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                nicholasmutsaka@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 hover:shadow-2xl transition-shadow">
          <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
          {submitStatus === 'success' && (
            <div className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg mb-6">
              Your message has been sent successfully! I'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="input-field" required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="input-field" required />
            </div>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="input-field w-full mb-4" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="input-field w-full mb-6" rows={5} required />
            <button type="submit" disabled={isSubmitting} className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${isSubmitting ? 'bg-gray-600 text-gray-300 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600 text-gray-900 hover:shadow-lg'}`}>
              {isSubmitting ? 'Sending...' : <>Send Message <Send size={18} className="ml-2" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
