import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { formatDate } from "../../utils";
import Informed from "../../components/Informed";

const getCategoryStyles = (category) => {
  const styles = {
    FEATURES: {
      color: "text-(--Blumine)",
      image: "/images/magazine-img.svg",
    },
    CLASSROOM: {
      color: "text-(--Victoria)",
      image: "/images/classroom-img.svg",
    },
    "THE JOY OF MATHEMATICS": {
      color: "text-(--Parsley)",
      image: "/images/tjom-img.svg",
    },
    REVIEWS: {
      color: "text-(--BrownRust)",
      image: "/images/review-img.svg",
    },
  };

  return (
    styles[category] || {
      color: "text-(--Blumine)",
      image: "/images/magazine-img.svg",
    }
  );
};

const Search = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get("q") || "";

  const handleSearch = () => {
    getAllPosts(search);
  };

  const handleClearAll = () => {
    setSearch("");
    setSelectedCategories([]);
  };

  useEffect(() => {
    getAllPosts(searchParam);
    setSearch(searchParam);
  }, []);
  console.log(`${
          import.meta.env.VITE_REACT_APP_API_ROOT
        }/posts?_embed&search=${searchParam}`)

  const getAllPosts = async (value) => {
    try {
      const postsRes = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_API_ROOT
        }/posts?_embed&search=${value}`
      );
      console.log(postsRes.data);
      const grouped = {};
      postsRes.data.forEach((post) => {
        const category =
          post._embedded["wp:term"]?.[0]?.[0]?.name || "Uncategorized";

        if (!grouped[category]) {
          grouped[category] = [];
        }

        grouped[category].push(post);
      });

      setPosts(grouped);
      console.log(grouped);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="relative h-full">
      <div className="bg-(--Blumine) h-78 relative">
        <img
          src="/images/allarticleimg.svg"
          alt=""
          className="absolute top-14"
        />
      </div>
      <div className="relative -top-60 m-auto lg:w-5xl bg-(--primary-color) p-6 rounded-md">
        <div className="flex flex-col justify-between pt-20 gap-1">
          <div>
            <img src="/images/magazine-img.svg" alt="" />
          </div>
          <h3 className="text-5xl font-bold mb-4">Search <span className="font-normal">"{search}"</span></h3>

          <div className="flex flex-col lg:flex-row gap-4 h-12">
            <div className="flex flex-1 items-center shadow-lg border border-(--Nevada)  rounded-md pl-3">
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

            {(search || selectedCategories.length > 0) && (
              <button
                onClick={handleClearAll}
                className="ml-4 text-(--Denim) hover:underline"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        {Object.entries(posts).map(([section, cards]) => (
          <div key={section} className="mt-6">
            <div className="py-6">
              <img
                src={getCategoryStyles(section).image}
                alt=""
                className="mb-1"
              />
              <h3
                className={`text-xl font-semibold ${
                  getCategoryStyles(section).color
                }`}
              >
                {section}
              </h3>
            </div>

            <div>
              {cards.map((item, index) => (
                <div key={index}>
                  <div className="flex gap-4 items-center">
                    <img
                      src={
                        item._embedded?.["wp:featuredmedia"]?.[0]?.source_url
                      }
                      alt={item.title.rendered}
                      className="w-44 h-28 object-cover "
                    />
                    <div>
                      <h3 className="font-semibold text-lg">
                        {item.title.rendered}
                      </h3>
                      <p className="text-sm text-(--Emperor)">
                        by <span>{item.acf?.author_name}</span> •{" "}
                        {formatDate(item.date)}
                      </p>
                    </div>
                  </div>

                  {index !== cards.length - 1 && (
                    <div className="flex justify-center my-6">
                      <img src="/images/article-line.png" alt="" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <img src="/images/callforarticle-img.svg" alt="" className="w-full" />
        <Informed />
      </div>
    </div>
  );
};

export default Search;
