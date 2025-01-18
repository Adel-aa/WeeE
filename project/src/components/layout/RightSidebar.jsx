import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Crown,
  Layers,
  UserRoundCheckIcon,
} from 'lucide-react';

const departments = {
  Manager: ['Technical', 'Sales', 'Reapers'],
  Supervisor: ['Technical Manager', 'Sales Manager', 'Reapers Manager'],
    'Team Leaders': ['Technical', 'Sales', 'Reapers'],
};

const lobs = {
        LOB: ['Technical', 'Reapers', 'Sales'],
  };
  
const CommandItem = ({
    icon: Icon,
  label,
  isActive,
  onClick,
  isExpanded,
  selectedDepartment,
  onDepartmentSelect,
  setCardsPosition,
}) => {
  const [selectedLob, setSelectedLob] = useState(null);
  const isTeamLeader = label === 'Team Leaders';
  const showLobs = isTeamLeader && selectedDepartment && lobs[selectedDepartment];

  return (
    <div className="relative">
      <motion.button
        whileHover={{
          scale: 1.05,
          backgroundColor: isActive ? 'rgba(136, 96, 208, 0.9)' : 'rgba(255, 255, 255, 0.1)',
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          onClick();
          if (setCardsPosition) {
            setCardsPosition(true); // Ensure the function exists before calling
          }
        }}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
          isActive
            ? 'bg-gradient-to-r from-[#8860D0] to-[#6b4da6] text-white shadow-lg'
            : 'text-white/70 hover:text-white'
        }`}
      >
        <div className={`relative ${isActive ? 'animate-pulse' : ''}`}>
          <div className="absolute inset-0 bg-white/20 rounded-full blur-md" />
          <Icon size={24} className={`relative z-10 ${isActive ? 'text-white' : 'text-white/70'}`} />
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="font-medium whitespace-nowrap"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {isActive && isExpanded && departments[label] && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="ml-8 mt-2 space-y-1"
        >
          {departments[label].map((dept) => (
            <div key={dept}>
              <motion.button
                onClick={() => {
                  onDepartmentSelect(dept);
                  if (isTeamLeader) {
                    setSelectedLob(null);
                  }
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                  selectedDepartment === dept
                    ? 'bg-white/20 text-white font-medium'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {dept}
              </motion.button>

              {isTeamLeader && selectedDepartment === dept && showLobs && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-4 mt-1 space-y-1"
                >
                  {lobs[dept].map((lob) => (
                    <motion.button
                      key={lob}
                      onClick={() => {
                        setSelectedLob(lob);
                        onDepartmentSelect(dept, lob);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left px-4 py-1.5 rounded-lg text-xs transition-all duration-200 ${
                        selectedLob === lob
                          ? 'bg-white/30 text-white font-medium'
                          : 'text-white/50 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {lob}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default function RightSidebar({ onRoleChange, activeRole }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [cardsPosition, setCardsPosition] = useState(false); // Added state

  const commands = [
    { id: 'manager', label: 'Manager', icon: Crown },
    { id: 'supervisor', label: 'Supervisor', icon: Layers },
    { id: 'teamLeaders', label: 'Team Leaders', icon: Users },
    { id: 'agents', label: 'Agents', icon: UserRoundCheckIcon },
  ];

  const handleDepartmentSelect = (department, lob) => {
    setSelectedDepartment(department);
    onRoleChange(activeRole, department, lob);
  };

  const handleRoleClick = (roleId) => {
    if (activeRole === roleId) {
      setSelectedDepartment(null);
    }
    onRoleChange(roleId, null);
  };

  return (
    <motion.div
      initial={{ width: '60px' }}
      animate={{
        width: isExpanded ? '280px' : '60px',
        transition: { duration: 0.3, ease: 'easeInOut' },
      }}
      className="fixed top-16 right-0 h-[calc(100vh-4rem)] bg-gradient-to-b from-[#41377c] to-[#41377c] border-l border-gray-800/50 overflow-hidden shadow-xl z-50"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <nav className="px-3 space-y-2">
        {commands.map((command) => (
          <CommandItem
            key={command.id}
            icon={command.icon}
            label={command.label}
            isActive={activeRole === command.id}
            onClick={() => handleRoleClick(command.id)}
            isExpanded={isExpanded}
            selectedDepartment={selectedDepartment}
            onDepartmentSelect={handleDepartmentSelect}
            setCardsPosition={setCardsPosition} // Pass function here
          />
        ))}
      </nav>
    </motion.div>
  );
}
