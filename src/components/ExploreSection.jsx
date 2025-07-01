import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MostInvestedSection from "./MostInvestedSection";
import StartupsInNewsSection from "./StartupsInNewsSection";
import TopSectorsSection from "./TopSectorsSection";
import TopByMarketCapSection from "./TopByMarketCapSection";
import StockDetail from "./StockDetail";

function ExploreSection() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [mostInvestedCompanies, setMostInvestedCompanies] = useState([]);
  const [startupsInNews, setStartupsInNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch companies from backend
  useEffect(() => {
    fetch("http://127.0.0.1:5002/get_companies", {
      credentials: "include", // Allow backend authentication (if needed)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMostInvestedCompanies(data.slice(0, 3)); // First 3 companies
        setStartupsInNews(data.slice(3, 5)); // Next 2 companies
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching companies:", err);
        setError("Failed to load companies.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-xl">
        {error}
      </div>
    );
  }

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
    <div className="px-6 py-4">
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
