import React from 'react';

const MagazinePage = ({post}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  };
  return (
    <div className="w-70 h-129">
       <img src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url} alt={post.title.rendered} className="w-70 h-92 object-cover rounded-md" />
      <h3 className="text-xl font-semibold mt-3">
        <a
          href="#"
          className="hover:text-(--Blumine) hover:underline hover:decoration-(--MineShaft)-300">
          {post.title.rendered}
        </a>
      </h3>
      <p className="text-(--Emperor) text-sm mt-2 italic">
      <span className="italic font-medium mt-auto">—{post._embedded?.author?.[0]?.name}</span> • {formatDate(post.date)}
      </p>
    </div>
  );
};

export default MagazinePage;