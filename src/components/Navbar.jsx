const Navbar = () => {
    return (
      <nav className="bg-black text-white p-4">
        <div className="flex justify-between items-center pl-4 pr-8 w-full">
          {/* Static Logo with Hover Effect */}
          <a href="#" className="text-3xl font-bold hover:scale-110 transition-transform duration-200" style={{ fontFamily: "Boldonse" }}>
            SEED
          </a>
  
          {/* Navigation Links (With Font Applied) */}
          <div className="space-x-20 flex">
            <div className="hover:scale-110 transition-transform duration-200">
              <a href="#about" className="hover:text-gray-500 text-xl" style={{ fontFamily: "Boldonse" }}>
                About Us
              </a>
            </div>
  
            <div className="hover:scale-110 transition-transform duration-200">
              <a href="#projects" className="hover:text-gray-500 text-xl" style={{ fontFamily: "Boldonse" }}>
                Our Projects
              </a>
            </div>
            
            <div className="hover:scale-110 transition-transform duration-200">
              <a href="#motive" className="hover:text-gray-500 text-xl" style={{ fontFamily: "Boldonse" }}>
                Our Motive
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;

  
