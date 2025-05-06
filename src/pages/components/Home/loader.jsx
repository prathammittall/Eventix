import React from 'react';
import { motion } from 'framer-motion';

// Loader component for the Home pages

function Loader() {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Logo container */}
        <motion.div
          className="relative w-24 h-24"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Glowing background */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#A0FFD6] via-[#BAA0FF] to-[#FFC5A0] opacity-20 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Logo */}
          <motion.img
            src="/logo2.png"
            alt="Eventix Logo"
            className="w-full h-full object-contain relative z-10"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Loading text */}
        
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-white text-lg font-light">Loading</p>
          <div className="flex gap-2 mt-3 justify-center">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-white/50"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Loader;