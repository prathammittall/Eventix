// Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { IoIosInformationCircle } from 'react-icons/io';
import { BsChatSquareDots } from 'react-icons/bs';

const navItems = [
    { 
        id: 'home',
        label: 'Home', 
        icon: <FaHome />,
        sectionId: 'hero-section'
    },
    { 
        id: 'events', 
        label: 'Events', 
        icon: <FaCalendarAlt />,
        sectionId: 'events-section'
    },
    { 
        id: 'clubs', 
        label: 'Clubs', 
        icon: <FaUsers />,
        sectionId: 'clubs-section'
    },
    { 
        id: 'about', 
        label: 'About', 
        icon: <IoIosInformationCircle />,
        sectionId: 'about-section'
    },
    { 
        id: 'contact', 
        label: 'Contact', 
        icon: <BsChatSquareDots />,
        sectionId: 'contact-section' 
    }
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolledDown, setScrolledDown] = useState(false);
    const navRef = useRef(null);
    const isScrolling = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if scrolled down for navbar background transparency
            const scrollY = window.scrollY;
            setScrolledDown(scrollY > 20);
            
            // Skip section detection if programmatic scrolling is in progress
            if (isScrolling.current) return;
            
            // Simplified section detection logic
            const currentPosition = window.scrollY + 100; // Adding offset to account for navbar height
            
            // Check each section in reverse to catch the topmost visible section first
            // This helps ensure top sections (like Home) get priority when they're visible
            for (let i = navItems.length - 1; i >= 0; i--) {
                const item = navItems[i];
                const section = document.getElementById(item.sectionId);
                
                if (!section) continue;
                
                // Get section boundaries
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                // Special case for the first section (Home/Hero)
                if (i === 0) {
                    if (currentPosition <= sectionBottom) {
                        setActiveSection(item.id);
                        return;
                    }
                } 
                // For all other sections
                else if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
                    setActiveSection(item.id);
                    return;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initialize on mount
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Removed activeSection dependency to avoid circular updates

    const scrollToSection = (item) => {
        const section = document.getElementById(item.sectionId);
        if (section) {
            // Flag to prevent detection during programmatic scroll
            isScrolling.current = true;
            
            // Calculate offset with navbar height
            const navHeight = navRef.current?.offsetHeight || 0;
            const sectionTop = section.offsetTop - navHeight - 16;
            
            // Update active state immediately
            setActiveSection(item.id);
            
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
            
            // Reset scrolling flag after animation completes
            setTimeout(() => {
                isScrolling.current = false;
            }, 1000);
        }
    };

    return (
        <motion.nav 
            ref={navRef}
            className="fixed z-50 top-0 left-0 right-0 flex justify-center py-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div 
                className={`flex items-center gap-1 px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
                    scrolledDown 
                        ? 'bg-black/80 backdrop-blur-md border border-white/10 shadow-lg' 
                        : 'bg-black/30 backdrop-blur-sm border border-white/5'
                }`}
            >
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    
                    return (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item)}
                            className="relative flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full text-sm font-medium z-10"
                        >
                            {/* Active background indicator */}
                            {isActive && (
                                <motion.div 
                                    layoutId="activeNavBackground"
                                    className="absolute inset-0 rounded-full bg-white"
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 500, 
                                        damping: 30
                                    }}
                                />
                            )}
                            
                            {/* Icon */}
                            <span 
                                className={`text-lg z-10 relative ${
                                    isActive ? 'text-black scale-105' : 'text-gray-400'
                                }`}
                            >
                                {item.icon}
                            </span>
                            
                            {/* Label - only on larger screens */}
                            <span
                                className={`relative z-10 hidden sm:inline-block ${
                                    isActive ? 'text-black font-semibold' : 'text-gray-400'
                                }`}
                            >
                                {item.label}
                            </span>
                        </motion.button>
                    );
                })}
            </div>
        </motion.nav>
    );
}
