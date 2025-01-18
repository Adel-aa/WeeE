          import React from 'react';
import { motion } from 'framer-motion';

export function AnimatedIcon({ icon: Icon, title }) {
  return (
    <motion.div
        whileHover={{ 
            scale: 1.1,
        backgroundColor: 'rgba(136, 96, 208, 0.25)',
        rotate: [0, -5, 5, -5, 0],
      }}
      transition={{
          rotate: {
            duration: 0.5,
            ease: "easeInOut"
              }
          }}
      className="p-2 bg-[#8860D0]/10 rounded-lg transition-all duration-300 cursor-pointer"
    >
      <Icon className="w-5 h-5 text-[#8860D0]" />
        </motion.div>
    );
      }