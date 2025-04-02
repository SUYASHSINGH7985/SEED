import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InternshipForm from './InternshipForm'; // Import InternshipForm component
import TopHeadlinesSection from './TopHeadlinesSection'; // Import TopHeadlinesSection component
import OverviewSectio from './OverviewSectio'; // Import OverviewSectio component

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

      {/* Header Section */}
      <div className="mb-8 p-4">
        <div className="mb-4 flex flex-col">
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
      </div>

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

      {/* Render OverviewSectio if "overview" section is selected */}
      {activeSection === 'overview' && <OverviewSectio />}
      
      {/* Render InternshipForm if "internship" section is selected */}
      {activeSection === 'internship' && <InternshipForm />}
      
      {/* Render News section if "news" section is selected */}
      {activeSection === 'news' && <TopHeadlinesSection />}
    </div>
  );
}

export default StockDetail;
