import React, { useState } from 'react';
// import Clubs from './Clubs';


const Header = ({ activeSection, onSectionChange }) => { // Receive props
    const categories = ['All', 'Technical', 'Cultural', 'Sports'];

    return (
        <div className="bg-[#0b1320] pt-24 pb-0 px-4 flex flex-col items-center text-center space-y-6">
            {/* Title + Description */}
            <div className="max-w-2xl" data-aos="fade-up">
                <h1 className="text-4xl font-extrabold text-white mb-4">
                    Explore Your Campus Clubs :
                </h1>
                <p className="text-gray-300 text-lg  leading-relaxed">
                    From coding to culture, explore clubs that match your passion and vibe.
                    Connect, create, and collaborate — all in one place.
                </p>
            </div>

            {/* Category Navbar */}
            <div className="flex flex-wrap  justify-center space-x-4 mt-6 mb-[-7]" data-aos="fade-up" data-aos-delay="100">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onSectionChange(category)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === category // Use activeSection prop
                            ? 'bg-purple-600 text-white shadow-lg'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Pass active category to Clubs component */}
            {/* <Clubs activeCategory={active} /> */}

        </div>
    );
};

export default Header;
