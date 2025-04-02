import React, { useState, useEffect, useRef } from "react";

const SecondSection = () => {
  const [position, setPosition] = useState({ x: "50%", y: "50%" });
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setPosition({
          x: `${e.clientX - rect.left}px`,
          y: `${e.clientY - rect.top}px`,
        });
      }
    };

    const section = sectionRef.current;
    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 text-center bg-black text-white min-h-screen overflow-hidden cursor-none font-[Montserrat]"
    >
      {/* Flashlight effect - reveals only where the cursor moves */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "black",
          mask: `radial-gradient(circle 250px at ${position.x} ${position.y}, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)`,
          WebkitMask: `radial-gradient(circle 250px at ${position.x} ${position.y}, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)`,
          transition: "mask 0.1s ease-out, -webkit-mask 0.1s ease-out",
        }}
      >
        {/* Content inside flashlight */}
        <div className="relative flex justify-center gap-16 h-full items-center mt-[-80px]">
          <div className="group relative w-60 h-80 bg-gray-900 rounded-lg flex items-center justify-center text-xl font-semibold shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-110">
            <span className="group-hover:text-purple-400 transition-colors duration-300">
              DELINA JEWELLERS
            </span>
          </div>

          <div className="group relative w-60 h-80 bg-gray-900 rounded-lg flex items-center justify-center text-xl font-semibold shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-110">
            <span className="group-hover:text-blue-400 transition-colors duration-300">
              DARWIN INC
            </span>
          </div>
        </div>
      </div>

      {/* Tagline (always visible) */}
      <h2 className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-4xl font-semibold text-gray-300 z-50 leading-tight tracking-wide">
        Yeah! The Only Ones <br />
        <span className="text-5xl font-light italic text-white block">
          You Love.
        </span>
      </h2>
    </section>
  );
};

export default SecondSection;
