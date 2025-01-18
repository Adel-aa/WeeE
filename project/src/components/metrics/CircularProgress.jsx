import { motion } from 'framer-motion';

export function CircularProgress({ value, isHovered, darkMode }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Subtle glow effect */}
      <motion.div 
        className={`absolute inset-0 rounded-full blur-sm ${
          darkMode 
            ? 'bg-white/5' 
            : 'bg-[#8860D0]/10'
        }`}
        animate={{
            scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 0.2 : 0.1
        }}
      />

      <svg className="w-full h-full -rotate-90">
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={darkMode ? '#FFFFFF' : '#8860D0'} />
            <stop offset="100%" stopColor={darkMode ? '#E0E0E0' : '#6b4da6'} />
          </linearGradient>
          
          <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background circle */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke={darkMode ? '#2D2D3B' : '#F0F0F0'}
          strokeWidth="8"
          fill="none"
        />

        {/* Animated progress circle */}
        <motion.circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke={darkMode ? '#FFFFFF' : 'url(#progressGradient)'}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          animate={{ 
            strokeDashoffset: circumference - (value / 100) * circumference
          }}
          transition={{
            strokeDashoffset: {
              duration: 1.5,
              ease: "easeOut"
            }
          }}
          className={darkMode ? 'opacity-90' : ''}
        />
      </svg>

      {/* Value display */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          scale: isHovered ? 1.05 : 1
        }}
      >
        <motion.span
          className={`text-3xl font-medium ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.6
          }}
        >
          {`${value}%`}
        </motion.span>
      </motion.div>
    </div>
  );
}