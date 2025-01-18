import { motion } from 'framer-motion';

export default function MetricIcon({ Icon, isHovered, darkMode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      animate={{ 
        rotate: isHovered ? [0, -10, 10, -5, 0] : 0,
        scale: isHovered ? 1.1 : 1
      }}
      transition={{ 
        rotate: { duration: 0.5, ease: "easeInOut" },
        scale: { duration: 0.2 }
      }}
      className="relative group"
      >
      <motion.div 
        className={`absolute inset-0 rounded-xl blur-lg ${
          darkMode ? 'bg-white/10' : 'bg-[#8860D0]/20'
        }`}
        animate={{ 
          scale: isHovered ? 1.4 : 1,
          opacity: isHovered ? 0.4 : 0.2
        }}
      />
      <motion.div 
        className={`relative p-2.5 rounded-xl ${
          darkMode 
            ? 'bg-[#2A2A3F] border-gray-700/50' 
            : 'bg-purple-50 border-purple-100/50'
        } border backdrop-blur-sm`}
        animate={{
          y: isHovered ? -2 : 0,
          boxShadow: isHovered 
            ? darkMode 
              ? '0 8px 16px rgba(0,0,0,0.2)' 
              : '0 8px 16px rgba(136, 96, 208, 0.2)'
            : 'none'
        }}
      >
        <Icon className={`w-7 h-7 ${
          darkMode ? 'text-white' : 'text-[#8860D0]'
        } transition-colors duration-300`} />
      </motion.div>
    </motion.div>
  );
}
