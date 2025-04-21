import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import PostCard from "../../components/PostCard";

const AllArticles = () => {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const [articlesPosts, setArticlesPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  let { categoryId } = useParams();
  const [selectedCategories, setSelectedCategories] = useState([]); // instead of single category
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "";

  useEffect(() => {
    fetchArticlesData();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [search, selectedCategories]);

  const handleSearch = () => {
    // const params = new URLSearchParams();
    // if (search) params.set("search", search);
    // if (category) params.set("category", category);
    // if (selectedCategories.length) {
    //   params.set("categories", selectedCategories.join(","));
    // }
    // if (selectedTags.length) params.set("tags", selectedTags.join(","));

    // // navigate(`/articles?${params.toString()}`);
    // filterPosts();
  };

  // Fetch Articles posts and announcements data
  const fetchArticlesData = async () => {
    try {
      if (Number(categoryId) === 16) {
        console.log("Loading All Magazine posts...");

        const postRes = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_API_ROOT
          }/posts?_embed&&categories=16`
        );

        setArticlesPosts(postRes.data);
        setFilteredPosts(postRes.data);
        return;
      }

      const categoryRes = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_API_ROOT
        }/categories?parent=${categoryId}`
      );
      const childCategoryIds = categoryRes.data.map((cat) => cat.id);
      setCategories(categoryRes.data);

      if (childCategoryIds.length > 0) {
        const idsQuery = categoryParam
          ? categoryParam
          : childCategoryIds.join(",");
        const postRes = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_API_ROOT
          }/posts?_embed&&categories=${idsQuery}`
        );

        if (!categoryParam) {
          const filteredPosts = postRes.data.filter(
            (post) => !post.categories.includes(15)
          );
          setArticlesPosts(filteredPosts);
          setFilteredPosts(filteredPosts);
        } else {
          setArticlesPosts(postRes.data);
          setFilteredPosts(postRes.data);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterPosts = () => {
    let updated = [...articlesPosts];

    if (search) {
      updated = updated.filter((post) =>
        post.title.rendered.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      const selectedCatIds = categories
        .filter((cat) => selectedCategories.includes(cat.slug))
        .map((cat) => cat.id);

      updated = updated.filter((post) =>
        post.categories.some((catId) => selectedCatIds.includes(catId))
      );
    }

    setFilteredPosts(updated);
  };

  const handleClearAll = () => {
    setSearch("");
    setSelectedCategories([]);
    setSelectedTags([]);
    setFilteredPosts(articlesPosts);
  };

  const getCategoryName = () => {
    const selectedCat = categories.find((cat) => cat.slug === category);
    return selectedCat?.name || "";
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
      <div className=" relative -top-60 m-auto lg:w-5xl bg-(--primary-color) p-6 rounded-md">
        <div className="flex flex-col justify-between pt-20 gap-1">
          <div>
            <img src="/images/magazine-img.svg" alt="" />
          </div>
          <div className="text-base font-normal pt-2">
            Home /{" "}
            {categoryId == 5
              ? "Articles"
              : categoryId == 10
              ? "Resources"
              : categoryId == 16
              ? "Magazines"
              : ""}
          </div>
          <h3 className="text-5xl font-bold mb-4">
            {categoryParam
              ? categories.find((cat) => cat.id === parseInt(categoryParam))
                  ?.name
              : categoryId == 5
              ? "All Articles"
              : categoryId == 10
              ? "All Resources"
              : categoryId == 16
              ? "All Magazines"
              : ""}
          </h3>

          <div className="flex flex-col lg:flex-row gap-4 h-12">
            {/* Search input */}
            <div className="flex flex-1 items-center shadow-lg border border-gray-300 rounded-md pl-3">
              <input
                type="text"
                placeholder="Search for..."
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

            {/* Dropdown */}
            <select
              className="border border-gray-300 w-42 px-4 py-2 rounded-md shadow-lg focus:outline-none"
              onChange={(e) => {
                const selected = e.target.value;
                if (selected && !selectedCategories.includes(selected)) {
                  setSelectedCategories([...selectedCategories, selected]);
                }
              }}
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-4">
            {getCategoryName() && (
              <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center">
                {getCategoryName()}
                <button
                  onClick={() => setCategory("")}
                  className="ml-2 text-gray-500 hover:text-red-500"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            )}

            {selectedCategories.map((catSlug) => {
              const cat = categories.find((c) => c.slug === catSlug);
              return (
                <div
                  key={catSlug}
                  className="bg-gray-100 px-3 py-1 rounded-full flex items-center"
                >
                  {cat?.name || catSlug}
                  <button
                    onClick={() =>
                      setSelectedCategories(
                        selectedCategories.filter((slug) => slug !== catSlug)
                      )
                    }
                    className="ml-2 text-gray-500 hover:text-red-500"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              );
            })}

            {(search || selectedCategories.length > 0) && (
              <button
                onClick={handleClearAll}
                className="ml-4 text-blue-600 hover:underline"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 pt-10">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div key={post.id} className="w-full lg:w-2xs md:w-xs">
                <PostCard
                  post={post}
                  mainSection={true}
                  sectionVariant="customSection"
                />{" "}
              </div>
            ))
          ) : (
            <p>No Post Available..</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
