import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ExploreSection from '../components/ExploreSection';
import AddToStartupSection from '../components/AddToStartupSection';

function Dashboard() {
  const [currentTab, setCurrentTab] = useState("explore"); // Default to "Explore"

  return (
    <div className="min-h-screen bg-black p-8 font-sans text-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Header />

        {/* Navigation */}
        <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />

        {/* Content Sections */}
        {currentTab === "explore" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ExploreSection />
          </motion.div>
        )}

        {currentTab === "add-startup" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <AddToStartupSection />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;