import { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
    const [email, setEmail] = useState('');

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const socialIconVariants = {
        hover: {
            scale: 1.2,
            rotate: 360,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        }
    };

    // Function to handle smooth scroll to top
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert(`Thank you for subscribing with ${email}`);
        setEmail('');
    };

    return (
        <motion.footer 
            className="text-white relative overflow-hidden pt-16 pb-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Animated background gradient */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] to-black"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />

            {/* Decorative element */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#A0FFD6]/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
                <motion.div 
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#BAA0FF]/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.2, 0.4],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
                    {/* Logo and Company Info */}
                    <motion.div 
                        className="md:col-span-5 space-y-6"
                        variants={itemVariants}
                    >
                        <motion.div className="flex items-center mb-6">
                            <img src="/logo.png" alt="Eventix Logo" className="h-12 w-auto mr-3" />
                            <motion.h3 
                                className="text-3xl font-bold text-white"
                                animate={{ 
                                    textShadow: ["0 0 0px #ffffff", "0 0 8px rgba(255,255,255,0.5)", "0 0 0px #ffffff"],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            >
                                Eventix
                            </motion.h3>
                        </motion.div>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Connecting university students with campus events and communities. Discover opportunities, participate in activities, and grow your network with Eventix - your ultimate campus event platform.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            {/* X (Twitter) */}
                            <motion.a
                                href="#"
                                className="bg-white/5 hover:bg-white/10 p-3 rounded-full border border-white/10 text-white hover:text-[#A0FFD6] transition-all"
                                variants={socialIconVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </motion.a>

                            {/* Instagram */}
                            <motion.a
                                href="https://www.instagram.com/prathammittall"
                                className="bg-white/5 hover:bg-white/10 p-3 rounded-full border border-white/10 text-white hover:text-[#BAA0FF] transition-all"
                                variants={socialIconVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </motion.a>

                            {/* Facebook */}
                            <motion.a
                                href="#"
                                className="bg-white/5 hover:bg-white/10 p-3 rounded-full border border-white/10 text-white hover:text-[#FFC5A0] transition-all"
                                variants={socialIconVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                </svg>
                            </motion.a>

                            {/* LinkedIn */}
                            <motion.a
                                href="https://www.linkedin.com/in/pratham-mittall/"
                                className="bg-white/5 hover:bg-white/10 p-3 rounded-full border border-white/10 text-white hover:text-[#A0DFFF] transition-all"
                                variants={socialIconVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Subscribe Section */}
                    
                    <motion.div 
                        className="md:col-span-7"
                        variants={itemVariants}
                    >
                        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6">
                            <h4 className="text-2xl font-semibold text-white mb-4">Subscribe to Our Updates</h4>
                            <p className="text-gray-400 mb-6">
                                Get the latest information about campus events, club activities, and opportunities directly in your inbox.
                            </p>
                            
                            <form onSubmit={handleSubscribe} className="space-y-5">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-grow px-4 py-3 bg-[#13151A] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#A0FFD6] transition-all"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(255, 255, 255, 0.3)' }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        className="px-6 py-3 bg-white text-black rounded-lg font-medium whitespace-nowrap"
                                    >
                                        Subscribe Now
                                    </motion.button>
                                </div>
                                <p className="text-xs text-gray-500">
                                    By subscribing, you agree to our privacy policy. You can unsubscribe at any time.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div 
                    className="border-t border-white/10 pt-8"
                    variants={itemVariants}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <motion.div 
                            className="text-gray-400 text-sm"
                            whileHover={{ scale: 1.02 }}
                        >
                            © 2025 Eventix. All rights reserved.
                        </motion.div>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"].map((policy) => (
                                <motion.a
                                    key={policy}
                                    href="#"
                                    className="text-gray-500 hover:text-white transition text-sm"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ y: 0 }}
                                >
                                    {policy}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Back to top button */}
                <motion.a
                    href="#"
                    onClick={scrollToTop}
                    className="absolute right-6 bottom-8 bg-white text-black p-3 rounded-full shadow-lg"
                    whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)" }}
                    whileTap={{ y: 0 }}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                    </svg>
                </motion.a>
            </div>
        </motion.footer>
    );
};

export default Footer;