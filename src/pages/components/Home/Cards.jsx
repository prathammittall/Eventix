import React from 'react'
import { motion } from 'framer-motion';

// This is a card connected to Events Section

function Cards(props) {
    return (
        <motion.div 
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-[#0f0f0f] rounded-xl overflow-hidden shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-pointer flex flex-col h-full border border-[#232323]"
        >
            {/* Event image with overlay gradient */}
            <div className="h-56 overflow-hidden relative">
                <img 
                    src={props.imageUrl || "/logo.png"} 
                    alt={props.hackName} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
                
                {/* Status badge with pastel accent colors */}
                <div className="absolute top-4 right-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm border ${
                        props.status === 'Upcoming' ? 'bg-amber-200/70 text-amber-950 border-amber-300/50' : 
                        props.status === 'Online' ? 'bg-emerald-200/70 text-emerald-950 border-emerald-300/50' :
                        props.status === 'Offline' ? 'bg-violet-200/70 text-violet-950 border-violet-300/50' :
                        'bg-slate-200/70 text-slate-950 border-slate-300/50'
                    }`}>
                        {props.status}
                    </span>
                </div>
                
                {/* Title overlay at bottom of the image */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                    <h1 className="text-xl font-bold text-white">{props.hackName}</h1>
                </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col gap-3">
                {/* Date info with icon */}
                <div className="flex items-center text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm font-medium">{props.Date}</p>
                </div>

                {/* Location info with icon */}
                <div className="flex items-center text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm font-medium">{props.location || "University Campus"}</p>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">{props.description}</p>

                {/* Register button - styled like hero section */}
                <motion.button 
                    whileHover={{ 
                      scale: 1.03, 
                      backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                      boxShadow: '0 10px 25px -5px rgba(255, 255, 255, 0.3)' 
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-black text-white py-2.5 px-4 rounded-full transition-all duration-300 flex items-center justify-center mt-auto font-medium backdrop-blur-sm border border-white/20"
                    style={{ boxShadow: '0 4px 16px -4px rgba(255, 255, 255, 0.2)' }}
                >
                    <span>Register Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </motion.button>
            </div>
        </motion.div>
    )
}

export default Cards