import React, { useState, useEffect } from "react";
import PostCard from "../PostCard";
import Announcement from "../Announcement";
import Editor from "../Editor";
import axios from "axios";
import CustomButton from "../CustomButton";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [categoriesId, setCategoriesId] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
    
      const categoryRes = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/categories?parent=5`
      );
      const childCategoryIds = categoryRes.data.map((cat) => cat.id);
      setCategoriesId(childCategoryIds);

      if (childCategoryIds.length > 0) {
        const idsQuery = childCategoryIds.join(',');
        const postRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_ROOT}/posts?_embed&&categories=${idsQuery}`
        );

        console.log("Post Response:", postRes.data); 
        // Filter posts with ANNOUNCEMENT category (ID 12)
      const announcementPosts = postRes.data.filter(post =>
        post.categories.includes(15)
      );
      console.log("Announcement Posts:", announcementPosts); 
      setAnnouncements(announcementPosts);
      const filteredPosts = postRes.data.filter(post =>
        !post.categories.includes(15)
      );
      setPosts(filteredPosts);
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log("announcements:", announcements); 
  console.log("Posts:", posts); 

  return (
    <div className="max-w-7xl mx-auto px-4 my-25">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-3/5">
          {posts.length > 0 ? (
            <PostCard post={posts[1]} mainSection={true} />
          ) : (
            <>
            </>
          )}

          <div className="flex flex-col md:flex-row  gap-4 pt-10">
            {posts.length > 0 ? (
              posts
                .filter((_, index) => index === 0 || index === 2)
                .map((post) => (
                  <div key={post.id} className="w-full lg:w-1/2">
                    <PostCard
                      post={post}
                      mainSection={true}
                      sectionVariant="customSection" 
                    />{" "}
                  </div>
                ))
            ) : (
              <p>No Post Available..</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-2/5">
          <div className="flex flex-col gap-4">
            <Editor />
            <div className="pt-4">
              <Announcement announcements={announcements}/>
            </div>
          </div>
               <div className="min-h-[18rem] md:min-h-[20rem] lg:min-h-[21.75rem] max-h-[25rem]  flex flex-col gap-4">
                  {posts.length > 0 ? (
                    posts.slice(0, 3).map((post, index) => (
                      <React.Fragment key={post.id}>
                        <div className="">
                          <PostCard post={post} mainSection={false} sidebarWidget={true} />
                        </div>

                        {index < 2 && (
                          <div className="border-t border-(--MineShaft) opacity-25"></div>
                        )}
                      </React.Fragment>
                    ))
                  ) : (
                    <p>No Post Available..</p>
                  )}
                </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
      <CustomButton name="ALL ARTICLES"/>
      </div>
    </div>
  );
};

export default Post;
