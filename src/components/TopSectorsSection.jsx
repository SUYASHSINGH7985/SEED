import React from 'react';
import { motion } from 'framer-motion';

function TopSectorsSection() {
  const sectors = ["Energy 99", "FMCG 38", "Banking 41", "Healthcare 135", "Automobile 145", "Tele-communication 84", "Media & Entertainment 105"];

  return (
    <motion.section
      className="bg-black rounded-lg shadow-sm p-8 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-semibold text-white mb-6">Top Sector</h2>
      <div className="flex flex-wrap gap-4 mt-6">
        {sectors.map((sector) => (
          <motion.span
            key={sector}
            className="px-6 py-3 bg-[#393939] rounded-full text-sm text-purple-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {sector}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}

export default TopSectorsSection;