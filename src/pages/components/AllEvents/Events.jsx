import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loader from '../Home/loader';

const events = [
  { id: 1, title: 'Hackathon 2025', club: 'Coding Club', date: 'May 10, 2025', venue: 'Auditorium A', description: 'A 48-hour coding marathon.', color: "#BAA0FF", logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 2, title: 'Tech Conference', club: 'Tech Society', date: 'June 15, 2025', venue: 'Hall B', description: 'Explore the latest in tech.',color: "#BAA0FF", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 3, title: 'Startup Pitch', club: 'Entrepreneur Club', date: 'July 20, 2025', venue: 'Room 101', description: 'Pitch your startup idea.',color: "#FFA0A0", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 4, title: 'AI Workshop', club: 'AI Club', date: 'August 5, 2025', venue: 'Lab 3', description: 'Learn about AI and ML.', color: "#FFE9A0",logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 5, title: 'Web Dev Bootcamp', club: 'Web Dev Club', date: 'September 12, 2025', venue: 'Room 202', description: 'Master web development.',color: "#A0DFFF", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 6, title: 'Cybersecurity Summit', club: 'Cyber Club', date: 'October 18, 2025', venue: 'Hall C', description: 'Stay ahead in security.', color: "#E1A0FF",logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 7, title: 'Cloud Expo', club: 'Cloud Enthusiasts', date: 'November 25, 2025', venue: 'Auditorium B', description: 'Discover cloud technologies.',color: "#BAA0FF" ,logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 8, title: 'Data Science Meetup', club: 'Data Club', date: 'December 10, 2025', venue: 'Room 303', description: 'Dive into data science.', color: "#BAA0FF",logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 9, title: 'Blockchain Forum', club: 'Blockchain Society', date: 'January 15, 2026', venue: 'Hall D', description: 'Understand blockchain.',color: "#FFA0A0", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 10, title: 'IoT Workshop', club: 'IoT Club', date: 'February 20, 2026', venue: 'Lab 5', description: 'Explore IoT innovations.',color: "#FFE9A0", logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 11, title: 'AR/VR Hackathon', club: 'AR/VR Club', date: 'March 5, 2026', venue: 'Room 404', description: 'Build AR/VR projects.',color: "#A0DFFF", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 12, title: 'Game Dev Jam', club: 'Game Dev Club', date: 'April 10, 2026', venue: 'Auditorium C', description: 'Create amazing games.',color: "#E1A0FF", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 13, title: 'Design Thinking', club: 'Design Club', date: 'May 15, 2026', venue: 'Room 505', description: 'Innovate with design.',color: "#BAA0FF", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 14, title: 'Robotics Challenge', club: 'Robotics Club', date: 'June 20, 2026', venue: 'Lab 6', description: 'Build and compete.',color: "#BAA0FF", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 15, title: 'Quantum Computing', club: 'Quantum Club', date: 'July 25, 2026', venue: 'Room 606', description: 'Learn quantum tech.', color: "#FFA0A0", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 16, title: 'Cybersecurity Bootcamp', club: 'Cyber Club', date: 'August 30, 2026', venue: 'Lab 7', description: 'Hands-on cybersecurity training.',color: "#FFE9A0", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 17, title: 'AI Ethics Panel', club: 'AI Society', date: 'September 15, 2026', venue: 'Room 707', description: 'Discuss the ethics of AI.',color: "#A0DFFF", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 18, title: 'Mobile App Hackathon', club: 'Mobile Dev Club', date: 'October 10, 2026', venue: 'Auditorium D', description: 'Create mobile apps in a day.',color: "#E1A0FF", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 19, title: 'Data Visualization Workshop', club: 'Data Science Club', date: 'November 5, 2026', venue: 'Room 808', description: 'Learn data visualization techniques.',color: "#FFA0A0", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 20, title: 'Ethical Hacking Challenge', club: 'Ethical Hackers', date: 'December 20, 2026', venue: 'Lab 8', description: 'Test your ethical hacking skills.',color: "#A0DFFF", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
  { id: 21, title: 'Cloud Security Summit', club: 'Cloud Security Club', date: 'January 30, 2027', venue: 'Hall E', description: 'Discuss cloud security challenges.',color: "#E1A0FF", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAiiSAGcSLGvTDcO7ti1HzXr59hXeDCeQhg&s' },
];

const Explore = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate  loading time

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section
      className="py-12 relative"
      style={{
        background: 'black', // Base with black background
      }}
    >
      {/* Gradient patche */}
      
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 90% 10%, rgba(186, 160, 255, 0.2), transparent 60%), /* Upper-right */
            radial-gradient(circle at 50% 90%, rgba(186, 160, 255, 0.2), transparent 60%) /* Bottom center */
          `,
          zIndex: 0,
        }}
      ></div>


      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-14"
          style={{
            color: '#FFFFFF',
            fontFamily: "'Poppins', sans-serif",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Explore Events & Hackathons
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="p-6 rounded-lg shadow-lg transition-shadow duration-300 relative overflow-hidden text-center"
              style={{
                backgroundColor: 'rgba(29,29,29,255)', // Cards background color
                boxShadow: `0 8px 32px -8px rgba(0,0,0,0.5)`, // Card shadow
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5, // Slight upward movement on hover.
                
                boxShadow: `0 16px 40px -8px ${event.color}40`, // Dynamic shadow color based on the event color
                borderColor: `${event.color}30`, // Dynamic border color based on event color
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                rotate: -1,
              }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${event.color}40, ${event.color}80)`, // Gradient background for the circle
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <img
                  src={event.logo}
                  alt={`${event.club} logo`}
                  className="w-12 h-12 rounded-full" // Inner logo  circular
                />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                {event.title}
              </h3>
              <p className="text-gray-400 mb-2">
                <strong>Club:</strong> {event.club}
              </p>
              <p className="text-gray-400 mb-2">
                <strong>Date:</strong> {event.date}
              </p>
              <p className="text-gray-400 mb-2">
                <strong>Venue:</strong> {event.venue}
              </p>
              <p className="text-gray-400">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;


