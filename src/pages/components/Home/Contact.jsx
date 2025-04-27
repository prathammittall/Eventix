import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div id="contact-section" className='w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8'>
      {/* Background gradient element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-[#A0DFFF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-[#E1A0FF]/10 rounded-full blur-3xl"></div>
      </div>
    
    
      <div className='max-w-7xl mx-auto'>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>Get In Touch</h2>
          <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
            Have questions or feedback? We'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <h3 className="text-white text-2xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#A0FFD6]/20 to-[#A0FFD6]/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A0FFD6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-medium">Email</h4>
                    <p className="text-gray-400">support@eventix.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#BAA0FF]/20 to-[#BAA0FF]/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#BAA0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-medium">Phone</h4>
                    <p className="text-gray-400">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#FFC5A0]/20 to-[#FFC5A0]/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFC5A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-medium">Location</h4>
                    <p className="text-gray-400">Student Union Building, Room 302<br/>University Campus</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <h3 className="text-white text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#13151A] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#A0FFD6] transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#13151A] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#A0FFD6] transition-all duration-300"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-[#13151A] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#A0FFD6] transition-all duration-300"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full bg-[#13151A] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#A0FFD6] transition-all duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <div>
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 10px 25px -5px rgba(255, 255, 255, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full px-6 py-3 bg-[#0a0a0a] text-white rounded-lg text-lg font-medium transition-all duration-300"
                    style={{ boxShadow: '0 4px 16px -4px rgba(255, 255, 255, 0.3)' }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;