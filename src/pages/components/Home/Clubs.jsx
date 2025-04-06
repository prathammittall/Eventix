import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const clubs = [
    [
        {
            name: "C2S2",
            description: "C2S2 is an inclusive student-driven club fostering a vibrant community of learners and teachers beyond campus hours",
            logo: "/images/sc1.png",
            tags: ["Drama", "Cultural", "Dance", "Design"],
            coordinator: "Rhea D., President",
        },
        {
            name: "IEEE",
            description: "Promoting innovation in engineering and technology through technical events and knowledge sharing.",
            logo: "/images/sc2.png",
            tags: ["Innovation", "Technical"],
            coordinator: "Yash M., Lead Designer",
        },
        {
            name: "ACM Student Chapter",
            description: "Focusing on computer science and scientific research with workshops and coding events.",
            logo: "/images/sc3.png",
            tags: ["Technical", "Coding", "Research"],
            coordinator: "Simran A., Head Editor",
        },
    ],
    [
        {
            name: "E-Sports Club",
            description: "A competitive space for games to connect, compete and thrive in e-sports.",
            logo: "/images/sc4.png",
            tags: ["Cultural", "Sports"],
            coordinator: "Arjun K.",
        },
        {
            name: "BITS N BYTES",
            description: "When technology meets culture -- combining tech fests with creativity and cultural spirit.",
            logo: "/images/sc5.png",
            tags: ["Technical", "Cultural"],
            coordinator: "Tina J.",
        },
        {
            name: "DICE",
            description: "Chitkara University's Department of Interdisciplinary Courses in Engineering (DICE) organizes events and activitie like TechInnovate project exhibition.",
            logo: "/images/sc6.jpg",
            tags: ["Technical", "Research", "Exhibitions"],
            coordinator: "Zara A.",
        },
    ],
];

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

const Clubs = () => {
    const [currentSet, setCurrentSet] = useState(0);
    const [direction, setDirection] = useState(0); // 1 = next, -1 = back

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const nextSet = () => {
        if (currentSet < clubs.length - 1) {
            setDirection(1);
            setCurrentSet((prev) => prev + 1);
        }
    };

    const prevSet = () => {
        if (currentSet > 0) {
            setDirection(-1);
            setCurrentSet((prev) => prev - 1);
        }
    };

    return (
        <div className="py-12 px-20 bg-[#0b1320] text-white relative">
            {/* Card Slider */}
            <div className="relative z-20">
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={currentSet}
                        custom={direction}
                        variants={slideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-[-80px] justify-items-center"
                    >
                        {clubs[currentSet] && clubs[currentSet].map((club, index) => (
                            <motion.div
                                key={club.name}
                                data-aos="zoom-in-up"
                                whileTap={{ y: -10 }}
                                className="relative w-98 h-[400px] bg-cover bg-center rounded-xl flex flex-col justify-between p-6 shadow-lg bg-gray-800 transition-shadow duration-500 hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.5)]"
                            >
                                <div className="absolute top-4 left-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">
                                    {String(currentSet * 3 + index + 1).padStart(2, '0')}
                                </div>

                                <img src={club.logo} alt={club.name} className="w-20 h-20 object-cover rounded-full mx-auto mb-4" />

                                <div className="flex flex-wrap justify-center gap-2 mt-4">
                                    {club.tags.map((tag) => (
                                        <span key={`${club.name}-${tag}`} className="bg-purple-700 text-xs px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="z-10">
                                    <h3 className="text-xl font-semibold text-center">{club.name}</h3>
                                    <p className="text-sm mt-2 text-center max-w-xs text-gray-200 mx-auto">
                                        {club.description}
                                    </p>
                                </div>
                                {/* Coordinator and join button with slide-up effect */}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="z-10 mt-4 text-center"
                                >
                                    <p className="text-sm text-gray-300">{club.coordinator}</p>
                                    <button className="mt-2 px-4 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm">
                                        Join Now
                                    </button>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-center mt-1 gap-4">
                    <button
                        onClick={prevSet}
                        disabled={currentSet === 0}
                        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-40 mt-13"
                    >
                         <ArrowLeft size={20} /> 
                    </button>
                    <button
                        onClick={nextSet}
                        disabled={currentSet === clubs.length - 1}
                        className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600 disabled:opacity-40  mt-13"
                    >
                        <ArrowRight size={20} /> 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Clubs;