import React from 'react';
import HeroSection from './HeroSection';
import SecondSection from './SecondSection';
import AISection from './AISection';
import InvestmentSection from './InvestmentSection';
import WorkWithPeopleSection from './WorkWithPeopleSection';
import FooterSection from './FooterSection';

const Homepage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <HeroSection />
      <SecondSection />
      <AISection />
      <InvestmentSection />
      <WorkWithPeopleSection />
      <FooterSection />
    </div>
  );
};

export default Homepage;
