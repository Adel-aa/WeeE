import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function MetricTrend({ trend, isHovered, darkMode }) {
  if (!trend) return null;

  const Icon = trend.isPositive ? TrendingUp : TrendingDown;
  const colorClass = trend.isPositive 
    ? darkMode 
      ? 'from-emerald-400/80 to-green-500/80' 
      : 'from-emerald-500 to-green-600'
    : darkMode 
      ? 'from-rose-400/80 to-red-500/80' 
      : 'from-rose-500 to-red-600';

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        y: isHovered ? -2 : 0,
        scale: isHovered ? 1.05 : 1
      }}
      className={`flex items-center gap-1 px-2.5 py-1 rounded-full 
        bg-gradient-to-r ${colorClass} text-white text-sm font-medium
        shadow-sm`}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        animate={{
          rotate: isHovered ? [0, -10, 10, -5, 0] : 0
        }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-3 h-3" />
      </motion.div>
      <span>{trend.value}%</span>
    </motion.div>
  );
}