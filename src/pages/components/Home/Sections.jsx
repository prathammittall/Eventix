// Sections.jsx
import React, { useState } from 'react';
import Header from './Header';
import Clubs from './Clubs';
import Technical from './Technical';
import Cultural from './Cultural';
import Sports from './Sports';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Hero() {
    const { ref: leftLineRef, inView: leftLineInView } = useInView({ triggerOnce: true });
    const { ref: middleLineRef, inView: middleLineInView } = useInView({ triggerOnce: true });
    const { ref: topLineRef, inView: topInView } = useInView({ triggerOnce: true });
    const { ref: bottomLineRef, inView: bottomInView } = useInView({ triggerOnce: true });

    return (
        <div className="relative h-[7vh] bg-[#0b1320] text-white flex items-center justify-center px-10">
            <motion.div
                ref={topLineRef}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: topInView ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="absolute top-8 left-1/2 transform -translate-x-1/2 w-[95%] h-px bg-gray-600 origin-center z-10"
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-between max-w-6xl mx-auto">
                <motion.div
                    ref={leftLineRef}
                    initial={{ height: 0 }}
                    animate={{ height: leftLineInView ? '470px' : 0 }}
                    transition={{ duration: 2 }}
                    className="absolute top-8 left-[45.5%] transform -translate-x-1/2 w-px bg-gray-600 origin-bottom z-10" // Added z-10
                />
                <motion.div
                    ref={middleLineRef}
                    initial={{ height: 0 }}
                    animate={{ height: middleLineInView ? '470px' : 0 }}
                    transition={{ duration: 2 }}
                    className="absolute top-8 left-[86.5%] transform -translate-x-1/2 w-px bg-gray-600 origin-bottom z-10" // Added z-10
                />
            </div>
            <motion.div
                ref={bottomLineRef}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: bottomInView ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="absolute top-[500px] left-1/2 transform -translate-x-1/2 w-[95%] h-px bg-gray-600 origin-center z-10"
            />
        </div>
    );
}

const slideVariants = {
    initial: (direction) => ({
        y: direction > 0 ? 300 : -300,
        opacity: 0,
    }),
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6 },
    },
    exit: (direction) => ({
        y: direction < 0 ? 300 : -300,
        opacity: 0,
        transition: { duration: 0.4 },
    }),
};

function Sections() {
    const [activeSection, setActiveSection] = useState('All');
    const categories = ['All', 'Technical', 'Cultural', 'Sports'];

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="bg-[#0b1320]"> {/* Added background color to the main div */}
            <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
            <Hero />
            <div className="py-12">
                {activeSection === 'All' && <Clubs />}
                {activeSection === 'Technical' && <Technical />}
                {activeSection === 'Cultural' && <Cultural />}
                {activeSection === 'Sports' && <Sports />}
            </div>
        </div>
    );
}

export default Sections;