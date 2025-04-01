import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <>
      <div className="text-6xl font-bold text-white mb-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hello,
        </motion.div>
      </div>
      <motion.div
        className="text-6xl font-bold text-purple-500 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Purple.
      </motion.div>
    </>
  );
}

export default Header;