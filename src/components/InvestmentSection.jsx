import React, { useState, useEffect } from "react";

const InvestmentSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate a short delay for smoother appearance
    const timeout = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Full-Screen 3D Model */}
      {isLoaded && (
        <spline-viewer
          url="https://prod.spline.design/l6n1Pouex3BExMok/scene.splinecode"
          className="absolute inset-0 w-full h-full"
        ></spline-viewer>
      )}

      {/* Centered Text Overlay */}
      <h2 className="relative text-3xl md:text-5xl font-bold text-white text-center px-6 leading-tight z-10">
        FUEL YOUR STARTUP'S GROWTH <br /> WITH SMART INVESTMENTS
      </h2>
    </section>
  );
};

export default InvestmentSection;
  