import React from "react";

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search for games..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full sm:w-96 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
    />
  );
}

export default SearchBar;
