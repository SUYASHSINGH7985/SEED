import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [currentTab, setCurrentTab] = useState("explore"); // Default to "Explore"

  return (
    <div className="min-h-screen bg-black p-8 font-sans text-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* "Hello, Purple" text */}
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

        {/* Navigation */}
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

function ExploreSection() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Sample data for companies (replace with actual data or API in the future)
  const mostInvestedCompanies = [
    { id: 1, name: "Seed", raisedFunding: "XXX Cr" },
    { id: 2, name: "Company X", raisedFunding: "200 Cr" },
    { id: 3, name: "Company Y", raisedFunding: "150 Cr" },
    { id: 4, name: "Company Z", raisedFunding: "100 Cr" },
    { id: 5, name: "Company A", raisedFunding: "80 Cr" },
    { id: 6, name: "Company B", raisedFunding: "50 Cr" },
  ];

  const startupsInNews = [
    { id: 7, name: "Startup A", raisedFunding: "300 Cr" },
    { id: 8, name: "Startup B", raisedFunding: "250 Cr" },
    { id: 9, name: "Startup C", raisedFunding: "200 Cr" },
  ];

  if (selectedCompany) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <StockDetail company={selectedCompany} onBack={() => setSelectedCompany(null)} />
      </motion.div>
    );
  }

  return (
    <div>
      {/* Most Invested on Seed */}
      <motion.section
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-6">Most Invested on Seed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mostInvestedCompanies.map((company) => (
            <motion.div
              key={company.id}
              className="bg-black rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 ease-in-out text-center shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: company.id * 0.1 }}
              onClick={() => setSelectedCompany(company)}
            >
              <div className="w-16 h-16 bg-gray-600 mx-auto mb-3 rounded-full"></div>
              <span className="block font-medium text-lg">{company.name}</span>
              <span className="text-purple-400">{company.raisedFunding}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="h-px bg-gray-700 my-8"></div>

      {/* Startups in News */}
      <motion.section
        className="mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-6">Startups in News</h2>
        <div className="flex justify-between items-center mb-1">
          <span></span>
          <a href="#" className="text-purple-400">See more</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {startupsInNews.map((startup) => (
            <motion.div
              key={startup.id}
              className="bg-black rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 ease-in-out text-center shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: startup.id * 0.1 }}
              onClick={() => setSelectedCompany(startup)}
            >
              <div className="w-16 h-16 bg-gray-600 mx-auto mb-3 rounded-full"></div>
              <span className="block font-medium text-lg">{startup.name}</span>
              <span className="text-purple-400">{startup.raisedFunding}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="h-px bg-gray-700 my-8"></div>

      {/* Top Sectors */}
      <motion.section
        className="bg-black rounded-lg shadow-sm p-8 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-6">Top Sectors</h2>
        <div className="flex flex-wrap gap-4 mt-6">
          {["Energy 99", "FMCG 38", "Banking 41", "Healthcare 135", "Automobile 145", "Tele-communication 84", "Media & Entertainment 105"].map((sector) => (
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

      <div className="h-px bg-gray-700 my-8"></div>

      {/* Top by Market Cap */}
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
              {[{ name: "X", cap: "1000 Cr", growth: "20%" }, { name: "Y", cap: "2000 Cr", growth: "30%" }, { name: "Z", cap: "1500 Cr", growth: "25%" }].map((company) => (
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
    </div>
  );
}

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

  return (
    <div className="bg-[#1C2526] text-white font-sans">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="mb-6 px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Back to Explore
      </motion.button>

      {/* Header Section */}
      <motion.div
        className="flex justify-between items-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center">
          <div className="w-12 h-12 bg-white mr-4 flex items-center justify-center text-black font-bold">
            X
          </div>
          <span className="text-2xl font-semibold">{stockData.name}</span>
        </div>
        <div className="text-right">
          <p className="text-lg mb-2">Name: {stockData.name}</p>
          <p className="text-lg mb-2">
            Invest: <progress value={stockData.investProgress} max="100" className="w-32"></progress>
          </p>
          <p className="text-lg mb-2">Amount: {stockData.amount}</p>
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300">
            BUY
          </button>
        </div>
      </motion.div>

      {/* Overview Section */}
      <motion.div
        className="bg-[#2A2F31] rounded-lg p-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Overview: Performance</h2>
        <p className="text-lg">
          Growth 1Y: <span className="text-green-400">{stockData.growth1Y}</span>
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

function AddToStartupSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-6">Add to Startup</h2>
      <form className="space-y-6">
        {/* Startup Name */}
        <div>
          <label className="block text-lg text-white">Name of Company</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="Enter startup name"
          />
        </div>

        {/* Sector */}
        <div>
          <label className="block text-lg text-white">Sector</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="Enter company sector"
          />
        </div>

        {/* Intro */}
        <div>
          <label className="block text-lg text-white">Intro (2 lines)</label>
          <textarea
            rows="3"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="2 lines about the company"
          />
        </div>

        {/* Financials Text */}
        <div>
          <label className="block text-lg text-white">Financials (Description)</label>
          <textarea
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="Company financial details"
          />
        </div>

        {/* Financials Numbers */}
        <div>
          <label className="block text-lg text-white">Financials (Numbers)</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="Valuation in the past months/yrs"
          />
        </div>

        {/* Fundamentals */}
        <div>
          <label className="block text-lg text-white">Fundamentals</label>
          <textarea
            rows="3"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="Fundamentals about the company"
          />
        </div>

        {/* Share Holding */}
        <div>
          <label className="block text-lg text-white">Share Holding</label>
          <textarea
            rows="3"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="Shareholders details"
          />
        </div>

        {/* Company Founding */}
        <div>
          <label className="block text-lg text-white">Company Founding</label>
          <textarea
            rows="3"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="Founding of the company"
          />
        </div>

        {/* Contact Information */}
        <div>
          <label className="block text-lg text-white">Contact Information</label>
          <textarea
            rows="3"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="Contact details"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-8 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-400 transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;