import React, { useState } from 'react'
import Cards from './Cards'
import { motion } from 'framer-motion';

function Events() {
  // State for search input and filter selection
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [displayCount, setDisplayCount] = useState(8); // Initially show 8 events

  // Event data with image URLs, status type and location
  const eventsData = [
    {
      id: 1,
      name: "Hackathon 2024",
      date: "1 April 2025",
      status: "Upcoming",
      format: "Offline",
      description: "Join us for an exciting 24-hour coding competition with amazing prizes and learning opportunities.",
      imageUrl: "/images/sc1.png",
      location: "University Main Hall"
    },
    {
      id: 2,
      name: "Tech Conference",
      date: "15 May 2025",
      status: "Upcoming",
      format: "Online",
      description: "Annual tech conference featuring industry leaders and cutting-edge technology discussions.",
      imageUrl: "/images/sc2.png",
      location: "Virtual Event"
    },
    {
      id: 3,
      name: "Workshop Series",
      date: "20 June 2025",
      status: "Upcoming",
      format: "Offline",
      description: "Hands-on workshops covering various technologies and development practices.",
      imageUrl: "/images/sc3.png",
      location: "Engineering Building"
    },
    {
      id: 4,
      name: "Coding Bootcamp",
      date: "1 July 2025",
      status: "Upcoming",
      format: "Online",
      description: "Intensive coding bootcamp for beginners to learn full-stack development.",
      imageUrl: "/images/sc4.png",
      location: "Virtual Event"
    },
    {
      id: 5,
      name: "AI Summit",
      date: "15 August 2025",
      status: "Upcoming",
      format: "Offline",
      description: "Explore the latest developments in Artificial Intelligence and Machine Learning.",
      imageUrl: "/images/sc5.png",
      location: "Science Building"
    },
    {
      id: 6,
      name: "DevOps Day",
      date: "1 September 2025",
      status: "Upcoming",
      format: "Online",
      description: "Learn about modern DevOps practices and tools from industry experts.",
      imageUrl: "/images/sc6.jpg",
      location: "Virtual Event"
    },
    {
      id: 7,
      name: "Cloud Summit",
      date: "1 October 2025",
      status: "Upcoming",
      format: "Offline",
      description: "Deep dive into cloud technologies and best practices.",
      imageUrl: "/public/logo.jpg",
      location: "Computing Center"
    },
    {
      id: 8,
      name: "Blockchain Expo",
      date: "15 November 2025",
      status: "Upcoming",
      format: "Online",
      description: "Explore the world of blockchain and cryptocurrency.",
      imageUrl: "/images/sc2.png",
      location: "Virtual Event"
    },
    {
      id: 9,
      name: "Design Thinking Workshop",
      date: "5 December 2025",
      status: "Online",
      format: "Online",
      description: "Learn creative problem-solving techniques and design thinking methodologies.",
      imageUrl: "/images/sc3.png",
      location: "Virtual Event"
    },
    {
      id: 10,
      name: "Data Science Summit",
      date: "20 January 2026",
      status: "Upcoming",
      format: "Offline",
      description: "Explore the world of data science, analytics, and machine learning applications.",
      imageUrl: "/images/sc4.png",
      location: "Mathematics Department"
    },
    {
      id: 11,
      name: "Mobile Development Bootcamp",
      date: "15 February 2026",
      status: "Online",
      format: "Online",
      description: "Intensive training on building cross-platform mobile applications.",
      imageUrl: "/images/sc5.png",
      location: "Virtual Event"
    },
    {
      id: 12,
      name: "UX/UI Design Conference",
      date: "10 March 2026",
      status: "Upcoming",
      format: "Offline",
      description: "Learn about latest trends and practices in user experience and interface design.",
      imageUrl: "/images/sc6.jpg",
      location: "Design Center"
    }
  ];

  // Filter event data based on search query and selected filter
  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
                          
    const matchesFilter = selectedFilter === 'All' || event.format === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  // Get the current events to display based on the display count
  const displayedEvents = filteredEvents.slice(0, displayCount);
  const hasMoreEvents = displayCount < filteredEvents.length;

  // Function to load more events
  const loadMoreEvents = () => {
    setDisplayCount(prevCount => Math.min(prevCount + 4, filteredEvents.length));
  };


  // Function to reset filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedFilter('All');
    setDisplayCount(8);
  };

  
  return (
    <div id="events-section" className='w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>Upcoming Events</h2>
          <p className='text-gray-400 max-w-2xl mx-auto text-lg mb-8'>
            Discover and participate in exciting events happening around your campus
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                placeholder="Search events..."
                className="w-full px-5 py-3 bg-[#1a1a1a] border border-gray-800 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white/30 pl-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Filter Options */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FilterButton 
              text="All" 
              isSelected={selectedFilter === 'All'} 
              onClick={() => setSelectedFilter('All')}
            />
            <FilterButton 
              text="Online" 
              isSelected={selectedFilter === 'Online'} 
              onClick={() => setSelectedFilter('Online')}
            />
            <FilterButton 
              text="Offline" 
              isSelected={selectedFilter === 'Offline'} 
              onClick={() => setSelectedFilter('Offline')}
            />
          </motion.div>
        </motion.div>
        
        {/* Event Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {displayedEvents.length > 0 ? (
            displayedEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}
                viewport={{ once: true }}
              >
                <Cards 
                  hackName={event.name} 
                  Date={event.date} 
                  status={event.format} 
                  description={event.description}
                  imageUrl={event.imageUrl}
                  location={event.location}
                />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">No events found matching your search.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-2 bg-black text-white rounded-full font-medium border border-white/20"
                onClick={resetFilters}
              >
                Reset Filters
              </motion.button>
            </div>
          )}
        </div>
        
        {/* View More Events Button - Styled like Hero section */}
        {filteredEvents.length > 0 && (
          <div className="mt-16 flex flex-col items-center justify-center">
            {hasMoreEvents && (
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                  boxShadow: '0 10px 25px -5px rgba(255, 255, 255, 0.3)' 
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-black text-white rounded-full text-lg font-medium backdrop-blur-sm border border-white/20 transition-all duration-300 flex items-center gap-2"
                style={{ boxShadow: '0 4px 16px -4px rgba(255, 255, 255, 0.2)' }}
                onClick={loadMoreEvents}
              >
                <span>View More Events</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            )}
            
            {!hasMoreEvents && displayCount > 8 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-400 mt-3"
              >
                You've reached the end of the list
              </motion.div>
            )}
            
            {/* Back to top button */}
            <motion.a
              href="#events-section"
              whileHover={{ y: -3 }}
              className="mt-6 text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              Back to top
            </motion.a>
          </div>
        )}
      </div>
    </div>
  )
}

// Filter Button Component
const FilterButton = ({ text, isSelected, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      isSelected 
        ? 'bg-white text-black' 
        : 'bg-[#1a1a1a] text-white border border-gray-800'
    }`}
    onClick={onClick}
  >
    {text}
  </motion.button>
);

export default Events