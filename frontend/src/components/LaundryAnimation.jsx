import React from 'react';
import { motion } from 'framer-motion';

const LaundryAnimation = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full opacity-25"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="water-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </linearGradient>
          
          <symbol id="shirt-icon" viewBox="0 0 24 24">
            <path d="M20.38 8.57l-1.23 1.85a2.503 2.503 0 0 1-4.3 0L12 6.14l-2.85 4.28a2.503 2.503 0 0 1-4.3 0L3.62 8.57C3.21 8.99 3 9.47 3 10v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10c0-.53-.21-1.01-.62-1.43zM12 2L5 5l2 3h10l2-3-7-3z" />
          </symbol>
        </defs>

        {/* Dense Flowing Water Lines */}
        {[...Array(12)].map((_, i) => (
          <motion.path
            key={`water-${i}`}
            d={`M -200 ${50 + i * 90} C 200 ${i % 2 === 0 ? 0 : 100 + i * 90}, 600 ${i % 2 === 0 ? 200 : -100 + i * 90}, 1200 ${50 + i * 90}`}
            stroke="url(#water-grad)"
            strokeWidth="2"
            fill="none"
            initial={{ pathOffset: 0 }}
            animate={{ pathOffset: [0, 1] }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* More Floating Shirts */}
        {[...Array(10)].map((_, i) => (
          <motion.g
            key={`shirt-${i}`}
            initial={{ x: -100, y: Math.random() * 1000, opacity: 0, scale: 0.6 + Math.random() * 0.4 }}
            animate={{
              x: 1100,
              y: [null, Math.random() * 1000, Math.random() * 1000],
              opacity: [0, 0.8, 0.8, 0],
              filter: ["grayscale(1) brightness(0.7)", "grayscale(0) brightness(1.1)", "grayscale(0) brightness(1)"],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 4,
            }}
          >
            <use href="#shirt-icon" width="50" height="50" fill={i % 2 === 0 ? "#FACC15" : "#3B82F6"} />
            
            <motion.g
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.3, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 8 + Math.random() * 5,
              }}
            >
              <circle cx="45" cy="5" r="2.5" fill="white" />
              <circle cx="5" cy="35" r="1.8" fill="white" />
            </motion.g>
          </motion.g>
        ))}

        {/* Soap Suds / Clusters of Bubbles */}
        {[...Array(25)].map((_, i) => (
          <motion.circle
            key={`sud-${i}`}
            r={3 + Math.random() * 8}
            fill="#FFFFFF"
            opacity="0.3"
            initial={{ x: Math.random() * 1000, y: 1100 }}
            animate={{
              y: -100,
              x: [null, (Math.random() - 0.5) * 100 + (i * 40)],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 20,
            }}
          />
        ))}

        {/* Smaller Rapid Bubbles */}
        {[...Array(40)].map((_, i) => (
          <motion.circle
            key={`bubble-${i}`}
            r={1 + Math.random() * 2}
            fill="#BFDBFE"
            opacity="0.5"
            initial={{ x: Math.random() * 1000, y: 1050 }}
            animate={{
              y: -50,
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 15,
            }}
          />
        ))}
      </svg>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(250,250,249,0.3)_100%)]" />
    </div>
  );
};

export default LaundryAnimation;
