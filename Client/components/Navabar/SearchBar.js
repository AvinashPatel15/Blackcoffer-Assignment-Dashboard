import React from "react";
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  return (
    <div className="relative mx-auto text-gray-600">
      <input
        className="border bg-white h-8 px-5 pr-16 rounded-[5px] text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search..."
      />
      <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
        <GoSearch />
      </button>
    </div>
  );
};

export default SearchBar;
