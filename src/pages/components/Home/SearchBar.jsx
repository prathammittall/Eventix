import React, { useState } from 'react';
import { motion } from 'framer-motion';


function SearchBar() {
    const [selected, setSelected] = useState("Offline");

    return (
        <div className="w-full bg-black/70 backdrop-blur-lg py-3 px-4 border-b border-white/10">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Eventix logo on extreme left */}
                <div className="text-white font-bold text-2xl tracking-wider">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Event<span className="text-pastel-mint">ix</span>
                    </span>
                </div>
                
                {/* Large search bar in the center */}
                <div className="flex-1 mx-6 md:mx-10">
                    <div className="relative w-full group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <motion.input 
                            type="text" 
                            placeholder="Find events, clubs, activities, workshops..." 
                            className="w-full h-14 pl-12 pr-4 py-2 rounded-xl text-white bg-white/5 backdrop-blur-md border border-white/10 focus:border-white/20 focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 placeholder-gray-400 shadow-inner shadow-black/20 glass"
                            whileFocus={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pastel-mint/10 via-pastel-lavender/10 to-pastel-peach/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ zIndex: -1 }}></div>
                    </div>
                </div>
                
                {/* Enhanced toggle buttons with glass effect */}
                <div className="relative flex items-center rounded-full backdrop-blur-md border border-white/10 p-1 h-12 min-w-36">
                    {/* Animated background indicator */}
                    <div 
                        className={`absolute h-10 w-[calc(50%-4px)] top-[4px] rounded-full bg-white/10 backdrop-blur transition-all duration-300 shadow-inner shadow-white/5 border border-white/20 glass z-0 ${
                            selected === "Offline" ? 'left-1' : 'left-[calc(50%+2px)]'
                        }`}
                    />
                    
                    {/* Gradient overlay for hover effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-pastel-mint/10 to-pastel-lavender/10 opacity-0 hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Toggle buttons */}
                    <button 
                        onClick={() => setSelected("Offline")} 
                        className={`h-10 z-10 flex-1 px-4 py-1 text-sm md:text-base rounded-full transition-all duration-300 cursor-pointer ${
                            selected === "Offline" ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                        }`}
                    >
                        Offline
                    </button>
                    <button 
                        onClick={() => setSelected("Online")} 
                        className={`h-10 z-10 flex-1 px-4 py-1 text-sm md:text-base rounded-full transition-all duration-300 cursor-pointer ${
                            selected === "Online" ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                        }`}
                    >
                        Online
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;