import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Dense arrangement of floating elements on left and right sides
const floatingElements = [
    // Left side elements - dense vertical distributions
    { type: "app", icon: "M", initialX: "5%", initialY: "10%", size: "w-14 h-14", delay: 0.2, color: "#A0FFD6", bg: "bg-[#A0FFD6]/20", shadow: "shadow-[#A0FFD6]/20" },
    { type: "social", icon: "fab fa-instagram", initialX: "9%", initialY: "18%", size: "w-12 h-12", delay: 0.3, color: "#E1A0FF", bg: "bg-[#E1A0FF]/20", shadow: "shadow-[#E1A0FF]/20" },
    { type: "app", icon: "Y", initialX: "4%", initialY: "26%", size: "w-13 h-13", delay: 0.4, color: "#FFA0A0", bg: "bg-[#FFA0A0]/20", shadow: "shadow-[#FFA0A0]/20" },
    { type: "social", icon: "fab fa-facebook", initialX: "10%", initialY: "34%", size: "w-11 h-11", delay: 0.5, color: "#BAA0FF", bg: "bg-[#BAA0FF]/20", shadow: "shadow-[#BAA0FF]/20" },
    { type: "app", icon: "R", initialX: "3%", initialY: "42%", size: "w-14 h-14", delay: 0.6, color: "#FFC5A0", bg: "bg-[#FFC5A0]/20", shadow: "shadow-[#FFC5A0]/20" },
    { src: "/images/sc1.png", initialX: "8%", initialY: "50%", size: "w-16 h-16", delay: 0.7, color: "#A0FFD6", bg: "bg-[#A0FFD6]/20", shadow: "shadow-[#A0FFD6]/20", alt: "Club logo" },
    { type: "social", icon: "fab fa-linkedin", initialX: "12%", initialY: "58%", size: "w-12 h-12", delay: 0.8, color: "#FFE9A0", bg: "bg-[#FFE9A0]/20", shadow: "shadow-[#FFE9A0]/20" },
    { type: "app", icon: "D", initialX: "4%", initialY: "66%", size: "w-15 h-15", delay: 0.9, color: "#A0DFFF", bg: "bg-[#A0DFFF]/20", shadow: "shadow-[#A0DFFF]/20" },
    { type: "social", icon: "fab fa-youtube", initialX: "9%", initialY: "74%", size: "w-13 h-13", delay: 1.0, color: "#FFA0A0", bg: "bg-[#FFA0A0]/20", shadow: "shadow-[#FFA0A0]/20" },
    { type: "app", icon: "P", initialX: "3%", initialY: "82%", size: "w-14 h-14", delay: 1.1, color: "#BAA0FF", bg: "bg-[#BAA0FF]/20", shadow: "shadow-[#BAA0FF]/20" },
    { src: "/images/sc3.png", initialX: "11%", initialY: "90%", size: "w-16 h-16", delay: 1.2, color: "#A0FFD6", bg: "bg-[#A0FFD6]/20", shadow: "shadow-[#A0FFD6]/20", alt: "Club logo" },

    // Additional left side elements in different columns
    { type: "app", icon: "F", initialX: "15%", initialY: "15%", size: "w-13 h-13", delay: 0.3, color: "#FFC5A0", bg: "bg-[#FFC5A0]/20", shadow: "shadow-[#FFC5A0]/20" },
    { type: "social", icon: "fab fa-discord", initialX: "18%", initialY: "28%", size: "w-12 h-12", delay: 0.5, color: "#A0DFFF", bg: "bg-[#A0DFFF]/20", shadow: "shadow-[#A0DFFF]/20" },
    { type: "app", icon: "W", initialX: "16%", initialY: "42%", size: "w-14 h-14", delay: 0.7, color: "#E1A0FF", bg: "bg-[#E1A0FF]/20", shadow: "shadow-[#E1A0FF]/20" },
    { src: "/images/sc5.png", initialX: "17%", initialY: "56%", size: "w-15 h-15", delay: 0.9, color: "#FFE9A0", bg: "bg-[#FFE9A0]/20", shadow: "shadow-[#FFE9A0]/20", alt: "Club logo" },
    { type: "social", icon: "fab fa-github", initialX: "15%", initialY: "70%", size: "w-12 h-12", delay: 1.1, color: "#A0FFD6", bg: "bg-[#A0FFD6]/20", shadow: "shadow-[#A0FFD6]/20" },
    { type: "app", icon: "J", initialX: "18%", initialY: "84%", size: "w-13 h-13", delay: 1.3, color: "#FFA0A0", bg: "bg-[#FFA0A0]/20", shadow: "shadow-[#FFA0A0]/20" },

    // Right side elements - dense vertical distribution
    { type: "app", icon: "G", initialX: "92%", initialY: "10%", size: "w-15 h-15", delay: 0.3, color: "#FFE9A0", bg: "bg-[#FFE9A0]/20", shadow: "shadow-[#FFE9A0]/20" },
    { type: "social", icon: "fab fa-twitter", initialX: "88%", initialY: "18%", size: "w-12 h-12", delay: 0.4, color: "#A0DFFF", bg: "bg-[#A0DFFF]/20", shadow: "shadow-[#A0DFFF]/20" },
    { type: "app", icon: "T", initialX: "94%", initialY: "26%", size: "w-14 h-14", delay: 0.5, color: "#FFC5A0", bg: "bg-[#FFC5A0]/20", shadow: "shadow-[#FFC5A0]/20" },
    { type: "social", icon: "fab fa-slack", initialX: "87%", initialY: "34%", size: "w-13 h-13", delay: 0.6, color: "#BAA0FF", bg: "bg-[#BAA0FF]/20", shadow: "shadow-[#BAA0FF]/20" },
    { type: "app", icon: "S", initialX: "93%", initialY: "42%", size: "w-15 h-15", delay: 0.7, color: "#A0FFD6", bg: "bg-[#A0FFD6]/20", shadow: "shadow-[#A0FFD6]/20" },
    { src: "/images/sc2.png", initialX: "89%", initialY: "50%", size: "w-16 h-16", delay: 0.8, color: "#BAA0FF", bg: "bg-[#BAA0FF]/20", shadow: "shadow-[#BAA0FF]/20", alt: "Club logo" },
    { type: "social", icon: "fab fa-dribbble", initialX: "86%", initialY: "58%", size: "w-12 h-12", delay: 0.9, color: "#E1A0FF", bg: "bg-[#E1A0FF]/20", shadow: "shadow-[#E1A0FF]/20" },
    { type: "app", icon: "V", initialX: "95%", initialY: "66%", size: "w-14 h-14", delay: 1.0, color: "#A0DFFF", bg: "bg-[#A0DFFF]/20", shadow: "shadow-[#A0DFFF]/20" },
    { type: "social", icon: "fab fa-behance", initialX: "88%", initialY: "74%", size: "w-13 h-13", delay: 1.1, color: "#FFC5A0", bg: "bg-[#FFC5A0]/20", shadow: "shadow-[#FFC5A0]/20" },
    { type: "app", icon: "Z", initialX: "93%", initialY: "82%", size: "w-15 h-15", delay: 1.2, color: "#FFE9A0", bg: "bg-[#FFE9A0]/20", shadow: "shadow-[#FFE9A0]/20" },
    { src: "/images/sc4.png", initialX: "87%", initialY: "90%", size: "w-16 h-16", delay: 1.3, color: "#A0FFD6", bg: "bg-[#A0FFD6]/20", shadow: "shadow-[#A0FFD6]/20", alt: "Club logo" },

    // Additional right side elements in different columns
    { type: "app", icon: "K", initialX: "82%", initialY: "15%", size: "w-14 h-14", delay: 0.4, color: "#FFA0A0", bg: "bg-[#FFA0A0]/20", shadow: "shadow-[#FFA0A0]/20" },
    { type: "social", icon: "fab fa-figma", initialX: "80%", initialY: "28%", size: "w-12 h-12", delay: 0.6, color: "#BAA0FF", bg: "bg-[#BAA0FF]/20", shadow: "shadow-[#BAA0FF]/20" },
    { type: "app", icon: "N", initialX: "83%", initialY: "42%", size: "w-13 h-13", delay: 0.8, color: "#A0FFD6", bg: "bg-[#A0FFD6]/20", shadow: "shadow-[#A0FFD6]/20" },
    { src: "/images/sc6.jpg", initialX: "79%", initialY: "56%", size: "w-15 h-15", delay: 1.0, color: "#FFC5A0", bg: "bg-[#FFC5A0]/20", shadow: "shadow-[#FFC5A0]/20", alt: "Club logo" },
    { type: "social", icon: "fab fa-spotify", initialX: "81%", initialY: "70%", size: "w-12 h-12", delay: 1.2, color: "#A0DFFF", bg: "bg-[#A0DFFF]/20", shadow: "shadow-[#A0DFFF]/20" },
    { type: "app", icon: "E", initialX: "78%", initialY: "84%", size: "w-14 h-14", delay: 1.4, color: "#E1A0FF", bg: "bg-[#E1A0FF]/20", shadow: "shadow-[#E1A0FF]/20" },
];

// Feature tags
const featureTags = [
    { text: "Fresh updates weekly", delay: 0.3, color: "#13151a", bg: "bg-[#d6f1e2]" },
    { text: "Now available for everyone", delay: 0.4, color: "#13151a", bg: "bg-white" }
];

function Hero() {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check for mobile viewport
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // Consider mobile if less than md breakpoint
        };

        // Initial check
        checkMobile();

        // Add event listener for resize
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Setup minimal floating animation for elements - desktop only
    useEffect(() => {
        if (!isMobile) {
            const floatingEls = document.querySelectorAll('.floating-element');

            floatingEls.forEach((element) => {
                // Set initial state
                element.style.opacity = '0';
                element.style.transform = 'translate(0px, 0px) rotate(0deg)';

                // Fade in animation
                element.animate([
                    { opacity: 0, transform: 'translate(0px, 0px) rotate(0deg)' },
                    { opacity: 1, transform: 'translate(0px, 0px) rotate(0deg)' }
                ], {
                    duration: 1000,
                    easing: 'ease-out',
                    fill: 'forwards'
                });

                // Smooth floating animation
                const animateFloat = () => {
                    // Smoother movement ranges
                    const moveX = Math.random() * 25 - 12.5; // -12.5px to +12.5px
                    const moveY = Math.random() * 25 - 12.5; // -12.5px to +12.5px
                    const rotateAmount = (Math.random() - 0.5) * 4; // -2deg to +2deg

                    // Longer duration for smoother movement
                    const duration = 15000 + Math.random() * 5000; // 15-20 seconds

                    // More keyframes for smoother motion
                    const keyframes = [
                        { transform: `translate(0px, 0px) rotate(0deg)`, offset: 0 },
                        { transform: `translate(${moveX * 0.2}px, ${moveY * 0.2}px) rotate(${rotateAmount * 0.2}deg)`, offset: 0.2 },
                        { transform: `translate(${moveX * 0.5}px, ${moveY * 0.5}px) rotate(${rotateAmount * 0.5}deg)`, offset: 0.5 },
                        { transform: `translate(${moveX * 0.8}px, ${moveY * 0.8}px) rotate(${rotateAmount * 0.8}deg)`, offset: 0.8 },
                        { transform: `translate(${moveX}px, ${moveY}px) rotate(${rotateAmount}deg)`, offset: 0.9 },
                        { transform: `translate(0px, 0px) rotate(0deg)`, offset: 1 }
                    ];

                    const animation = element.animate(keyframes, {
                        duration: duration,
                        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                        fill: 'forwards',
                        iterations: 1
                    });

                    animation.onfinish = () => {
                        // Smooth transition to next animation
                        const nextDelay = Math.random() * 500;
                        setTimeout(animateFloat, nextDelay);
                    };
                };

                // Start floating animation after fade-in
                setTimeout(animateFloat, 1000);
            });
        }
    }, [isMobile]);

    return (
        <div id="hero-section" className='w-full h-screen bg-black overflow-hidden relative flex flex-col justify-center pt-20'>
            {/* Subtle background gradients */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#A0FFD6]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#BAA0FF]/10 rounded-full blur-3xl"></div>
                <div className="absolute top-2/3 left-2/3 w-56 h-56 bg-[#FFC5A0]/10 rounded-full blur-3xl"></div>
            </div>

            {/* Dense left and right floating elements - hidden on mobile */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
                {floatingElements.map((item, index) => {
                    if (item.type === "social") {
                        return (
                            <motion.div
                                key={`social-${index}`}
                                className={`floating-element absolute ${item.size}`}
                                style={{ left: item.initialX, top: item.initialY }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: item.delay, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            >
                                <div className={`w-full h-full ${item.bg} rounded-full border border-${item.color}/30 flex items-center justify-center shadow-lg ${item.shadow}`}
                                    style={{ boxShadow: `0 8px 32px -8px ${item.color}40` }}>
                                    <i className={`${item.icon} text-xl`} style={{ color: item.color }}></i>
                                </div>
                            </motion.div>
                        );
                    } else if (item.type === "app") {
                        return (
                            <motion.div
                                key={`app-${index}`}
                                className={`floating-element absolute ${item.size}`}
                                style={{ left: item.initialX, top: item.initialY }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: item.delay, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            >
                                <div className={`w-full h-full ${item.bg} rounded-xl border border-${item.color}/30 flex items-center justify-center shadow-lg ${item.shadow}`}
                                    style={{ boxShadow: `0 8px 32px -8px ${item.color}40` }}>
                                    <span className="text-xl font-bold" style={{ color: item.color }}>{item.icon}</span>
                                </div>
                            </motion.div>
                        );
                    } else {
                        return (
                            <motion.div
                                key={`logo-${index}`}
                                className={`floating-element absolute ${item.size}`}
                                style={{ left: item.initialX, top: item.initialY }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: item.delay, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            >
                                <div className={`w-full h-full ${item.bg} rounded-full border border-${item.color}/30 flex items-center justify-center p-1 shadow-lg ${item.shadow}`}
                                    style={{ boxShadow: `0 8px 32px -8px ${item.color}40` }}>
                                    <div className="bg-black/30 rounded-full p-1 w-full h-full flex items-center justify-center">
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    }
                })}
            </div>

            {/* Mobile-specific static decorations - extremely simplified */}
            {isMobile && (
                <>
                    <div className="absolute w-10 h-10 top-28 left-4 opacity-30">
                        <div className="w-full h-full bg-[#A0FFD6]/20 rounded-full border border-[#A0FFD6]/30 flex items-center justify-center">
                            <span className="text-lg font-bold" style={{ color: '#A0FFD6' }}>E</span>
                        </div>
                    </div>

                    <div className="absolute w-9 h-9 top-24 right-4 opacity-30">
                        <div className="w-full h-full bg-[#BAA0FF]/20 rounded-full border border-[#BAA0FF]/30 flex items-center justify-center">
                            <span className="text-lg font-bold" style={{ color: '#BAA0FF' }}>x</span>
                        </div>
                    </div>

                    <div className="absolute w-10 h-10 bottom-20 right-6 opacity-30">
                        <div className="w-full h-full bg-[#FFA0A0]/20 rounded-full border border-[#FFA0A0]/30 flex items-center justify-center">
                            <img
                                src="/images/sc1.png"
                                alt="Club logo"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>

                    <div className="absolute w-9 h-9 bottom-16 left-6 opacity-30">
                        <div className="w-full h-full bg-[#FFE9A0]/20 rounded-full border border-[#FFE9A0]/30 flex items-center justify-center">
                            <img
                                src="/images/sc3.png"
                                alt="Club logo"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                </>
            )}

            {/* Main content with heading centered */}
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center justify-center'>
                {/* Feature tags */}
                <div className="flex justify-center items-center gap-1 mb-4">
                    {featureTags.map((tag, index) => (
                        <div
                            key={`tag-${index}`}
                            className="overflow-hidden backdrop-blur-sm"
                        >
                            <div
                                className={`${tag.bg} py-1.5 px-5 rounded-full border border-${tag.color}/30 flex items-center justify-center shadow-sm`}
                                style={{ boxShadow: `0 4px 12px -4px ${tag.color}40` }}
                            >
                                <span className="text-xs font-medium" style={{ color: tag.color }}>{tag.text}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center flex flex-col items-center mt-6">
                    {/* Heading - different for mobile and desktop */}
                    <h1
                        className='text-white text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight flex justify-center items-center'
                        style={{
                            transform: isMobile ? "none" : "translateX(3rem)" // Only move right on desktop
                        }}
                    >
                        {isMobile ? (
                            // Simple text for mobile
                            <span>Eventix</span>
                        ) : (
                            // Animated text for desktop
                            <>
                                <motion.span className="inline-block" initial={{ y: 50 }} animate={{ y: 0 }} transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.5 }}>E</motion.span>
                                <motion.span className="inline-block" initial={{ y: 50 }} animate={{ y: 0 }} transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.6 }}>v</motion.span>
                                <motion.span className="inline-block" initial={{ y: 50 }} animate={{ y: 0 }} transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.7 }}>e</motion.span>
                                <motion.span className="inline-block" initial={{ y: 50 }} animate={{ y: 0 }} transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.8 }}>n</motion.span>
                                <motion.span className="inline-block" initial={{ y: 50 }} animate={{ y: 0 }} transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.9 }}>t</motion.span>
                                <motion.span className="inline-block" initial={{ y: 50 }} animate={{ y: 0 }} transition={{ type: "spring", damping: 12, stiffness: 100, delay: 1.0 }} style={{ position: "relative", zIndex: 1 }}>i</motion.span>
                                <motion.div
                                    className="inline-flex items-center justify-center relative"
                                    style={{
                                        height: "2.8em",
                                        width: "2.3em",
                                        display: "inline-block",
                                        verticalAlign: "baseline",
                                        marginBottom: "0.12em",
                                        marginLeft: "-0.7em",
                                        position: "relative",
                                        zIndex: 0,
                                    }}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ type: "spring", damping: 12, stiffness: 100, delay: 1.1 }}
                                >
                                    <img
                                        src="/logo2.png"
                                        alt="Eventix Logo"
                                        className="h-full w-full object-contain"
                                        style={{ border: "none", background: "transparent" }}
                                        onLoad={() => setLogoLoaded(true)}
                                    />
                                </motion.div>
                            </>
                        )}
                    </h1>

                    {/* Subheading with proper spacing */}
                    <h2
                        className='text-gray-200 text-xl sm:text-2xl md:text-3xl font-light tracking-wide'
                        style={{
                            marginTop: isMobile ? "1rem" : "-2rem"
                        }}
                    >
                        Your University Events <span style={{ color: "#A0FFD6" }}>Hub</span>
                    </h2>

                    {/* Description */}
                    <p
                        className="text-gray-400 max-w-lg mx-auto text-base md:text-lg"
                        style={{ marginTop: "1rem" }}
                    >
                        Discover campus activities, workshops, and competitions all in one place
                    </p>

                    {/* Button */}
                    <button
                        className="mt-6 px-8 py-3 bg-black text-white rounded-full text-lg font-medium backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/10"
                        style={{ boxShadow: '0 4px 16px -4px rgba(255, 255, 255, 0.2)' }}
                    >
                        Explore Events
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;