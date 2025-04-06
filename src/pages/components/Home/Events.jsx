import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const eventsData = [
    {
        id: 1,
        title: "Hack with AI",
        date: "April 10, 2025",
        time: "10:00 AM - 6:00 PM",
        location: "Online",
        description: "An AI-focused hackathon for innovators.",
        category: "Hackathon",
    },
    {
        id: 6,
        title: "Hack with AI",
        date: "April 10, 2025",
        time: "10:00 AM - 6:00 PM",
        location: "Online",
        description: "An AI-focused hackathon for innovators.",
        category: "Hackathon",
    },
    {
        id: 2,
        title: "Hack with AI",
        date: "April 10, 2025",
        time: "10:00 AM - 6:00 PM",
        location: "Online",
        description: "An AI-focused hackathon for innovators.",
        category: "Hackathon",
    },
    {
        id: 3,
        title: "Hack with AI",
        date: "April 10, 2025",
        time: "10:00 AM - 6:00 PM",
        location: "Online",
        description: "An AI-focused hackathon for innovators.",
        category: "Hackathon",
    },
    {
        id: 4,
        title: "Hack with AI",
        date: "April 10, 2025",
        time: "10:00 AM - 6:00 PM",
        location: "Online",
        description: "An AI-focused hackathon for innovators.",
        category: "Hackathon",
    },
    {
        id: 5,
        title: "Hack with AI",
        date: "April 10, 2025",
        time: "10:00 AM - 6:00 PM",
        location: "Online",
        description: "An AI-focused hackathon for innovators.",
        category: "Hackathon",
    },
    // ... other events data
];

const EventsSection = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentTime, setCurrentTime] = useState("2025-03-25 16:25:16");
    const scrollContainerRef = useRef(null);
    const verticalScrollRef = useRef(null);

    // Update current time
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const formattedTime = now.toISOString().replace('T', ' ').split('.')[0];
            setCurrentTime(formattedTime);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const filteredEvents = eventsData.filter(
        (event) =>
            (selectedCategory === "All" || event.category === selectedCategory) &&
            event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle scrolling logic
    useEffect(() => {
        const handleWheel = (e) => {
            const container = scrollContainerRef.current;
            if (!container) return;

            const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
            
            if (isAtEnd && e.deltaY > 0) {
                // If at the end of horizontal scroll and scrolling down,
                // let the page scroll vertically
                return;
            } else {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    return (
        <div className="bg-gray-900 text-white py-12 px-6" ref={verticalScrollRef}>
            {/* User Info and Time Display */}
            <motion.div 
                className="max-w-7xl mx-auto mb-8 flex flex-wrap justify-between items-center gap-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div 
                    className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3"
                    whileHover={{ scale: 1.02 }}
                >
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-purple-300">@prathammittall</span>
                </motion.div>

                <motion.div 
                    className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3"
                    whileHover={{ scale: 1.02 }}
                >
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-purple-300">{currentTime} UTC</span>
                </motion.div>
            </motion.div>

            <motion.h2 
                className="text-4xl font-bold text-center text-purple-400 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                    opacity: 1, 
                    y: 0,
                    textShadow: [
                        "0 0 0px rgba(168, 85, 247, 0.5)",
                        "0 0 20px rgba(168, 85, 247, 0.5)",
                        "0 0 0px rgba(168, 85, 247, 0.5)"
                    ],
                }}
                transition={{
                    duration: 0.5,
                    textShadow: {
                        duration: 2,
                        repeat: Infinity,
                    }
                }}
            >
                Upcoming Events
            </motion.h2>

            {/* Category Filters */}
            <motion.div 
                className="flex justify-center gap-4 my-6 flex-wrap"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                {["All", "Hackathon", "Workshop", "Webinar"].map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg border transition ${
                            selectedCategory === category ? "bg-purple-500" : "bg-gray-800"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>

            {/* Horizontal Scrolling Events Container */}
            <motion.div 
                ref={scrollContainerRef}
                className="overflow-x-auto hide-scrollbar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                    cursor: 'grab',
                    WebkitOverflowScrolling: 'touch',
                }}
            >
                <div className="flex space-x-6 p-4 min-w-max">
                    {filteredEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 flex-shrink-0 relative overflow-hidden"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
                            }}
                        >
                            {/* Animated gradient background */}
                            <motion.div
                                className="absolute inset-0 opacity-10"
                                animate={{
                                    background: [
                                        "linear-gradient(45deg, purple 0%, transparent 100%)",
                                        "linear-gradient(45deg, transparent 0%, purple 100%)",
                                        "linear-gradient(45deg, purple 0%, transparent 100%)",
                                    ],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                            />

                            <motion.h3 
                                className="text-xl font-bold text-purple-300 relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                            >
                                {event.title}
                            </motion.h3>
                            <motion.div 
                                className="space-y-2 relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                            >
                                <p className="text-gray-400">{event.date} | {event.time}</p>
                                <p className="text-gray-500">📍 {event.location}</p>
                                <p className="mt-2 text-gray-300">{event.description}</p>
                                <motion.button 
                                    className="mt-4 px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 w-full"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Register
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
                className="flex justify-center mt-6 text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
            </motion.div>
            <div className="w-full flex justify-center">
                <button className="bg-[#AD46FF] w-50 h-10 border-none rounded-lg cursor-pointer">Explore All</button>
            </div>
        </div>
    );
};

// Add this CSS to your global styles
const styles = `
    .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .hide-scrollbar::-webkit-scrollbar {
        display: none;
    }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

export default EventsSection;