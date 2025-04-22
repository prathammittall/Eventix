import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div id="about-section" className='w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8'>
      {/* Background gradient elements */}
      <div className="absolute right-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FFC5A0]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-[#FFE9A0]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className='max-w-7xl mx-auto'>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-4'>About Eventix</h2>
          <p className='text-gray-300 max-w-3xl mx-auto text-xl'>
            The ultimate platform connecting university students with campus events, communities, and opportunities
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-r from-[#A0FFD6]/30 to-[#BAA0FF]/30 p-1">
                <div className="w-full h-full flex items-center justify-center rounded-xl overflow-hidden relative bg-[#0C0E12]">
                  {/* Use the logo image instead */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent z-0"></div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 p-8"
                  >
                    <img 
                      src="/logo2.png" 
                      className="w-150 h-150 object-contain"
                      alt="Eventix Logo" 
                    />
                  </motion.div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#A0FFD6]/20 rounded-full blur-xl"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#BAA0FF]/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Our Vision & Mission</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Eventix was founded with a simple yet powerful vision: to create a vibrant hub where university 
              students can discover events, join clubs, and connect with like-minded peers. 
              We believe that student life extends beyond academics – it's about 
              building lasting communities, exploring diverse interests, and creating unforgettable experiences.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-[#A0FFD6]/20 to-[#A0FFD6]/10 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A0FFD6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium">Discover Opportunities</h4>
                  <p className="text-gray-400">Find workshops, hackathons, concerts, networking events and more happening on your campus</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-[#BAA0FF]/20 to-[#BAA0FF]/10 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#BAA0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium">Join Communities</h4>
                  <p className="text-gray-400">Connect with specialized student clubs and organizations aligned perfectly with your interests</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-[#FFC5A0]/20 to-[#FFC5A0]/10 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFC5A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium">Stay Connected</h4>
                  <p className="text-gray-400">Never miss important announcements, upcoming events, and exclusive opportunities</p>
                </div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-black rounded-full text-lg font-medium transition-all duration-300"
              style={{ boxShadow: '0 4px 16px -4px rgba(255, 255, 255, 0.3)' }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;