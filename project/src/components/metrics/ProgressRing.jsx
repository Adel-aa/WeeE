import React from 'react';
import { motion } from 'framer-motion';

export function ProgressRing({ value, size = 80, strokeWidth = 6 }) {
  const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

    const gradientId = `gradient-${value}`;
    const maskId = `mask-${value}`;
    
    return (
        <div className="relative" style={{ width: size, height: size }}>
      <svg width={0} height={0}>
          <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8860D0" />
            <stop offset="100%" stopColor="#6b4da6" />
            </linearGradient>
              <mask id={maskId}>
                <circle
                    cx={size / 2}
                  cy={size / 2}
                  r={radius}
              stroke="white"
                strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          </mask>
        </defs>
      </svg>

      <svg width={size} height={size} className="absolute">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-gray-100"
        />
      </svg>

      <svg width={size} height={size} className="absolute">
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{
            duration: 1.5,
              ease: "easeInOut",
            delay: 0.2
          }}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fill="none"
          mask={`url(#${maskId})`}
          className="opacity-30 blur-[4px]"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>

   <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          borderRadius: '50%',
          mask: `url(#${maskId})`,
          WebkitMask: `url(#${maskId})`,
        }}
      />
    </div>
    );
  }