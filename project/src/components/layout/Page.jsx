import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import Body from './Body';
import RightSidebar from './RightSidebar';

export default function Page({ activeRole, selectedDepartment, isExpanded, setIsExpanded, onRoleChange, darkMode }) {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  React.useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <motion.div 
      className="flex min-h-[calc(100vh-4rem)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Sidebar with enhanced animation */}
      <motion.div 
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-[250px] ${
          darkMode 
            ? 'bg-[#1E1E2D] border-r border-gray-800/50' 
            : 'bg-[#f4f4f4] border-r border-gray-200/50'
        } transition-colors duration-300 z-20`}
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <Sidebar darkMode={darkMode} />
      </motion.div>

      {/* Main Content with smooth transitions */}
      <motion.div 
        className={`flex-1 ml-[250px] transition-all duration-300 ${
          isExpanded ? 'mr-[280px]' : 'mr-[60px]'
        } p-8 overflow-x-hidden ${
          darkMode ? 'bg-[#151521]' : 'bg-gray-50'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <AnimatePresence mode="wait">
          <Body 
            key={`${activeRole}-${selectedDepartment}`}
            activeRole={activeRole} 
            selectedDepartment={selectedDepartment}
            darkMode={darkMode}
          />
        </AnimatePresence>
      </motion.div>

      {/* Right Sidebar with improved animations */}
      <motion.div
        initial={{ x: 280 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <RightSidebar 
          onRoleChange={onRoleChange}
          activeRole={activeRole}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          darkMode={darkMode}
        />
      </motion.div>

      {/* Page transition overlay */}
      <AnimatePresence>
        {!isPageLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed inset-0 z-50 ${
              darkMode ? 'bg-[#151521]' : 'bg-white'
            }`}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}