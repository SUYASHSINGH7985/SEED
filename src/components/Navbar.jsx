import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <nav className="bg-black text-white p-4 relative z-50"> {/* Ensures Navbar is on top */}
      <div className="flex justify-between items-center pl-4 pr-8 w-full">
        {/* Logo with Font and Hover Effect */}
        <button
          onClick={() => navigate("/")}
          className="text-3xl font-bold hover:scale-110 transition-transform duration-200 cursor-pointer"
          style={{ fontFamily: "Boldonse" }}
        >
          SEED
        </button>

        {/* Navigation Buttons */}
        <div className="space-x-4 flex">
          <button
            onClick={() => navigate("/signin")}
            className="bg-transparent text-white border border-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-200"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-[#5200D5] text-white px-4 py-2 rounded-md hover:bg-purple-800 transition duration-200"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
