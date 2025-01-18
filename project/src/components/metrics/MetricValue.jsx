import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CircularProgress } from './CircularProgress';

export default function MetricValue({ value, darkMode }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative"
      onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      animate={{ 
        scale: isHovered ? 1.1 : 1,
        y: isHovered ? -5 : 0
        }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
        {/* Glowing background effect */}
          <motion.div 
        className={`absolute inset-0 rounded-full blur-xl ${
          darkMode
            ? 'bg-gradient-to-r from-white/30 to-gray-300/30'
            : 'bg-gradient-to-r from-[#8860D0]/20 to-purple-500/20'
        }`}
        animate={{ 
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.8 : 0.5
        }}
      />
          
      {/* Rotating gradient overlay */}
      <motion.div
        className={`absolute inset-0 rounded-full ${
          darkMode
            ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
            : 'bg-gradient-to-r from-transparent via-white/20 to-transparent'
        }`}
        animate={{
          rotate: isHovered ? 360 : 0,
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="relative">
        <CircularProgress value={value} isHovered={isHovered} darkMode={darkMode} />
      </div>
    </motion.div>
  );
  }