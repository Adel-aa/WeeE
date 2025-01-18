import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Page from './components/layout/Page';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

export default function App() {
  const [activeRole, setActiveRole] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const handleRoleChange = (role, department) => {
    setActiveRole(role === activeRole && !department ? null : role);
    setSelectedDepartment(department);
  };

  return (
    <div className={`min-h-screen ${
      darkMode 
        ? 'bg-[#151521] text-white' 
        : 'bg-gray-50 text-gray-900'
    } transition-colors duration-300`}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`w-16 h-16 rounded-full border-4 border-t-transparent ${
                darkMode 
                  ? 'border-purple-400' 
                  : 'border-[#8860D0]'
              }`}
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="pt-16">
              <Page
                activeRole={activeRole}
                selectedDepartment={selectedDepartment}
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                onRoleChange={handleRoleChange}
                darkMode={darkMode}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}