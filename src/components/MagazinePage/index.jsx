import React from 'react';
import { formatCustomDate, formatDate } from '../../utils';

const MagazinePage = ({post, parentId=null}) => {
  return (
    <div className="w-70 h-122 flex flex-col justify-between">
       <img src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url} alt={post.title.rendered} className="w-70 h-92 object-cover rounded-md" />
      <h3 className="text-xl font-semibold ">
        <a
          href={`${parentId}/posts/${post.id}`}
          className="hover:text-(--Blumine) hover:underline hover:decoration-(--MineShaft)-300">
          {post.title.rendered}
        </a>
      </h3>
      <p className="text-(--Emperor) text-sm italic">
      <span className="italic font-medium">—Issues {formatCustomDate(post.acf.Issues)}</span> • {formatDate(post.date)}
      </p>
    </div>
  );
};

export default MagazinePage;