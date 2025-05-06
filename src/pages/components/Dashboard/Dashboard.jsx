import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../../../firebase';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaTicketAlt, FaCalendarCheck, FaHome, FaUserEdit, FaEnvelope, FaPhone, FaUniversity } from 'react-icons/fa';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) {
                navigate('/login');
            } else {
                setUser(user);
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const stats = [
        {
            title: 'Total Events',
            value: '24',
            icon: <FaCalendarAlt className="w-6 h-6" />,
            color: 'bg-blue-500'
        },
        {
            title: 'Active Clubs',
            value: '12',
            icon: <FaUsers className="w-6 h-6" />,
            color: 'bg-green-500'
        },
        {
            title: 'Events Registered',
            value: '5',
            icon: <FaTicketAlt className="w-6 h-6" />,
            color: 'bg-purple-500'
        },
        {
            title: 'Upcoming Events',
            value: '3',
            icon: <FaCalendarCheck className="w-6 h-6" />,
            color: 'bg-yellow-500'
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Background gradients */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A0FFD6]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#BAA0FF]/10 rounded-full blur-3xl"></div>
                <div className="absolute top-2/3 left-2/3 w-72 h-72 bg-[#FFC5A0]/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                {/* Header */}
                <header className="bg-black/80 backdrop-blur-md border-b border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-6">
                                <h1 className="text-2xl font-bold">Dashboard</h1>
                                <Link to="/">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                                    >
                                        <FaHome className="w-5 h-5" />
                                        <span>Go to Home</span>
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Profile Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-8"
                    >
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                            <div className="flex items-center space-x-4">
                                {user?.photoURL ? (
                                    <img 
                                        src={user.photoURL} 
                                        alt={user.displayName || 'User'} 
                                        className="w-20 h-20 rounded-full object-cover border-2 border-white/20"
                                    />
                                ) : (
                                    <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center">
                                        <span className="text-2xl font-medium">
                                            {user?.displayName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase()}
                                        </span>
                                    </div>
                                )}
                                <div>
                                    <h2 className="text-xl font-bold">{user?.displayName || 'User'}</h2>
                                    <div className="flex items-center space-x-2 text-gray-400 mt-1">
                                        <FaEnvelope className="w-4 h-4" />
                                        <span>{user?.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-sm">{stat.title}</p>
                                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                                    </div>
                                    <div className={`${stat.color} p-3 rounded-lg`}>
                                        {stat.icon}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard; 