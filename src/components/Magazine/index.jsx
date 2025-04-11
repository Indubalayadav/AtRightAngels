import React, { useState, useEffect } from "react";
import MagazinePage from '../MagazinePage';
import CustomButtom from '../CustomButton';
import axios from "axios";




// const Magazine = () => {
  // const magazines = [
  //   {
  //     image: '/images/magazine.png',
  //     title: 'Mathematics! Love to learn it, learn to love it',
  //     issue: 'Issue 20, November 2024',
  //     date: '15 Nov 2024',
  //   },
  //   {
  //     image: '/images/magazine.png',
  //     title: 'Patterns in Nature and Art',
  //     issue: 'Issue 19, October 2024',
  //     date: '12 Oct 2024',
  //   },
  //   {
  //     image: '/images/magazine.png',
  //     title: 'Geometry Around Us',
  //     issue: 'Issue 18, September 2024',
  //     date: '10 Sep 2024',
  //   },
  //   {
  //     image: '/images/magazine.png',
  //     title: 'Curious Numbers and Their Stories',
  //     issue: 'Issue 17, August 2024',
  //     date: '8 Aug 2024',
  //   },
  // ];

  const Magazine = () => {
    const [magazinePosts, setMagazinesPosts] = useState([]);
    const [categoriesId, setCategoriesId] = useState([]);
  
    useEffect(() => {
      fetchMagazineData();
    }, []);
  
    const fetchMagazineData = async () => {
      try {
        const categoryRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_ROOT}/posts?_embed&&categories=16`
        );
        // const childCategoryIds = categoryRes.data.map((cat) => cat.id);
        // setCategoriesId(childCategoryIds);
        setMagazinesPosts(categoryRes.data);
  
        // if (childCategoryIds.length > 0) {
        //   const idsQuery = childCategoryIds.join(",");
        //   const postRes = await axios.get(
        //     `${
        //       import.meta.env.VITE_REACT_APP_API_ROOT
        //     }/posts?_embed&&categories=${idsQuery}`
        //   );
  
        //   console.log("Post Response:", postRes.data);
  
        //   setMagazinesPosts(postRes.data);
        // }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log("Posts:", magazinePosts);
  return (
    <div className="bg-[--primary-color]">
      <div className="max-w-7xl mx-auto px-4 py-30">
        <div>
          <img src="/images/magazine-img.svg" alt="icon" />
          <h2 className="font-bold text-lg lg:text-2xl tracking-widest pt-2">
            MAGAZINE ISSUES
          </h2>
        </div>

        <div className="pt-10 overflow-x-auto xl:overflow-x-visible">
          <div className="flex gap-6 ">
          {magazinePosts.length > 0 ? (
            magazinePosts.map((mag, index) => (
              <div key={index} className=" flex-shrink-0">
                <MagazinePage
                 post={mag}
                />
              </div>
            ))
          ) : (
            <p>No Post Available..</p>
          )}
          </div>
        </div>
        <div className="flex justify-center mt-6">
            <CustomButtom name="ALL MAGAZINES" />
        </div>
      </div>
    </div>
  );
};

export default Magazine;
