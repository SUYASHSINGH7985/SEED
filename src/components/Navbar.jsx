import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="flex justify-between items-center pl-4 pr-8 w-full">
        {/* Logo with Font and Hover Effect */}
        <Link
          to="/"
          className="text-3xl font-bold hover:scale-110 transition-transform duration-200 cursor-pointer"
          style={{ fontFamily: "Boldonse" }}
        >
          SEED
        </Link>

        {/* Navigation Links */}
        <div className="space-x-8 flex">
          <Link
            to="/signin"
            className="text-lg text-white hover:text-gray-400 hover:scale-110 transition-transform duration-200 cursor-pointer"
            style={{ fontFamily: "Boldonse" }} // Restored Font
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="text-lg text-[#5200D5] hover:text-gray-400 hover:scale-110 transition-transform duration-200 cursor-pointer"
            style={{ fontFamily: "Boldonse" }} // Kept Font
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
