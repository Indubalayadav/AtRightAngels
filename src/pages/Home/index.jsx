import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { motion, useScroll } from "framer-motion";
import axios from "axios";
import PostCard from "../../components/PostCard";
import Editor from "../../components/Editor";
import Announcement from "../../components/Announcement";
import ResourcesCard from "../../components/ResourceCard";
import CustomButton from "../../components/CustomButton";
import MagazinePage from "../../components/MagazinePage";
import MagazineVisit from "../../components/MagazineVisit";
import Informed from "../../components/Informed";
import Contact from "../../components/Contact";
import ShimmerPlaceHolder from "../../components/ShimmerPlaceHolder";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [categoriesId, setCategoriesId] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [resourcesPosts, setResourcesPosts] = useState([]);
  const [magazinePosts, setMagazinesPosts] = useState([]);
  const [magazineVisit, setMagazineVisit] = useState([]);
  const { scrollYProgress } = useScroll();
  const magazineSectionRef = useRef(null);
  const magazineCardRefs = useRef([]);
  magazineCardRefs.current = []; // Reset on re-render

  const otherMagazineRefs = useRef([]);
  otherMagazineRefs.current = []; // Reset on re-render
  const otherMagazineSectionRef = useRef(null);

  const resourcesSectionRef = useRef();
  const resourceCardsRef = useRef([]);

  // const articlesSectionRef = useRef(null);
  // const articlesCardRefs = useRef([]);

  // Callback to add refs
  const addToMagazineRefs = (el) => {
    if (el && !magazineCardRefs.current.includes(el)) {
      magazineCardRefs.current.push(el);
    }
  };

  const addToOtherMagazineRefs = (el) => {
    if (el && !otherMagazineRefs.current.includes(el)) {
      otherMagazineRefs.current.push(el);
    }
  };
  
  const articleSectionRef = useRef();
  const leftArticleSectionRef = useRef();
  const rightArticleSectionRef = useRef();

  useEffect(() => {
    fetchArticlesData();
    fetchResourcesData();
    fetchMagazineData();
    fetchMagazineVisitData();
  }, []);

  useEffect(() => {
    if (magazinePosts.length === 0) return;
  
    const ctx = gsap.context(() => {
      gsap.fromTo(
        magazineCardRefs.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: magazineSectionRef.current,
            start: "top 80%",
            toggleActions: "restart none restart reverse",
          },
        }
      );
    }, magazineSectionRef);
  
    return () => ctx.revert();
  }, [magazinePosts]);

  useEffect(() => {
    if (magazineVisit.length === 0) return;
  
    const ctx = gsap.context(() => {
      gsap.fromTo(
        otherMagazineRefs.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: otherMagazineSectionRef.current,
            start: "top 80%",
            toggleActions: "restart none restart reverse",
          },
        }
      );
    }, otherMagazineSectionRef);
  
    return () => ctx.revert();
  }, [magazineVisit]);

  useEffect(() => {
    if (resourcesPosts.length === 0) return;

    const ctx = gsap.context(() => {
      // First post (comes from top)
      gsap.fromTo(
        resourceCardsRef.current[0],
        {
          opacity: 0,
          y: -60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          stagger: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: resourcesSectionRef.current,
            start: "top 80%",
            toggleActions: "restart none restart reverse",
          },
        }
      );

      // Next two posts (comes from bottom one by one)
      gsap.fromTo(
        resourceCardsRef.current.slice(1, 3),
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3, // Ensures they animate one by one
          scrollTrigger: {
            trigger: resourcesSectionRef.current,
            start: "top 80%",
            toggleActions: "restart none restart reverse",
          },
        }
      );

      // Side posts (comes from the right one by one)
      gsap.fromTo(
        resourceCardsRef.current.slice(3),
        {
          opacity: 0,
          x: 60,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: resourcesSectionRef.current,
            start: "top 80%",
            toggleActions: "restart none restart reverse",
          },
        }
      );
    }, resourcesSectionRef);

    return () => ctx.revert();
  }, [resourcesPosts]);
  
  useEffect(() => {
    if (posts.length === 0) return;

    const ctx = gsap.context(() => {
      // Left section animation (from left to right)
      gsap.fromTo(
        leftArticleSectionRef.current,
        {
          opacity: 0,
          x: -100, // Starts off-screen to the left
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: articleSectionRef.current,
            start: "top 80%",
            toggleActions: "restart none restart reverse",
          },
        }
      );

      // Right section animation (from right to left)
      gsap.fromTo(
        rightArticleSectionRef.current,
        {
          opacity: 0,
          x: 100, // Starts off-screen to the right
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: articleSectionRef.current,
            start: "top 80%",
            toggleActions: "restart none restart reverse",
          },
        }
      );
    }, articleSectionRef);

    return () => ctx.revert();
  }, [posts]);

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

        console.log("Post Response:", postRes);
        // Filter posts with ANNOUNCEMENT category (ID 12)
        const announcementPosts = postRes.data.filter((post) =>
          post.categories.includes(15)
        );
        // console.log("Announcement Posts:", announcementPosts);
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

  // const resourcesRef = useRef(null);

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 182,
          left: 0,
          right: 0,
          height: 6,
          originX: 0,
          backgroundColor: "#3caea3",
          zIndex: 9999,
        }}
      />
      {/* section for showing articles posts and announcements */}
      <div className="max-w-7xl mx-auto px-4 my-25" ref={articleSectionRef}>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-3/5" ref={leftArticleSectionRef}>
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
          <div className="flex flex-col gap-6 w-full lg:w-2/5" ref={rightArticleSectionRef}>
            <div className="flex flex-col gap-4">
              <div>
                <Editor />
              </div>
              <div className="pt-4">
                <Announcement announcements={announcements} />
              </div>
            </div>
            <div className="min-h-[18rem] md:min-h-[20rem] lg:min-h-[21.75rem] max-h-[25rem]  flex flex-col gap-6">
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
                      <div>
                        <img src="/images/article-line.png" alt="" />
                      </div>
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
      <div className="relative z-0" ref={resourcesSectionRef}>
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
                   <div ref={(el) => (resourceCardsRef.current[0] = el)}>
                  <ResourcesCard post={resourcesPosts[0]} mainSection={true} />
                  </div>
                ) : (
                  <ShimmerPlaceHolder variant="main" />
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  {resourcesPosts.length > 0 ? (
                    resourcesPosts
                      .filter((_, index) => index === 1 || index === 2)
                      .map((item, index) => (
                        <div key={index} className="w-full lg:w-1/2" ref={(el) => (resourceCardsRef.current[index + 1] = el)}>
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
                      <div className="" ref={(el) => (resourceCardsRef.current[index + 3] = el)}>
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
        className="relative bottom-[1rem] md:bottom-[2.8rem] lg:bottom-[2.8rem] 2xl:bottom-[3.6rem] rotate-x-180"
      />

      {/* section for showing magazine posts */}
      <div className="bg-[--primary-color]" ref={magazineSectionRef}>
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
                  <div
                    key={index}
                    className=" flex-shrink-0"
                    ref={addToMagazineRefs}
                  >
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
      <div className="relative z-0" ref={otherMagazineSectionRef}>
        <div className="absolute z-1 2xl:-top-18 xl:-top-14 lg:-top-10 md:-top-8 -top-4">
          <img src="/images/univer-down-line.svg" alt="" className="" />
          <img src="/images/univer-up-line.svg" alt="" className="" />
        </div>
        <div className="bg-(--Twilight)">
          <div className="max-w-7xl mx-auto px-4 py-30">
            <div>
              <img src="/images/magagineuni-img.svg" alt="icon" />
              <h2 className="font-bold  tracking-wider pt-2 w-90">
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
                    <div key={index} className="flex-shrink-0" ref={addToOtherMagazineRefs}>
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
        <div className="relative z-1 2xl:bottom-16 xl:bottom-12 lg:bottom-9 md:bottom-6 bottom-4 rotate-x-180">
          <img src="/images/univer-up-line.svg" alt="" className="" />
        </div>
      </div>

      {/* section for showing Informed cards */}
      <Informed />
      <Contact />
    </>
  );
};

export default Home;
