import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import axios from "axios";
import PostCard from "../../components/PostCard";
import Editor from "../../components/Editor";
import Announcement from "../../components/Announcement";
import ResourcesCard from "../../components/ResourceCard";
import CustomButton from "../../components/CustomButton";
import MagazinePage from "../../components/MagazinePage";
import MagazineVisit from "../../components/MagazineVisit";
import Informed from "../../components/Informed";
import ShimmerPlaceHolder from "../../components/ShimmerPlaceHolder";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [categoriesId, setCategoriesId] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [resourcesPosts, setResourcesPosts] = useState([]);
  const [magazinePosts, setMagazinesPosts] = useState([]);
  const [magazineVisit, setMagazineVisit] = useState([]);

  const leftAnimationRef = useRef([]);
  leftAnimationRef.current = [];

  const addToRefs = (el) => {
    if (el && !leftAnimationRef.current.includes(el)) {
      leftAnimationRef.current.push(el);
    }
  };

  const rightAnimationRef = useRef(null);

  // GSAP animation logic
  useEffect(() => {
    // Animation for menu items
    gsap.fromTo(
      leftAnimationRef.current,
      { opacity: 0, y: 400 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.2,
        ease: "power1.out",
      }
    );

    // Animation for navRight
    if (rightAnimationRef.current) {
      gsap.fromTo(
        rightAnimationRef.current,
        { opacity: 0, y: -400 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power1.out",
        }
      );
    }
  }, []);

  useEffect(() => {
    fetchArticlesData();
    fetchResourcesData();
    fetchMagazineData();
    fetchMagazineVisitData();
  }, []);

  // Fetch Articles posts and announcements data
  const fetchArticlesData = async () => {
    try {
      const categoryRes = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/categories?parent=5`
      );
      const childCategoryIds = categoryRes.data.map((cat) => cat.id);

      if (childCategoryIds.length > 0) {
        const idsQuery = childCategoryIds.join(",");
        const postRes = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_API_ROOT
          }/posts?_embed&&categories=${idsQuery}`
        );

        console.log("Post Response:", postRes.data);
        // Filter posts with ANNOUNCEMENT category (ID 12)
        const announcementPosts = postRes.data.filter((post) =>
          post.categories.includes(15)
        );
        console.log("Announcement Posts:", announcementPosts);
        setAnnouncements(announcementPosts);
        const filteredPosts = postRes.data.filter(
          (post) => !post.categories.includes(15)
        );

        const sortedData = filteredPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setPosts(sortedData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch Resources posts data
  const fetchResourcesData = async () => {
    try {
      const categoryRes = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/categories?parent=10`
      );
      const childCategoryIds = categoryRes.data.map((cat) => cat.id);

      if (childCategoryIds.length > 0) {
        const idsQuery = childCategoryIds.join(",");
        const postRes = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_API_ROOT
          }/posts?_embed&&categories=${idsQuery}`
        );

        console.log("Post Response:", postRes.data);

        const sortedData = postRes.data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setResourcesPosts(sortedData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch Magazine posts data
  const fetchMagazineData = async () => {
    try {
      const categoryRes = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/posts?_embed&&categories=16`
      );

      const sortedData = categoryRes.data.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setMagazinesPosts(sortedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchMagazineVisitData = async () => {
    try {
      const categoryRes = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/categories?parent=17`
      );
      const childCategoryIds = categoryRes.data.map((cat) => cat.id);

      if (childCategoryIds.length > 0) {
        const idsQuery = childCategoryIds.join(",");
        const postRes = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_API_ROOT
          }/posts?_embed&&categories=${idsQuery}`
        );

        const sortedData = postRes.data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setMagazineVisit(sortedData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      {/* section for showing articles posts and announcements */}
      <div className="max-w-7xl mx-auto px-4 my-25">
        <div className="flex flex-col lg:flex-row gap-6">
          <div ref={addToRefs} className="w-full lg:w-3/5">
            {posts.length > 0 ? (
              <div>
                <PostCard post={posts[0]} mainSection={true} />
              </div>
            ) : (
              <ShimmerPlaceHolder variant="main" />
            )}

            <div className="flex flex-col md:flex-row  gap-4 pt-10">
              {posts.length > 0 ? (
                posts
                  .filter((_, index) => index === 1 || index === 2)
                  .map((post, index) => (
                    <div
                      key={post.id}
                      className="w-full lg:w-1/2"
                    >
                      <PostCard
                        post={post}
                        mainSection={true}
                        sectionVariant="customSection"
                      />{" "}
                    </div>
                  ))
              ) : (
                <>
                  <div className="w-full lg:w-1/2">
                    <ShimmerPlaceHolder />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <ShimmerPlaceHolder />
                  </div>
                </>
              )}
            </div>
          </div>
          <div ref={rightAnimationRef} className="flex flex-col gap-6 w-full lg:w-2/5">
            <div className="flex flex-col gap-4">
              <div>
                <Editor />
              </div>
              <div className="pt-4">
                <Announcement announcements={announcements} />
              </div>
            </div>
            <div className="min-h-[18rem] md:min-h-[20rem] lg:min-h-[21.75rem] max-h-[25rem]  flex flex-col gap-4">
              {posts.length > 0 ? (
                posts.slice(3, 6).map((post, index) => (
                  <React.Fragment key={post.id}>
                    <div>
                      <PostCard
                        post={post}
                        mainSection={false}
                        sidebarWidget={true}
                      />
                    </div>

                    {index < 2 && (
                      <div className="border-t border-(--MineShaft) opacity-25"></div>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <>
                  <ShimmerPlaceHolder variant="sidebar" />
                  <ShimmerPlaceHolder variant="sidebar" />
                  <ShimmerPlaceHolder variant="sidebar" />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <CustomButton name="ALL ARTICLES" path="/all-posts/5" />
        </div>
      </div>

      {/* section for showing Resource posts  */}
      <div className="relative z-0">
        <img
          src="/images/linebar-up-down-multi-color.svg"
          alt=""
          className="absolute top-[-1rem] md:top-[-2rem] lg:top-[-3rem] 2xl:top-[-4rem] left-0"
        />
        <div className=" bg-(--Sidecar) ">
          <div className="max-w-7xl mx-auto px-4 py-30">
            <div>
              <img src="/images/resimg.svg" alt="icon" />
              <h2 className="font-bold text-lg lg:text-2xl tracking-wider pt-2">
                RESOURCES
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 mt-10">
              <div className="w-full lg:w-1/2 flex flex-col gap-10">
                {resourcesPosts.length > 0 ? (
                  <ResourcesCard post={resourcesPosts[0]} mainSection={true} />
                ) : (
                  <ShimmerPlaceHolder variant="main" />
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  {resourcesPosts.length > 0 ? (
                    resourcesPosts
                      .filter((_, index) => index === 1 || index === 2)
                      .map((item, index) => (
                        <div key={index} className="w-full lg:w-1/2">
                          <ResourcesCard
                            post={item}
                            mainSection={true}
                            sectionVariant="customSection"
                          />
                        </div>
                      ))
                  ) : (
                    <>
                      <div className="w-full lg:w-1/2">
                        <ShimmerPlaceHolder />
                      </div>
                      <div className="w-full lg:w-1/2">
                        <ShimmerPlaceHolder />
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="w-full lg:w-1/2 gap-4 flex flex-col">
                {resourcesPosts.slice(3, 8).length > 0 ? (
                  resourcesPosts.slice(3, 8).map((item, index) => (
                    <div key={index} className="flex flex-col gap-4">
                      <div className="">
                        <ResourcesCard
                          post={item}
                          mainSection={false}
                          sidebarWidget={true}
                        />
                      </div>

                      {index < resourcesPosts.length - 1 && (
                        <div>
                          <img src="/images/resources-line.png" alt="" />
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No Post Available..</p>
                )}
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <CustomButton name="ALL RESOURCES" path="/all-posts/10" />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/linebar-up-down-multi-color.svg"
        alt=""
        className="relative z-1 xl:bottom-[5rem] lg:bottom-[-2.5rem] md:-bottom-[-1.875rem] sm:-bottom[-0.75rem]"
      />

      {/* section for showing magazine posts */}
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
                    <MagazinePage post={mag} />
                  </div>
                ))
              ) : (
                <p>No Post Available..</p>
              )}
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <CustomButton name="ALL MAGAZINES" path="/all-posts/16" />
          </div>
        </div>
      </div>

      {/* section for showing other magazines from Azim Premji University */}
      <div className="relative">
        <div className="bg-(--Twilight)">
          <div className="max-w-7xl mx-auto px-4 py-30">
            <div>
              <img src="/images/magagineuni-img.svg" alt="icon" />
              <h2 className="font-bold  tracking-wider pt-2 w-86">
                <span className="uppercase text-base lg:text-2xl">
                  other magazines from{" "}
                </span>
                <span className="lg:text-3xl text-base">
                  Azim Premji University
                </span>
              </h2>
            </div>
            <div className="pt-10 overflow-x-auto xl:overflow-x-visible">
              <div className="flex flex-row md:justify-center gap-8 mt-8">
                {magazineVisit.length > 0 ? (
                  magazineVisit.map((magazine, index) => (
                    <div key={index} className="flex-shrink-0">
                      <MagazineVisit post={magazine} value={index} />
                    </div>
                  ))
                ) : (
                  <p>No Post Available..</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section for showing Informed cards */}
      <Informed />
    </>
  );
};

export default Home;
