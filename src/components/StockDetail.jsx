import React, { useState } from 'react';
import { motion } from 'framer-motion';

function StockDetail({ company, onBack }) {
  // Sample data for the stock detail page (replace with actual data or API in the future)
  const stockData = {
    name: company.name,
    investProgress: 50,
    amount: "XXX Cr",
    growth1Y: "12%",
    fundamentals: {
      marketCap: "XXX Cr",
      bookValue: "48.53",
      face: "1",
      roe: "23.88%",
    },
    financials: {
      labels: ["Dec '23", "Mar '24", "Jun '24"],
      revenue: [50, 60, 70],
      profit: [40, 50, 60],
      netWorth: [30, 40, 50],
    },
    about: {
      parentOrganisation: "Parent Org Name",
      managingDirector: "Director Name",
    },
    holdingPatterns: {
      promoters: "41.55%",
      foreignInst: "46.85%",
      retailers: "29.31%",
      otherDomestic: "13.89%",
    },
    similarStocks: [
      { name: "Company X", marketCap: "XXX Cr", growth3Y: "20%" },
      { name: "Company Y", marketCap: "XXX Cr", growth3Y: "20%" },
      { name: "Company Z", marketCap: "XXX Cr", growth3Y: "20%" },
      { name: "Company A", marketCap: "XXX Cr", growth3Y: "20%" },
    ],
  };

  // State to track the selected option ("Invest" or "Withdraw")
  const [selectedOption, setSelectedOption] = useState(null);
  // State to track the amount input by the user
  const [amount, setAmount] = useState('');

  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Handle amount input change
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="bg-[#000000] text-white font-sans">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="mb-1 px-10 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Back to Explore
      </motion.button>

     {/* Header Section - Simplified to match screenshot exactly */}
<div className="mb-8 p-4">
  {/* Name row */}
  <div className="mb-4">
    <span className="text-white mr-2">Name:</span>
    <button 
      className={`mr-2 ${selectedOption === 'Invest' ? 'text-[#923EFF]' : 'text-white'}`}
      onClick={() => handleOptionSelect('Invest')}
    >
      Invest
    </button>
    <button 
      className={`${selectedOption === 'Withdraw' ? 'text-[#923EFF]' : 'text-white'}`}
      onClick={() => handleOptionSelect('Withdraw')}
    >
      Withdraw
    </button>
  </div>

  {/* Amount row */}
  <div className="mb-4">
    <span className="text-white mr-2">Amount:</span>
    <input
      type="text"
      value={amount}
      onChange={handleAmountChange}
      placeholder="Enter amount"
      className="w-48 p-1 bg-gray-600 text-white rounded focus:outline-none"
    />
  </div>

  {/* BUY button */}
  <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
    BUY
  </button>
</div>

      {/* Overview Section */}
      <motion.div
        className="bg-[#000000] rounded-lg p-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4 ">Overview</h2>
        <h2 className="text-2xl font-semibold mb-4">Performance</h2>
        <p className="text-lg">
          Growth in <span className="text-[#923EFF]">1Y</span>: 
          <span className="text-[#923EFF]"> {stockData.growth1Y}</span>
        </p>
      </motion.div>

      {/* Fundamentals Section */}
      <motion.div
        className="bg-[#2A2F31] rounded-lg p-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Fundamentals</h2>
        <p className="text-lg mb-2">Market Cap: {stockData.fundamentals.marketCap}</p>
        <p className="text-lg mb-2">Book Value: {stockData.fundamentals.bookValue}</p>
        <p className="text-lg mb-2">FACE: {stockData.fundamentals.face}</p>
        <p className="text-lg">ROE: {stockData.fundamentals.roe}</p>
      </motion.div>

      {/* Financials Section */}
      <motion.div
        className="bg-[#2A2F31] rounded-lg p-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Financials</h2>
        <div className="flex justify-between">
          {stockData.financials.labels.map((label, index) => (
            <div key={label} className="text-center">
              <div className="flex flex-col items-center">
                <div
                  className="w-12 bg-[#6A5ACD] mb-2"
                  style={{ height: `${stockData.financials.revenue[index] * 2}px` }}
                ></div>
                <span className="text-sm">Revenue</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-12 bg-[#6A5ACD] mb-2"
                  style={{ height: `${stockData.financials.profit[index] * 2}px` }}
                ></div>
                <span className="text-sm">Profit</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-12 bg-[#6A5ACD] mb-2"
                  style={{ height: `${stockData.financials.netWorth[index] * 2}px` }}
                ></div>
                <span className="text-sm">Net worth</span>
              </div>
              <span className="block mt-4 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        className="bg-[#2A2F31] rounded-lg p-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">About: {stockData.name}</h2>
        <p className="text-lg mb-2">Parent Organisation: {stockData.about.parentOrganisation}</p>
        <p className="text-lg">Managing Director: {stockData.about.managingDirector}</p>
      </motion.div>

      {/* Holding Patterns Section */}
      <motion.div
        className="bg-[#2A2F31] rounded-lg p-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Holding Patterns</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="w-32 text-lg">Promoters</span>
            <div className="w-full bg-gray-700 h-4 rounded">
              <div className="bg-[#6A5ACD] h-4 rounded" style={{ width: stockData.holdingPatterns.promoters }}></div>
            </div>
            <span className="ml-4 text-lg">{stockData.holdingPatterns.promoters}</span>
          </div>
          <div className="flex items-center">
            <span className="w-32 text-lg">Foreign Inst</span>
            <div className="w-full bg-gray-700 h-4 rounded">
              <div className="bg-[#6A5ACD] h-4 rounded" style={{ width: stockData.holdingPatterns.foreignInst }}></div>
            </div>
            <span className="ml-4 text-lg">{stockData.holdingPatterns.foreignInst}</span>
          </div>
          <div className="flex items-center">
            <span className="w-32 text-lg">Retailers</span>
            <div className="w-full bg-gray-700 h-4 rounded">
              <div className="bg-[#6A5ACD] h-4 rounded" style={{ width: stockData.holdingPatterns.retailers }}></div>
            </div>
            <span className="ml-4 text-lg">{stockData.holdingPatterns.retailers}</span>
          </div>
          <div className="flex items-center">
            <span className="w-32 text-lg">Other Domestic Institutions</span>
            <div className="w-full bg-gray-700 h-4 rounded">
              <div className="bg-[#6A5ACD] h-4 rounded" style={{ width: stockData.holdingPatterns.otherDomestic }}></div>
            </div>
            <span className="ml-4 text-lg">{stockData.holdingPatterns.otherDomestic}</span>
          </div>
        </div>
      </motion.div>

      {/* Similar Stocks Section */}
      <motion.div
        className="bg-[#2A2F31] rounded-lg p-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Similar stocks</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="p-4 border border-gray-600">Company</th>
                <th className="p-4 border border-gray-600">Market Cap</th>
                <th className="p-4 border border-gray-600">Growth in 3Y</th>
              </tr>
            </thead>
            <tbody>
              {stockData.similarStocks.map((stock) => (
                <motion.tr
                  key={stock.name}
                  className="border border-gray-700 hover:bg-gray-600 transition-all duration-300 ease-in-out"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <td className="p-4 border border-gray-600">{stock.name}</td>
                  <td className="p-4 border border-gray-600">{stock.marketCap}</td>
                  <td className="p-4 border border-gray-600">{stock.growth3Y}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <span className="mx-2 text-white">{'<'}</span>
          <span className="mx-2 text-white">1</span>
          <span className="mx-2 text-white">2</span>
          <span className="mx-2 text-white">3</span>
          <span className="mx-2 text-white">...</span>
          <span className="mx-2 text-white">5</span>
          <span className="mx-2 text-white">{'>'}</span>
        </div>
      </motion.div>

      {/* Footer Navigation */}
      <motion.div
        className="flex justify-center gap-6 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <a href="#" className="text-white hover:underline">Contact us</a>
        <a href="#" className="text-white hover:underline">About us</a>
        <a href="#" className="text-white hover:underline">Home</a>
      </motion.div>
    </div>
  );
}

export default StockDetail;