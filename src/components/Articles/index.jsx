import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../PostCard";

const Articles = () => {
  const [posts, setPosts] = useState([]);
  // const VITE_REACT_APP_API_ROOT = import.meta.env.VITE_REACT_APP_API_ROOT;

  useEffect(() => {
    const url = `${import.meta.env.VITE_REACT_APP_API_ROOT}/posts?_embed`;

    axios
      .get(url)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error("API Fetch Error:", error);
      });
  }, []);

 console.log("Posts State:", posts); // Debug posts state
  return (
    <div className="flex mw-1280 gap-6 flex-col lg:flex-row max-w-7xl mx-auto px-4">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="w-full lg:w-1/3 mb-4">
            <PostCard post={post} fontSize="text-xl" mainSection={true}/>
          </div>
        ))
      ) : (
        <p>No Post Available..</p>
      )}
      
    </div>
  );
};

export default Articles;
