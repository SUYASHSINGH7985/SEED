import React from 'react';
import { motion } from 'framer-motion';

function TopByMarketCapSection() {
  const companies = [
    { name: "X", cap: "1000 Cr", growth: "20%" },
    { name: "Y", cap: "2000 Cr", growth: "30%" },
    { name: "Z", cap: "1500 Cr", growth: "25%" },
  ];

  return (
    <motion.section
      className="bg-black rounded-lg shadow-sm p-8 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-semibold text-white mb-6">Top by Market Cap</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-700 text-purple-300">
              <th className="p-4 border border-gray-600">Company</th>
              <th className="p-4 border border-gray-600">Market Cap</th>
              <th className="p-4 border border-gray-600">Growth in 3Y</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <motion.tr
                key={company.name}
                className="border border-gray-700 hover:bg-gray-600 transition-all duration-300 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <td className="p-4 border border-gray-600">{company.name}</td>
                <td className="p-4 border border-gray-600">{company.cap}</td>
                <td className="p-4 border border-gray-600 text-green-400">{company.growth}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}

export default TopByMarketCapSection;