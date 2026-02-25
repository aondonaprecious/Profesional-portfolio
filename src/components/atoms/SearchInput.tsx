/** @format */

// src/components/atoms/SearchInput.tsx
import React from "react";
import { FiSearch } from "react-icons/fi";

/**
 * ATOM: SearchInput
 * A reusable, styled input for filtering articles or projects.
 */
const SearchInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props,
) => (
  <div className="relative group w-full">
    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
    <input
      {...props}
      className="w-full bg-gray-900/50 border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-sm text-gray-300 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
      placeholder="Search articles..."
    />
  </div>
);

export default SearchInput;
