import React from "react";
import Category from "../Category";
import { formatDate } from "../../utils";

const PostCard = ({ post, sidebarWidget, mainSection = false, sectionVariant }) => {
  console.log("PostCard Props:", post); 

  const imageSize = sidebarWidget 
    ? "w-[112px] h-auto"
    : sectionVariant === "customSection"
    ? "w-full h-[184px]" 
    : mainSection 
    ? "w-full h-[24.063rem]" 
    : "h-auto";  



  const fontSize = sidebarWidget ? "text-base lg:text-xl" : sectionVariant == "customSection"  ? "text-base lg:text-xl" : "text-lg lg:text-2xl";
  return (
    <div className={`${sidebarWidget ? "flex gap-4" : ""} rounded-lg overflow-hidden`}>
      <img src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url} alt={post.title.rendered} className={`object-cover ${imageSize}`} />
      <div className={`${sidebarWidget ? '' : 'p-4 border border-(--WillowBrook)'} flex flex-col justify-between gap-2 w-full`}>
        <div>
        <Category category={post._embedded?.["wp:term"]?.[0]?.[0]?.name} />
        </div>
        <h2 className={`${fontSize} font-bold leading-[30px]`}> <a
            href={`/posts/${post.id}`}
            className="hover:text-(--Blumine) hover:underline hover:decoration-(--MineShaft)"
          >{post.title.rendered}
          </a>
          </h2>
        <p className=" text-sm font-medium ">
          <span className="italic font-medium mt-auto"> by {post.acf.author_name}</span> • {formatDate(post.date)}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
