import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './pages/components/Home/Navbar'
import Hero from './pages/components/Home/Hero'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Hero />
        </BrowserRouter>
    )
}

export default App