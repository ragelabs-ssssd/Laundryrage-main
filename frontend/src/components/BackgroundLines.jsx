import React from 'react';
import { motion } from 'framer-motion';

const BackgroundLines = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full opacity-[0.15]"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FACC15" stopOpacity="0" />
            <stop offset="50%" stopColor="#FACC15" stopOpacity="1" />
            <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Dynamic flowing lines */}
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${-200 + i * 100} ${200 + i * 50} Q ${400 + i * 50} ${100 + i * 100} ${1200} ${500 + i * 50}`}
            stroke="url(#line-grad)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
              pathOffset: [0, 0, 1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}

        {/* Reverse flowing lines */}
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={`rev-${i}`}
            d={`M 1200 ${100 + i * 150} Q ${600 - i * 50} ${500 + i * 100} ${-200} ${800 - i * 100}`}
            stroke="url(#line-grad)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.8, 0.8, 0],
              pathOffset: [0, 0, 1, 1],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}

        {/* Web Nodes (Floating Dots) */}
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={`node-${i}`}
            r="3"
            fill="#FACC15"
            opacity="0.3"
            initial={{ 
              x: Math.random() * 1000, 
              y: Math.random() * 1000,
              opacity: 0 
            }}
            animate={{
              x: [null, Math.random() * 1000],
              y: [null, Math.random() * 1000],
              opacity: [0, 0.4, 0.4, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
      
      {/* Subtle radial gradients to add depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,transparent_0%,white_100%)] opacity-40" />
    </div>
  );
};

export default BackgroundLines;
