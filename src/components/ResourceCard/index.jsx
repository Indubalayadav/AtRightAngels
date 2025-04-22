import React from "react";
import Category from '../Category';
const ResourcesCard = ({
  post,
  sidebarWidget,
  mainSection = false,
  sectionVariant,
}) => {
  const imageSize = sidebarWidget
    ? "  lg:w-40 h-40"
    : sectionVariant === "customSection"
    ? "w-full h-48"
    : mainSection
    ? "w-full h-96"
    : "h-auto";

  const cardWrapperHeight =
    sectionVariant === "customSection"
      ? "h-[349px]"
      : sidebarWidget
      ? "md:h-40"
      : "";

  // const displayTitle = React.useMemo(() => {
  //   if (sectionVariant === "customSection") {
  //     const words = title.trim().split(/\s+/);
  //     return words.slice(0, 6).join(" ") + (words.length > 6 ? "..." : "");
  //   }
  //   return title;
  // }, [title, sectionVariant]);

  const splitValue = sidebarWidget
    ? 10
    : sectionVariant == "customSection"
    ? 6
    : 14;

  const fontSize = sidebarWidget
    ? "text-base lg:text-base md:text-base"
    : sectionVariant == "customSection"
    ? "text-base lg:text-base md:text-base"
    : "text-lg lg:text-2xl";

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(date);
    };
  

  return (
    <div 
      className={`${
        sidebarWidget ? "flex flex-col md:flex-row" : ""
      } ${cardWrapperHeight}  max-w-full md:rounded-lg overflow-hidden`}
    >
      <img src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url} alt={post.title.rendered} className={`object-cover ${imageSize}`} />

      <div
        className={`${
          sidebarWidget ? "gap-2" : "gap-4"
        } md:bg-(--Linen) w-full flex flex-col   justify-between lg:p-4 xl:p-6 p-6 `}
      >
        <div>
          <Category category={post._embedded?.["wp:term"]?.[0]?.[0]?.name}/>
        </div>
        <h3 className={`${fontSize} font-bold text-(--MineShaft)`}>
          <a
            href={`/posts/${post.id}`}
            className="hover:text-(--Blumine) hover:underline hover:decoration-(--MineShaft)"
          >
            {post.title.rendered.split(" ").slice(0, splitValue).join(" ") +
              (post.title.rendered.split(" ").length > splitValue ? "..." : "")}
          </a>
        </h3>
        <p className="text-var(--MineShaft) text-sm italic mt-auto">
          <span className="italic font-medium mt-auto"> by {post.acf.author_name}</span> • {formatDate(post.date)}
        </p>
      </div>
    </div>
  );
};

export default ResourcesCard;
