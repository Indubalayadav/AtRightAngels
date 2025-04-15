import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "../../components/Category";
import { useParams } from "react-router-dom";

const Posts = () => {
  const [post, setPost] = useState();
  const {id} = useParams(); // Assuming you want to fetch posts by category ID
  // const VITE_REACT_APP_API_ROOT = import.meta.env.VITE_REACT_APP_API_ROOT;

  useEffect(() => {
    const url = `${import.meta.env.VITE_REACT_APP_API_ROOT}/posts/${id}?_embed`;


    console.log("API ROOT:", url); // Debug .env

    axios
      .get(url)
      .then((res) => {
        console.log("API Response:", res.data); 
        setPost(res.data);
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
    <div className="max-w-7xl mx-auto px-4 my-25 ">
      {post ? (
         <div 
            className=""
          >
            <img
              src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
              alt={post.title.rendered}
              className="w-full object-cover"
            />
            <div
              className="pt-4"
            >
              <Category category={post._embedded?.["wp:term"]?.[0]?.[0]?.name} />
              <h2 className={` font-bold md:text-4xl text-lg mt-3`}>
                {post.title.rendered}
              </h2>
              <p className=" text-sm mt-2 font-medium ">
                <span className="italic font-medium">--{post._embedded?.author?.[0]?.name}</span> • {formatDate(post.date)}
              </p>
            </div>
          </div>
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
};

export default Posts;
