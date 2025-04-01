import React from 'react';
import { motion } from 'framer-motion';

function Navigation({ currentTab, setCurrentTab }) {
  return (
    <div className="mb-8 flex gap-6">
      <motion.button
        onClick={() => setCurrentTab("explore")}
        className={`px-6 py-3 rounded-full text-lg transition-all duration-300 ${
          currentTab === "explore" ? "bg-purple-500 text-white" : "bg-transparent text-purple-500 hover:bg-purple-600 hover:text-white"
        }`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        Explore
      </motion.button>
      <motion.button
        onClick={() => setCurrentTab("add-startup")}
        className={`px-6 py-3 rounded-full text-lg transition-all duration-300 ${
          currentTab === "add-startup" ? "bg-purple-500 text-white" : "bg-transparent text-purple-500 hover:bg-purple-600 hover:text-white"
        }`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        Add Startup
      </motion.button>
    </div>
  );
}

export default Navigation;