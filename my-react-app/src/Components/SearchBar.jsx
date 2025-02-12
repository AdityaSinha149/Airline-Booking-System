"use client";
import { useState, useEffect } from "react";

export default function SearchBar() {
  const [locations, setLocations] = useState([]);
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [filteredFrom, setFilteredFrom] = useState([]);
  const [filteredTo, setFilteredTo] = useState([]);

  useEffect(() => {
    fetch("/api/locations")
      .then((res) => res.json())
      .then((data) => setLocations(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setFilteredFrom(locations.filter((loc) => loc.toLowerCase().startsWith(fromInput.toLowerCase())));
  }, [fromInput, locations]);

  useEffect(() => {
    setFilteredTo(locations.filter((loc) => loc.toLowerCase().startsWith(toInput.toLowerCase())));
  }, [toInput, locations]);

  return (
    <div className="flex items-center bg-white shadow-md rounded-md overflow-hidden w-full max-w-5xl mx-auto border border-gray-300">
      {/* From Where */}
      <div className="relative flex-1 border-r border-gray-300 flex items-center px-4 py-3">
        <span className="text-gray-400 mr-2">✈️</span>
        <input
          type="text"
          placeholder="From where?"
          className="w-full bg-transparent outline-none"
        />
      </div>

      {/* Where To */}
      <div className="relative flex-1 border-r border-gray-300 flex items-center px-4 py-3">
        <span className="text-gray-400 mr-2">✈️</span>
        <input
          type="text"
          placeholder="Where to?"
          className="w-full bg-transparent outline-none"
        />
      </div>

      {/* Date Picker */}
      <div className="relative flex-1 border-r border-gray-300 flex items-center px-4 py-3">
        <span className="text-gray-400 mr-2">📅</span>
        <input
          type="date"
          className="w-full bg-transparent outline-none"
        />
      </div>

      {/* Passenger Count (No Right Border to Merge with Button) */}
      <div className="relative flex-1 flex items-center px-4 py-3">
        <span className="text-gray-400 mr-2">👤</span>
        <input
          type="text"
          placeholder="1 adult"
          className="w-full bg-transparent outline-none"
        />
      </div>

      {/* Search Button - Covers Right Border */}
      <button className="bg-[#605DEC] text-white px-6 py-3 rounded-md -ml-2">
        Search
      </button>
    </div>

  );
}
