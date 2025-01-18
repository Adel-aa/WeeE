import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MetricIcon from './MetricIcon';
import MetricValue from './MetricValue';
import MetricTrend from './MetricTrend';
import MetricModal from './MetricModal';
import { ChevronRight, Info } from 'lucide-react';

export default function MetricCard({ title, value, icon: Icon, timeframe, trend, reportsTo, BelongTo, darkMode }) {
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowTooltip(false);
        }}
        whileHover={{ 
          y: -8,
          transition: { type: "spring", stiffness: 300, damping: 17 }
        }}
        className="h-[320px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div 
          className={`relative h-full ${
            darkMode 
              ? 'bg-[#1E1E2D] text-white' 
              : 'bg-white text-gray-800'
          } backdrop-blur-sm rounded-2xl overflow-hidden border ${
            darkMode ? 'border-gray-800/50' : 'border-gray-100'
          }`}
          animate={{
            boxShadow: isHovered 
              ? darkMode 
                ? '0 20px 40px -15px rgba(0,0,0,0.3)' 
                : '0 20px 40px -15px rgba(136, 96, 208, 0.25)'
              : '0 4px 6px -1px rgba(0,0,0,0.1)'
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated gradient background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#8860D0]/5 via-transparent to-transparent"
            animate={{
              opacity: isHovered ? 0.2 : 0.1,
              backgroundPosition: isHovered ? '100% 100%' : '0% 0%',
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Main content */}
          <div className="relative h-full p-6 flex flex-col">
            {/* Header with info tooltip */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <motion.h3 
                  className={`text-lg font-medium ${
                    darkMode ? 'text-gray-100' : 'text-gray-700'
                  }`}
                  animate={{ 
                    scale: isHovered ? 1.02 : 1,
                    x: isHovered ? 4 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {title}
                </motion.h3>
                <div className="relative">
                  <motion.button
                    className={`p-1 rounded-full ${
                      darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                    } transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  >
                    <Info size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                  </motion.button>
                  <AnimatePresence>
                    {showTooltip && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 max-w-[260px] w-auto p-4 text-base rounded-lg shadow-lg z-10 ${
                          darkMode
                            ? 'bg-gray-800 text-gray-200'
                            : 'bg-white text-gray-600'
                        }`}
                      >
                        <div className="text-center">
                          <p className="font-semibold mb-2 text-lg">Performance Metric</p>
                          <p className="leading-relaxed">Click "View Details" for detailed analytics, trends, and performance data.</p>
                        </div>
                        <div
                          className={`absolute left-1/2 -bottom-1 w-2 h-2 -translate-x-1/2 rotate-45 ${
                            darkMode ? 'bg-gray-800' : 'bg-white'
                          }`}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <MetricIcon Icon={Icon} isHovered={isHovered} darkMode={darkMode} />
            </div>

            {/* Value with interactive animation */}
            <div className="flex-1 flex items-center justify-center">
              <MetricValue value={value} isHovered={isHovered} darkMode={darkMode} />
            </div>

            {/* Reports To Section with hover effect */}
            {BelongTo && (
              <motion.div 
                className="mb-4"
                animate={{
                  y: isHovered ? -2 : 0,
                }}
              >
                <motion.div 
                  className={`px-3 py-2 rounded-xl ${
                    darkMode 
                      ? 'bg-[#2A2A3F] border-gray-700/50' 
                      : 'bg-purple-50 border-purple-100/50'
                  } border`}
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className={`font-medium ${
                      darkMode ? 'text-purple-300' : 'text-purple-700'
                    }`}>Belong to:</span>
                    <span className="ml-2">{BelongTo}</span>
                  </p>
                </motion.div>
              </motion.div>
            )}

            {/* Footer with enhanced interactivity */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <motion.span 
                  className={`text-sm font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                  animate={{
                    x: isHovered ? 4 : 0,
                    opacity: isHovered ? 0.9 : 0.7
                  }}
                >
                  {timeframe}
                </motion.span>
                <MetricTrend trend={trend} isHovered={isHovered} darkMode={darkMode} />
              </div>

              {/* Enhanced View Details Button */}
              <motion.button
                onClick={() => setShowDetails(true)}
                className={`w-full group flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl relative overflow-hidden ${
                  darkMode 
                    ? 'bg-[#2A2A3F] text-white hover:bg-[#32324A]' 
                    : 'bg-gradient-to-r from-[#8860D0] to-[#6b4da6] text-white'
                } transition-all duration-300`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  y: isHovered ? -2 : 0,
                  boxShadow: isHovered 
                    ? darkMode 
                      ? '0 4px 12px rgba(0,0,0,0.2)' 
                      : '0 4px 12px rgba(136, 96, 208, 0.2)'
                    : 'none'
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-45"
                  animate={{
                    x: isHovered ? ['100%', '-100%'] : '100%',
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.span 
                  className="relative z-10"
                  animate={{
                    x: isHovered ? 4 : 0
                  }}
                >
                  View Details
                </motion.span>
                <ChevronRight size={16} className="relative z-10" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <MetricModal
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        title={title}
        value={value}
        timeframe={timeframe}
        trend={trend}
        reportsTo={reportsTo}
        BelongTo={BelongTo}
        darkMode={darkMode}
      />
    </>
  );
}
