import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/components/Home/Navbar';
import Hero from './pages/components/Home/Hero';
import Events from './pages/components/Home/Events';
import Contact from './pages/components/Home/Contact';
import Footer from './pages/components/Home/Footer';
// import Clubs from './pages/components/Home/Clubs';
import Sections from './pages/components/Home/Sections';
import Header from './pages/components/Home/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <BrowserRouter>
            <Navbar />
            <Hero />
            <Events />
            {/* <Header /> */}
            {/* <Clubs /> */}
            <Sections />
{/* 
            <Header setActiveCategory={setActiveCategory} />
            <Clubs activeCategory={activeCategory} /> */}
            <Contact />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
