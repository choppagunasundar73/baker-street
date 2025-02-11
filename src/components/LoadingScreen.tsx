import React from 'react';
import { Cake, Coffee, Croissant, Cookie } from 'lucide-react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const icons = [
    { icon: Cake, delay: 0 },
    { icon: Coffee, delay: 0.2 },
    { icon: Croissant, delay: 0.4 },
    { icon: Cookie, delay: 0.6 }
  ];

  return (
    <div className="fixed inset-0 bg-[#FFF8E7] flex flex-col items-center justify-center z-50">
      <div className="flex space-x-4 mb-8">
        {icons.map(({ icon: Icon, delay }, index) => (
          <motion.div
            key={index}
            initial={{ y: 0 }}
            animate={{ 
              y: [-10, 0, -10],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 2,
              delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-8 h-8 text-[#8B4513]" />
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-2xl font-heading text-[#8B4513] mb-2">Baker Street</h2>
        <div className="flex items-center justify-center space-x-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-[#8B4513]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 0.2
            }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-[#8B4513]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 0.2,
              delay: 0.2
            }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-[#8B4513]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 0.2,
              delay: 0.4
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen; 