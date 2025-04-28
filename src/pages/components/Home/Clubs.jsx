import React from 'react';
import { motion } from 'framer-motion';

const clubsData = [
  // Club card Informations.
  {
    name: "CodeTech Club",
    description: "Programming and software development club for tech enthusiasts",
    members: 120,
    logo: "/images/sc1.png",
    color: "#A0FFD6" // Pastel mint
  },
  {
    name: "AI Research Society",
    description: "Exploring cutting-edge AI and machine learning applications",
    members: 85,
    logo: "/images/sc2.png",
    color: "#BAA0FF" // Pastel purple
  },
  {
    name: "Design Hub",
    description: "Creative design and UI/UX exploration for digital products",
    members: 95,
    logo: "/images/sc3.png",
    color: "#FFA0A0" // Pastel pink
  },
  {
    name: "CyberSec Team",
    description: "Cybersecurity research and ethical hacking practice group",
    members: 60,
    logo: "/images/sc4.png",
    color: "#FFE9A0" // Pastel yellow
  },
  {
    name: "Robotics Engineers",
    description: "Building and programming autonomous robots and systems",
    members: 75,
    logo: "/images/sc5.png",
    color: "#A0DFFF" // Pastel blue
  },
  {
    name: "Game Dev Studio",
    description: "Creating innovative games and interactive experiences",
    members: 110,
    logo: "/images/sc6.jpg",
    color: "#E1A0FF" 
    // Pastel lavender
  }
];


function Clubs() {
  return (
    <div id="clubs-section" className='w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>Student Clubs</h2>
          <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
            Join vibrant university communities and pursue your passions with like-minded peers
          </p>
        </motion.div>
  
  
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {clubsData.map((club, index) => (
            <motion.div 
              key={club.name}
              className='bg-[#0a0a0a] border border-[#222222] rounded-xl p-6 hover:shadow-lg transition-all duration-300'
              style={{ boxShadow: `0 8px 32px -8px rgba(0,0,0,0.5)` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5, 
                boxShadow: `0 16px 40px -8px ${club.color}40`,
                borderColor: `${club.color}30`
              }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-16 h-16 rounded-full mr-4 flex items-center justify-center" 
                  style={{ 
                    background: '#111111',
                    border: `2px solid ${club.color}40` 
                  }}
                >
                  <img 
                    src={club.logo} 
                    alt={club.name} 
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{club.name}</h3>
                  <p className="text-gray-400 text-sm">{club.members} members</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{club.description}</p>
              <div className="flex gap-2">
                <motion.button 
                  className="flex-1 py-2 rounded-full bg-black text-white border transition-all duration-300"
                  style={{ 
                    borderColor: club.color,
                    color: club.color
                  }}
                  whileHover={{ 
                    backgroundColor: `${club.color}10`,
                    boxShadow: `0 0 15px ${club.color}30` 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Club
                </motion.button>
                <motion.button 
                  className="flex-1 py-2 rounded-full bg-black border border-white/20 text-white transition-all duration-300"
                  whileHover={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)' 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Visit Website
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.button 
            className="px-8 py-3 bg-white text-black rounded-full text-lg font-medium border border-white/20 transition-all duration-300"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Browse All Clubs
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Clubs;