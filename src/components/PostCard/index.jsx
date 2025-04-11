import React from "react";
import Category from "../Category";

const PostCard = ({ post, sidebarWidget, mainSection = false, sectionVariant }) => {
  console.log("PostCard Props:", post); 

  const imageSize = sidebarWidget 
    ? "w-[112px] h-auto"
    : sectionVariant === "customSection"
    ? "w-full h-[184px]" 
    : mainSection 
    ? "w-full h-[24.063rem]" 
    : "h-auto";  

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  const fontSize = sidebarWidget ? "text-base lg:text-xl" : sectionVariant == "customSection"  ? "text-base lg:text-xl" : "text-lg lg:text-2xl";
  return (
    <div className={`${sidebarWidget ? "flex gap-4" : ""} rounded-lg overflow-hidden`}>
      <img src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url} alt={post.title.rendered} className={`object-cover ${imageSize}`} />
      <div className={`${sidebarWidget ? '' : 'p-4 border border-(--WillowBrook)'} flex flex-col justify-between gap-2 w-full`}>
        <div>
        <Category category={post._embedded?.["wp:term"]?.[0]?.[0]?.name} />
        </div>
        <h2 className={`${fontSize} font-bold leading-[30px]`}>{post.title.rendered}</h2>
        <p className=" text-sm font-medium ">
          <span className="italic font-medium mt-auto"> —{post._embedded?.author?.[0]?.name}</span> • {formatDate(post.date)}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
