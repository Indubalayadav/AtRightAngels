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
import { getArticlesData, getMagazineData } from "../../services/apiServices";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [categoriesId, setCategoriesId] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [resourcesPosts, setResourcesPosts] = useState([]);
  const [magazinePosts, setMagazinesPosts] = useState([]);
  const [magazineVisit, setMagazineVisit] = useState([]);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const magazineSectionRef = useRef(null);
  const magazineCardRefs = useRef([]);
  magazineCardRefs.current = [];

  const otherMagazineRefs = useRef([]);
  otherMagazineRefs.current = [];
  const otherMagazineSectionRef = useRef(null);
  const resourcesSectionRef = useRef(null);
  const resourceCardRefs = useRef([]);

  // animation
  // Callback to add refs
  const addToResourceRefs = (el) => {
    if (el && !resourceCardRefs.current.includes(el)) {
      resourceCardRefs.current.push(el);
    }
  };

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
      gsap.fromTo(
        resourcesSectionRef.current.children, // Targeting the children inside resources section
        {
          opacity: 0, // Start as invisible
          y: 60, // Start below the screen
        },
        {
          opacity: 1, // Fade in
          y: 0, // Move to original position
          duration: 1.2,
          stagger: 0.3, // Staggering the animation for each child
          ease: "power3.out",
          scrollTrigger: {
            trigger: resourcesSectionRef.current,
            start: "top 80%", // Start animation when the section is 80% visible
            toggleActions: "restart none restart reverse", // Restart animation when scrolled back
          },
        }
      );
    }, resourcesSectionRef);

    return () => ctx.revert();
  }, [resourcesPosts]);

  // Fetch Articles posts and announcements data
  const fetchArticlesData = async () => {
    try {
      const articles = await getArticlesData(null, 5);
      setPosts(articles.sortedData);
      setCategoriesId(articles.categoryIds);
      setAnnouncements(articles.announcementPosts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch Resources posts data
  const fetchResourcesData = async () => {
    try {
      const resource = await getArticlesData(null, 10);
      setResourcesPosts(resource.sortedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch Magazine posts data
  const fetchMagazineData = async () => {
    try {
      const magazine = await getMagazineData(16);
      setMagazinesPosts(magazine);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchMagazineVisitData = async () => {
    try {
      const magazinevisit = await getArticlesData(null, 17);
      setMagazineVisit(magazinevisit.sortedData);
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
          left: 0,
          right: 0,
          height: 6,
          originX: 0,
          backgroundColor: "#3caea3",
          zIndex: 9999,
        }}
      />
      {/* section for showing articles posts and announcements */}
      <div className="max-w-7xl mx-auto px-4 my-25">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-3/5">
            {posts.length > 0 ? (
              <div>
                <PostCard post={posts[0]} mainSection={true} parentId={5} />
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
                        parentId={5}
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
          <div className="flex flex-col gap-6 w-full lg:w-2/5">
            <div className="flex flex-col gap-4">
              <div>
                {posts.length > 0 ? (
                  <Editor />
                ) : (
                  <div
                    role="status"
                    className="animate-pulse bg-(--primary-color) rounded-lg shadow-md overflow-hidden"
                  >
                    <div className={`bg-gray-300 h-64 w-full`} />
                  </div>
                )}
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
                        parentId={5}
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
          <CustomButton
            onClick={() => navigate("/all-posts/5")}
            className="cursor-pointer"
          >
            ALL ARTICLES <i className="fas fa-arrow-right ml-2"></i>
          </CustomButton>
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
            <div
              className="flex flex-col lg:flex-row gap-6 mt-10"
              ref={resourcesSectionRef}
            >
              <div className="w-full lg:w-1/2 flex flex-col gap-12">
                {resourcesPosts.length > 0 ? (
                  <div>
                    <ResourcesCard
                      post={resourcesPosts[0]}
                      mainSection={true}
                      ref={addToResourceRefs}
                      parentId={10}
                    />
                  </div>
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
                            ref={addToResourceRefs}
                            post={item}
                            mainSection={true}
                            sectionVariant="customSection"
                            parentId={10}
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
              <div className="w-full lg:w-1/2 gap-3 flex flex-col rounded">
                {resourcesPosts.slice(3, 8).length > 0 ? (
                  resourcesPosts.slice(3, 8).map((item, index) => (
                    <div key={index} className="flex flex-col gap-4">
                      <div className="">
                        <ResourcesCard
                          ref={addToResourceRefs}
                          post={item}
                          mainSection={false}
                          sidebarWidget={true}
                          parentId={10}
                        />
                      </div>

                      {index < resourcesPosts.slice(3, 8).length - 1 && (
                        <div>
                          <img src="/images/resources-line.png" alt="" />
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <>
                  <ShimmerPlaceHolder variant="sidebar" context="resource"/>
                  <ShimmerPlaceHolder variant="sidebar" context="resource"/>
                  <ShimmerPlaceHolder variant="sidebar" context="resource"/>
                  <ShimmerPlaceHolder variant="sidebar" context="resource"/>
                  <ShimmerPlaceHolder variant="sidebar" context="resource"/>
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <CustomButton
                onClick={() => navigate("/all-posts/10")}
                className="cursor-pointer"
              >
                ALL RESOURCES <i className="fas fa-arrow-right ml-2"></i>
              </CustomButton>
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
      <div className="bg-(--primary-color)">
        <div className="max-w-7xl mx-auto px-4 py-30">
          <div>
            <img src="/images/magazine-img.svg" alt="icon" />
            <h2 className="font-bold text-lg lg:text-2xl tracking-widest pt-2">
              MAGAZINE ISSUES
            </h2>
          </div>

          <div
            className="pt-10 overflow-x-auto xl:overflow-x-visible"
            ref={magazineSectionRef}
          >
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
          <div className="flex justify-center mt-8">
            <CustomButton
              onClick={() => navigate("/all-posts/16")}
              className="cursor-pointer"
            >
              ALL MAGAZINES <i className="fas fa-arrow-right ml-2"></i>
            </CustomButton>
          </div>
        </div>
      </div>

      {/* section for showing other magazines from Azim Premji University */}
      <div className="relative z-0">
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
            <div
              className="pt-10 overflow-x-auto xl:overflow-x-visible"
              ref={otherMagazineSectionRef}
            >
              <div className="flex flex-row md:justify-center gap-8 mt-8">
                {magazineVisit.length > 0 ? (
                  magazineVisit.map((magazine, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0"
                      ref={addToOtherMagazineRefs}
                    >
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
