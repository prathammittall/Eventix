import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-[90vh] flex items-center justify-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Discover Campus Events
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Your one-stop destination for all university events and hackathons. Never miss an opportunity to learn, compete, and grow.
        </p>

        {/* Search bar */}
        <div className="max-w-xl mx-auto">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full px-6 py-4 rounded-full bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="absolute right-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white hover:opacity-90 transition-opacity">
              Search
            </button>
          </div>
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-gray-800/30 rounded-xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
            <p className="text-gray-400">Active Events</p>
          </div>
          <div className="p-6 bg-gray-800/30 rounded-xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-2">10+</h3>
            <p className="text-gray-400">Hackathons</p>
          </div>
          <div className="p-6 bg-gray-800/30 rounded-xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-2">1000+</h3>
            <p className="text-gray-400">Students Engaged</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
