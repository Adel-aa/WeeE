  import React from 'react';
import { motion } from 'framer-motion';

export function CardGlow() {
  return (
    <>
      {/* الخلفية الثابتة */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#8860D0]/5 to-transparent opacity-10" />
      
      {/* التوهج المتحرك */}
      <motion.div
        className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#8860D0] to-purple-600 opacity-05"
        animate={{
          opacity: [0.05, 0.08, 0.05], // تقليل التوهج المتحرك
        }}
        transition={{
            duration: 3,
              repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* توهج داخلي منخفض */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm opacity-10" />
    </>
  );
  }
  