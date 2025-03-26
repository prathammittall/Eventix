import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [submitStatus, setSubmitStatus] = useState({
        submitted: false,
        message: ""
    });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
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

    const formInputVariants = {
        focus: {
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    const iconVariants = {
        initial: { scale: 1 },
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitStatus({
            submitted: true,
            message: "Thank you for your message! We'll get back to you soon."
        });
        
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });

        setTimeout(() => {
            setSubmitStatus({
                submitted: false,
                message: ""
            });
        }, 5000);
    };

    return (
        <motion.section 
            className="bg-gray-900 text-white py-16 px-6 relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Animated background gradient */}
            <motion.div 
                className="absolute inset-0"
                animate={{
                    background: [
                        "radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
                    ],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            <div className="max-w-4xl mx-auto relative">
                <motion.h2 
                    className="text-4xl font-bold text-center text-purple-400 mb-8"
                    variants={itemVariants}
                    animate={{
                        textShadow: [
                            "0 0 0px rgba(168, 85, 247, 0.5)",
                            "0 0 20px rgba(168, 85, 247, 0.5)",
                            "0 0 0px rgba(168, 85, 247, 0.5)"
                        ],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    Contact Us
                </motion.h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <motion.div 
                            className="bg-gray-800 p-6 rounded-lg backdrop-blur-sm bg-opacity-80"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-2xl font-semibold text-purple-300 mb-4">Get in Touch</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "contact@example.com" },
                                    { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: "+1 (555) 123-4567" },
                                    { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", text: "123 Tech Street, Silicon Valley, CA 94025" }
                                ].map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        className="flex items-center space-x-3"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <motion.svg 
                                            className="w-6 h-6 text-purple-400" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                            variants={iconVariants}
                                            whileHover="hover"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                        </motion.svg>
                                        <p className="text-gray-300">{item.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-gray-800 p-6 rounded-lg backdrop-blur-sm bg-opacity-80"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-2xl font-semibold text-purple-300 mb-4">Current Time</h3>
                            <motion.p 
                                className="text-gray-300"
                                animate={{
                                    opacity: [1, 0.7, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            >
                                2025-03-25 16:15:36 UTC
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        className="bg-gray-800 p-6 rounded-lg backdrop-blur-sm bg-opacity-80"
                        variants={itemVariants}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {[
                                { name: "name", type: "text", label: "Name" },
                                { name: "email", type: "email", label: "Email" },
                                { name: "subject", type: "text", label: "Subject" },
                            ].map((field) => (
                                <motion.div key={field.name}>
                                    <label htmlFor={field.name} className="block text-purple-300 mb-2">{field.label}</label>
                                    <motion.input
                                        type={field.type}
                                        id={field.name}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                                        required
                                        whileFocus="focus"
                                        variants={formInputVariants}
                                    />
                                </motion.div>
                            ))}
                            <motion.div>
                                <label htmlFor="message" className="block text-purple-300 mb-2">Message</label>
                                <motion.textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                                    required
                                    whileFocus="focus"
                                    variants={formInputVariants}
                                ></motion.textarea>
                            </motion.div>
                            <motion.button
                                type="submit"
                                className="w-full px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                Send Message
                            </motion.button>
                            <AnimatePresence>
                                {submitStatus.submitted && (
                                    <motion.div 
                                        className="mt-4 p-3 bg-green-500 text-white rounded-lg"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        {submitStatus.message}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactSection;