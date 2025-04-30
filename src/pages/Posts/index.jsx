import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "../../components/Category";
import { useParams } from "react-router-dom";

import './posts.css';
import { formatDate } from "../../utils";

const Posts = () => {
  const [post, setPost] = useState();
  const { parentId, id } = useParams(); 
  // const VITE_REACT_APP_API_ROOT = import.meta.env.VITE_REACT_APP_API_ROOT;

  useEffect(() => {
    const url = `${import.meta.env.VITE_REACT_APP_API_ROOT}/posts/${id}?_embed`;

    console.log("API ROOT:", url); 

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


  return (
    <div className="relative h-full">
      <div className="bg-(--Blumine) h-78">
        <img
          src="/images/allarticleimg.svg"
          alt=""
          className="absolute top-14"
        />
      </div>
      <div className="relative -top-60 m-auto lg:w-5xl bg-(--primary-color) p-8 rounded-md ">
        <div>
          <img src="/images/magazine-img.svg" alt="" />
        </div>
        <div className="text-base font-normal pt-2">
          <a href="/">Home / </a>
          {parentId == 5
            ? "Articles"
            : parentId == 10
            ? "Resources"
            : parentId == 16
            ? "Magazines"
            : ""}
        </div>
        {post ? (
          <div className="hover:bg-(--Alto)">
            <div className="md:p-16 p-6 space-y-6">
              <Category
                category={post._embedded?.["wp:term"]?.[0]?.[0]?.name}
              />
              <h2 className={` font-bold md:text-4xl text-lg mt-3`}>
                {post.title.rendered}
              </h2>
              <p className="text-sm font-medium">
                <span className="italic font-medium mt-auto">
                  {" "}
                  by {post.acf.author_name}
                </span>{" "}
                • {formatDate(post.date)}
              </p>
            </div>
            <img
              src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
              alt={post.title.rendered}
              className="w-full object-cover"
            />
            <div className="md:p-16 p-6 space-y-6">
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                className="post-content"
              />
            </div>
          </div>
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
