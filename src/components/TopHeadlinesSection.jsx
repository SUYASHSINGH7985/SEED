import React from 'react';
import { motion } from 'framer-motion';

function TopHeadlinesSection({ companyName = "Seed" }) {
  // Sample data for headlines (replace with actual data or API in the future)
  const headlines = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ];

  return (
    <motion.div
      className="bg-[#1B1B1B] rounded-lg p-6 mb-8 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Top headlines related to <span className="text-green-400">{companyName}</span>
      </h2>
      <div className="space-y-4">
        {headlines.map((headline, index) => (
          <p key={index} className="text-lg text-white">
            {headline}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export default TopHeadlinesSection;