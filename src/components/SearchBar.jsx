"use client";

import { useEffect, useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  // 🔥 debounce logic
  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch(query);
    }, 500);

    return () => clearTimeout(delay);
  }, [query, onSearch]);

  return (
    <div className="mt-4 mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
  w-full md:w-80
  px-4 py-2.5
  border border-gray-300
  rounded-xl
  text-sm text-gray-700
  bg-white
  focus:outline-none
  focus:ring-2 focus:ring-blue-500
"
      />
    </div>
  );
}
