import React, { useState } from "react";
import Informed from "../../components/Informed";

const Author = () => {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    if (search.trim()) {
      console.log("Searching for:", search);
      // Add your actual search logic here
    }
  };
  return (
    <div className="relative h-full">
      <div className="bg-(--Blumine) h-78">
        <img
          src="/images/allarticleimg.svg"
          alt=""
          className="absolute top-14"
        />
      </div>

      <div className="relative -top-60 m-auto lg:w-5xl bg-(--primary-color)  p-6 rounded-md">
        <div className="flex flex-col justify-between md:py-10 py-8 gap-8 md:px-20">
          <div>
            <img src="/images/magazine-img.svg" alt="" />
          </div>
          <h2 className="md:text-5xl text-3xl font-bold mb-4">Authors</h2>
          <div className="flex flex-1 items-center shadow-lg border border-(--Nevada) rounded-md pl-3">
            <input
              type="text"
              placeholder="Search for Authors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-2 outline-none "
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
              className=" px-4 py-2 bg-(--Blumine) rounded-r-md h-full"
            >
              <i class="fa-solid fa-magnifying-glass text-(--primary-color)"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src="/images/callforarticle-img.svg" alt="" className="w-full" />
        <Informed />
      </div>
    </div>
  );
};

export default Author;
