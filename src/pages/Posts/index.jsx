import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "../../Frontend/Category";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  // const VITE_REACT_APP_API_ROOT = import.meta.env.VITE_REACT_APP_API_ROOT;

  useEffect(() => {
    const url = `${import.meta.env.VITE_REACT_APP_API_ROOT}/posts?_embed`;


    console.log("API ROOT:", url); // Debug .env

    axios
      .get(url)
      .then((res) => {
        console.log("API Response:", res.data); 
        setPosts(res.data);
      })
      .catch((error) => {
        console.error("API Fetch Error:", error);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  };
  

  return (
    <div className="flex flex-wrap gap-4 my-6">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}
            className="rounded-lg overflow-hidden w-1/4"
          >
            <img
              src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
              alt={post.title.rendered}
              className={` object-fill w-full h-[385px]`}
            />
            <div
              className="p-4 border border-(--WillowBrook)"
            >
              <Category category={post._embedded?.["wp:term"]?.[0]?.[0]?.name} />
              <h2 className={` font-bold leading-[30px] mt-3`}>
                {post.title.rendered}
              </h2>
              <p className=" text-sm mt-2 font-medium ">
                <span className="italic font-medium">--{post._embedded?.author?.[0]?.name}</span> • {formatDate(post.date)}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
};

export default Posts;
