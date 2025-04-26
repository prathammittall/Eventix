import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loaders from './pages/components/Home/loader';
import Navbar from './pages/components/Home/Navbar';
import Hero from './pages/components/Home/Hero';
import Events from './pages/components/Home/Events';
import Clubs from './pages/components/Home/Clubs';
import About from './pages/components/Home/About';
import Contact from './pages/components/Home/Contact';
import Footer from './pages/components/Home/Footer';
import AboutPage from './pages/components/AllEvents/Events';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });


        // Simulate loadingg time you can replace this with actual loading logic
        
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <BrowserRouter>
            {isLoading ? (
                <Loaders />
            ) : (
                <div className="bg-black min-h-screen relative">
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
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <Navbar />
                                    <Hero />
                                    <Events />
                                    <Clubs />
                                    <About />
                                    <Contact />
                                </>
                            } />
                            <Route path="/about" element={<AboutPage />} />
                        </Routes>
                        <Footer />
                    </div>
                </div>
            )}
        </BrowserRouter>
    );
}

export default App;
