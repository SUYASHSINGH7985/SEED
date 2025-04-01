import React from 'react';
import { motion } from 'framer-motion';

function MostInvestedSection({ companies, onCompanyClick }) {
  return (
    <motion.section
      className="mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-semibold text-white mb-6">Most Invested on Seed</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <motion.div
            key={company.id}
            className="bg-black rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 ease-in-out text-center shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: company.id * 0.1 }}
            onClick={() => onCompanyClick(company)}
          >
            <div className="w-16 h-16 bg-gray-600 mx-auto mb-3 rounded-full"></div>
            <span className="block font-medium text-lg">{company.name}</span>
            <span className="text-purple-400">{company.raisedFunding}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default MostInvestedSection;