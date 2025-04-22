import React, { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {

    console.log("Searching for:", search);
  };

  return (
    <div className="flex flex-1 items-center shadow-lg border border-(--Nevada) rounded-md pl-3">
      <input
        type="text"
        placeholder="Search for..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full py-2 outline-none"
      />
      {search && (
        <button
          onClick={() => setSearch("")}
          className="text-(--black) px-2"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      )}
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-(--Blumine) rounded-r-md h-full"
      >
        <i className="fa-solid fa-magnifying-glass text-(--primary-color)"></i>
      </button>
    </div>
  );
};

export default SearchBar;
