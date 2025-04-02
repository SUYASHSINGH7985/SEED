import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    // Dynamically add the Spline Viewer script
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative flex items-center justify-center h-screen text-white">
      {/* 3D Earth Model as Background */}
      <div className="absolute inset-0 z-0">
        <spline-viewer
          url="https://prod.spline.design/a9H7Dp5LmvbOE106/scene.splinecode"
          style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, transform: "scale(1.5)",

          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold">
        Invest And Get Your Startup Funded,
        Across The Globe.
        </h1>
        <p className="text-lg mt-4 text-gray-300">
          Unlock funding and connect with investors across the globe.
        </p>

       
      </div>
    </section>
  );
};

export default HeroSection;
