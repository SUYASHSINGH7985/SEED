import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InternshipForm from './InternshipForm';
import TopHeadlinesSection from './TopHeadlinesSection';
import OverviewSectio from './OverviewSectio';
import Chatbot from './Chatbot'; // Import Chatbot

function StockDetail({ company, onBack }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [amount, setAmount] = useState('');
  const [activeSection, setActiveSection] = useState('overview');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSectionSwitch = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-[#000000] text-white font-sans relative">
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

      {/* Header Section */}
      <div className="mb-8 p-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-white mb-2">Name:</span>
          <div>
            <button
              className={`mr-1 px-4 py-2 ${selectedOption === 'Invest' ? 'text-[#923EFF] border-b-2 border-[#923EFF]' : 'text-white border-b-2 border-transparent'} hover:text-[#923EFF]`}
              onClick={() => handleOptionSelect('Invest')}
            >
              Invest
            </button>
            <button
              className={`mr-1 px-4 py-2 ${selectedOption === 'Withdraw' ? 'text-[#923EFF] border-b-2 border-[#923EFF]' : 'text-white border-b-2 border-transparent'} hover:text-[#923EFF]`}
              onClick={() => handleOptionSelect('Withdraw')}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>

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

      <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        BUY
      </button>

      <div className="flex justify-start mb-8 space-x-2">
        <button
          onClick={() => handleSectionSwitch('overview')}
          className={`px-6 py-2 text-lg font-semibold ${activeSection === 'overview' ? 'text-[#923EFF] border-b-2 border-[#923EFF]' : 'text-white border-b-2 border-transparent'} hover:text-[#923EFF]`}
        >
          Overview
        </button>
        <button
          onClick={() => handleSectionSwitch('news')}
          className={`px-6 py-2 text-lg font-semibold ${activeSection === 'news' ? 'text-[#923EFF] border-b-2 border-[#923EFF]' : 'text-white border-b-2 border-transparent'} hover:text-[#923EFF]`}
        >
          News
        </button>
        <button
          onClick={() => handleSectionSwitch('internship')}
          className={`px-6 py-2 text-lg font-semibold ${activeSection === 'internship' ? 'text-[#923EFF] border-b-2 border-[#923EFF]' : 'text-white border-b-2 border-transparent'} hover:text-[#923EFF]`}
        >
          Apply for Internship
        </button>
      </div>

      {/* Render Sections */}
      {activeSection === 'overview' && <OverviewSectio />}
      {activeSection === 'internship' && <InternshipForm />}
      {activeSection === 'news' && <TopHeadlinesSection />}

      {/* Chatbot is fixed to the right side and above half of the page */}
      <Chatbot />
    </div>
  );
}

export default StockDetail;
