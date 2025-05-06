import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Loaders from './pages/components/Home/loader';
import Navbar from './pages/components/Home/Navbar';
import Hero from './pages/components/Home/Hero';
import Events from './pages/components/Home/Events';
import Clubs from './pages/components/Home/Clubs';
import About from './pages/components/Home/About';
import Contact from './pages/components/Home/Contact';
import Footer from './pages/components/Home/Footer';
import AllEvents from './pages/components/AllEvents/Events';
import Login from './pages/components/Auth/Login';
import Register from './pages/components/Auth/Register';
import Dashboard from './pages/components/Dashboard/Dashboard';

import AOS from 'aos';
import 'aos/dist/aos.css';

const NavbarWrapper = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    
    return isHomePage ? <Navbar /> : null;
};

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [showAllEvents, setShowAllEvents] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });

        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleAllEventsClick = () => {
        setIsLoading(true);
        setShowAllEvents(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <BrowserRouter>
            <div className="bg-black min-h-screen relative">
                {isLoading ? (
                    <Loaders />
                ) : (
                    <>
                        {/* Shared background gradients that persist throughout the site */}
                        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A0FFD6]/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#BAA0FF]/10 rounded-full blur-3xl"></div>
                            <div className="absolute top-2/3 left-2/3 w-72 h-72 bg-[#FFC5A0]/10 rounded-full blur-3xl"></div>
                            <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-[#E1A0FF]/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#A0DFFF]/10 rounded-full blur-3xl"></div>
                        </div>
                        
                        {/* Content with relative positioning to appear above the fixed background */}
                        <div className="relative z-10">
                            <NavbarWrapper />
                            <Routes>
                                <Route path="/" element={
                                    <>
                                        <Hero />
                                        <Events />
                                        <Clubs />
                                        <About />
                                        <Contact />
                                        <Footer />
                                    </>
                                } />
                                <Route path="/all-events" element={<AllEvents />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                            </Routes>
                        </div>
                    </>
                )}
            </div>
        </BrowserRouter>
    );
}

export default App;
