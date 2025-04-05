import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './pages/components/Home/Navbar'
import Hero from './pages/components/Home/Hero'
import Events from './pages/components/Home/Events'
import Contact from './pages/components/Home/Contact'
import Footer from './pages/components/Home/Footer'

function App() {
    return (
        <BrowserRouter>
            <div id="navbar">
                <Navbar />
            </div>
            <Hero />
            <div id="events">
                <Events />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App