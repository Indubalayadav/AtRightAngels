import React from 'react'
import Category from '../Category';

const Magazinevisit= ({ post, value, parentId=null }) => {
  console.log(value)
  return (
    <div className="bg-(--Beige) flex justify-center rounded-xl">
      <div className={`${value == 0 ? 'bg-(--FogL)' : 'bg-(--LemonChiffon)'} rounded-xl shadow-lg p-4 w-[340px]`}>
        <img src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url} alt={post.title.rendered} className="w-full h-[420px] object-cover rounded-md" />
        <p className="pt-3">{post._embedded?.["wp:term"]?.[0]?.[0]?.name}</p> 
        <h3 className="text-xl font-bold text-gray-900 text-left">{post.title.rendered.split(" ").slice(0, 2).join(" ")}
        {post.title.rendered.split(" ").length > 2 && '...'}</h3>
        <div className="mt-4 group">
          <a
            href={`${parentId}/posts/${post.id}`}
            rel="noopener noreferrer"
            className="flex justify-center gap-1 bg-(--primary-color) text-(--black) font-bold py-3 rounded-md shadow-md border border-gray-300 hover:bg-gray-100 transition"
          >
            Visit 
            <div className='flex gap-3 justify-center'>
            <span className="font-bold">
            {post.title.rendered.split(" ").slice(0, 2).join(" ")}
            {post.title.rendered.split(" ").length > 2 && '...'}</span> 
            <img src="images/arrow.png" alt="arrow" className="object-contain w-4 group-hover:rotate-45 transition-all duration-300"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Magazinevisit