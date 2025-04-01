import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MostInvestedSection from './MostInvestedSection';
import StartupsInNewsSection from './StartupsInNewsSection';
import TopSectorsSection from './TopSectorsSection';
import TopByMarketCapSection from './TopByMarketCapSection';
import StockDetail from './StockDetail';

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
      <MostInvestedSection companies={mostInvestedCompanies} onCompanyClick={setSelectedCompany} />
      <div className="h-px bg-gray-700 my-8"></div>
      <StartupsInNewsSection startups={startupsInNews} onStartupClick={setSelectedCompany} />
      <div className="h-px bg-gray-700 my-8"></div>
      <TopSectorsSection />
      <div className="h-px bg-gray-700 my-8"></div>
      <TopByMarketCapSection />
    </div>
  );
}

export default ExploreSection;