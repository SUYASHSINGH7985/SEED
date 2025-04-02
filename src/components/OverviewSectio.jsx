// File: OverviewSectio.js
import React from 'react';
import { motion } from 'framer-motion';

function OverviewSectio({ growth1Y = "12%" }) {
  return (
    <motion.div
      className="bg-[#2A2F31] rounded-lg p-6 mb-8 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-white">Overview:</h2>
      <p className="text-lg text-white">
        Growth in 1Y: <span className="text-green-400">{growth1Y}</span>
      </p>
    </motion.div>
  );
}

export default OverviewSectio;