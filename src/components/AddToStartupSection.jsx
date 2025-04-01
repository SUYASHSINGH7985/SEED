import React from 'react';

function AddToStartupSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-6">Add to Startup</h2>
      <form className="space-y-6">
        {/* Startup Name */}
        <div>
          <label className="block text-lg text-white">Name of Company</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="Enter startup name"
          />
        </div>

        {/* Sector */}
        <div>
          <label className="block text-lg text-white">Sector</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="Enter company sector"
          />
        </div>

        {/* Intro */}
        <div>
          <label className="block text-lg text-white">Intro (2 lines)</label>
          <textarea
            rows="3"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="2 lines about the company"
          />
        </div>

        {/* Financials Text */}
        <div>
          <label className="block text-lg text-white">Financials (Description)</label>
          <textarea
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="Company financial details"
          />
        </div>

        {/* Financials Numbers */}
        <div>
          <label className="block text-lg text-white">Financials (Numbers)</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="Valuation in the past months/yrs"
          />
        </div>

        {/* Fundamentals */}
        <div>
          <label className="block text-lg text-white">Fundamentals</label>
          <textarea
            rows="3"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="Fundamentals about the company"
          />
        </div>

        {/* Share Holding */}
        <div>
          <label className="block text-lg text-white">Share Holding</label>
          <textarea
            rows="3"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="Shareholders details"
          />
        </div>

        {/* Company Founding */}
        <div>
          <label className="block text-lg text-white">Company Founding</label>
          <textarea
            rows="3"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="Founding of the company"
          />
        </div>

        {/* Contact Information */}
        <div>
          <label className="block text-lg text-white">Contact Information</label>
          <textarea
            rows="3"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600"
            placeholder="Contact details"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-8 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-400 transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToStartupSection;