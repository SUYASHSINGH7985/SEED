import React, { useState } from "react";
import { motion } from "framer-motion";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed right-20 top-20 flex flex-col items-end z-50">
      {/* Chatbot Logo (Click to Open) */}
      <motion.div
        className="bg-blue-600 p-3 rounded-full cursor-pointer shadow-lg"
        whileHover={{ scale: 1.1 }}
        onClick={toggleChatbot}
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/4712/4712036.png" 
          alt="Chatbot Logo" 
          className="w-16 h-16"
        />
      </motion.div>

      {/* Chatbot Box (Smooth Slide-In) */}
      <motion.div
  initial={{ x: 300, opacity: 0 }}
  animate={{ x: isOpen ? 0 : 300, opacity: isOpen ? 1 : 0 }}
  transition={{ type: "spring", stiffness: 120 }}
  className={`mt-2 w-100 h-[40vh] bg-gray-800 text-white rounded-lg shadow-lg flex flex-col overflow-hidden ${isOpen ? "block" : "hidden"}`}
>

        {/* Chatbot Header */}
        <div className="bg-blue-600 py-4 px-4 flex items-center justify-between rounded-t-lg">
          <h2 className="text-xl font-semibold">Chatbot</h2>
          <button onClick={toggleChatbot} className="text-white text-lg font-bold">
            ✕
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="p-2 my-1 rounded-lg bg-blue-500 text-left">
            Hello! How can I assist you today?
          </div>
        </div>

        {/* Input Field */}
        <div className="flex p-2 border-t border-gray-600">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 rounded-l bg-gray-700 text-white"
          />
          <button className="bg-blue-500 px-4 rounded-r">Send</button>
        </div>
      </motion.div>
    </div>
  );
};

export default Chatbot;
