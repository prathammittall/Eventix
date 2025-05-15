import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { IoIosInformationCircle } from 'react-icons/io';
import { BsChatSquareDots } from 'react-icons/bs';
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';


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

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [user, setUser] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log('Auth State Changed - User:', user);
            if (user) {
                console.log('User Profile Data:', {
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    providerData: user.providerData
                });
            }
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setIsDropdownOpen(false);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const offset = element.offsetTop - 100; // Subtract header height + some padding
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="text-white text-2xl font-bold">
                            Eventix
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a 
                            href="#events-section" 
                            onClick={(e) => handleSmoothScroll(e, 'events-section')}
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Events
                        </a>
                        <a 
                            href="#clubs-section"
                            onClick={(e) => handleSmoothScroll(e, 'clubs-section')}
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Clubs
                        </a>
                        <a 
                            href="#about-section"
                            onClick={(e) => handleSmoothScroll(e, 'about-section')}
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            About
                        </a>
                        <a 
                            href="#contact-section"
                            onClick={(e) => handleSmoothScroll(e, 'contact-section')}
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <div className="relative" ref={dropdownRef}>
                                <motion.button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center space-x-2 px-4 py-2 text-white hover:text-gray-300 transition-colors"
                                >
                                    {user.photoURL ? (
                                        <img 
                                            src={user.photoURL} 
                                            alt={user.displayName || 'User'} 
                                            className="w-8 h-8 rounded-full object-cover border-2 border-white/20"
                                            onError={(e) => {
                                                console.error('Error loading profile image:', e);
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                            <span className="text-sm font-medium">
                                                {user.displayName ? user.displayName[0].toUpperCase() : user.email[0].toUpperCase()}
                                            </span>
                                        </div>
                                    )}
                                    <span className="hidden md:inline">{user.displayName || user.email}</span>
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </motion.button>

                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute right-0 mt-2 w-48 bg-[#1a1a1a] rounded-lg shadow-lg border border-gray-700 overflow-hidden z-50"
                                    >
                                        <div className="py-2">
                                            <div className="px-4 py-2 text-sm text-gray-400 border-b border-gray-700">
                                                {user.displayName || user.email}
                                            </div>
                                            <Link to="/dashboard">
                                                <button
                                                    className="w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors"
                                                >
                                                    Dashboard
                                                </button>
                                            </Link>
                                            <button
                                                onClick={handleSignOut}
                                                className="w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors"
                                            >
                                                Sign Out
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ) : (
                            <>
                                <Link to="/login">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 py-2 text-white hover:text-gray-300 transition-colors"
                                    >
                                        Login
                                    </motion.button>
                                </Link>
                                <Link to="/register">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                                    >
                                        Sign Up
                                    </motion.button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
