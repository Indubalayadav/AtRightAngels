import React from 'react';
import { formatCustomDate, formatDate } from '../../utils';

const MagazinePage = ({post}) => {
  return (
    <div className="w-70 h-129">
       <img src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url} alt={post.title.rendered} className="w-70 h-92 object-cover rounded-md" />
      <h3 className="text-xl font-semibold mt-3">
        <a
          href={`/posts/${post.id}`}
          className="hover:text-(--Blumine) hover:underline hover:decoration-(--MineShaft)-300">
          {post.title.rendered}
        </a>
      </h3>
      <p className="text-(--Emperor) text-sm mt-2 italic">
      <span className="italic font-medium mt-auto">—Issues {formatCustomDate(post.acf.Issues)}</span> • {formatDate(post.date)}
      </p>
    </div>
  );
};

export default MagazinePage;