import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const modalRef = useRef(null);
  const navigate = useNavigate();

  // const menuItemsRef = useRef([]);
  // menuItemsRef.current = [];

  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const navItemsRef = useRef([]);
  navItemsRef.current = [];

  // search modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSearchOpen(false);
        setSearchText("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // animation
  useEffect(() => {
    if (!logoRef.current || !titleRef.current || navItemsRef.current.length === 0) return;
  
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.from(logoRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
  
      // Title animation
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
  
      // Navigation items animation
      navItemsRef.current.forEach((el, index) => {
        if (!el) return;
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.3 + index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onComplete: () => {
            // Ensure elements stay visible
            gsap.set(el, { opacity: 1, clearProps: "all" });
          },
        });
      });
  
      // Optional: Refresh ScrollTrigger in case elements change
      ScrollTrigger.refresh();
    });
  
    return () => ctx.revert(); // Clean up
  }, []);
  
  // const navRightAnimationRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeAllDropdowns = (except = "") => {
    if (except !== "articles") setArticlesOpen(false);
    if (except !== "resources") setResourcesOpen(false);
    if (except !== "language") setLanguageOpen(false);
  };

  const handleModalSearch = () => {
    if (searchText.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchText.trim())}`);
      setSearchOpen(false);
      setSearchText("");
    }
  };

  return (
    <header className="bg-(--Blumine) min-h-24 p-3 sticky top-0 z-1">
      <div className="">
        <div className="mw-1280 mx-auto place-items-center">
          <div className="-top-2 left-6 absolute 2xl:block hidden">
            <img src="/images/left-design.png" alt="" />
          </div>
          <div className="-top-2 right-10 absolute  2xl:block hidden">
            <img src="/images/right-design.png" alt="" />
          </div>
          <div className="logo flex items-center justify-center g-3">
            <div ref={logoRef}>
              <a href="/">
                <img
                  src="/images/site-logo.png"
                  alt="Azim Premji University"
                  className="site-logo"
                />
              </a>
            </div>
            <div ref={titleRef}>
              <img
                src="/images/site-title.png"
                alt="Azim Premji University"
                className="site-title"
              />
            </div>
          </div>
          <div className="down-border py-3">
            <img src="/images/border.png" alt="" />
          </div>
          <div
            className={` flex items-center justify-between gap-4 w-full lg:w-auto `}
          >
            <div className="">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="block lg:hidden text-(--primary-color)"
              >
                <Menu size={28} />
              </button>
              <nav className="lg:w-full mob-menu">
                <div className={`${menuOpen ? "menu-open" : ""}`}>
                  <div
                    className={`lg:flex gap-10 justify-center ${
                      menuOpen ? "block" : "hidden"
                    }`}
                  >
                    <div
                      className={`${
                        menuOpen ? "flex" : "hidden"
                      } justify-evenly 2xl:gap-16 xl:gap-4 lg:flex`}
                      id="navbar-dropdown"
                    >
                      <ul
                        className={`flex flex-col lg:flex-row  font-medium header-menu ${
                          menuOpen ? "flex items-normal" : "hidden items-center"
                        } lg:flex`}
                      >
                        <li
                          className="relative"
                          ref={(el) => navItemsRef.current.push(el)}
                        >
                          <button
                            onClick={() => {
                              closeAllDropdowns("articles");
                              setArticlesOpen((prev) => !prev);
                            }}
                            className="submenus cursor-pointer flex items-center justify-between w-full py-2 px-3 text-(--primary-color) hover:bg-(--Blumine-hover) rounded-full"
                          >
                            ARTICLES{" "}
                            <svg
                              className="w-2.5 h-2.5 ms-2.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 4 4 4-4"
                              />
                            </svg>
                          </button>

                          {articlesOpen && (
                            <div
                              className={`${
                                menuOpen
                                  ? "relative  bg-transparent shadow-none w-full"
                                  : "absolute z-10 top-12 bg-(--primary-color) shadow-lg w-44"
                              }`}
                            >
                              <ul
                                className={`py-4 px-2 text-sm flex flex-col gap-4 ${
                                  menuOpen
                                    ? "text-(--primary-color) flex flex-col gap-2 bg-[rgba(var(--Mercury),0.6)]"
                                    : "text-(--Emperor) dark:text-gray-400"
                                }`}
                              >
                                <li>
                                  <a
                                    href="/all-posts/5?category=8"
                                    className="block px-4 py-2 hover:bg-(--Nevada) dark:hover:bg-(--Emperor) dark:hover:text-(--primary-color)"
                                  >
                                    FEATURES
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="/all-posts/5?category=6"
                                    className="block px-4 py-2 hover:bg-(--Nevada) dark:hover:bg-(--Emperor) dark:hover:text-(--primary-color)"
                                  >
                                    CLASSROOM
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="/all-posts/5?category=7"
                                    className="block px-4 py-2 hover:bg-(--Nevada) dark:hover:bg-(--Emperor) dark:hover:text-(--primary-color)"
                                  >
                                    THE JOY OF MATHMATICS
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="/all-posts/5?category=9"
                                    className="block px-4 py-2 hover:bg-(--Nevada) dark:hover:bg-(--Emperor) dark:hover:text-(--primary-color)"
                                  >
                                    REVIEWS
                                  </a>
                                </li>
                              </ul>
                            </div>
                          )}
                        </li>
                        <li
                          className="relative"
                          ref={(el) => navItemsRef.current.push(el)}
                        >
                          <button
                            onClick={() => {
                              closeAllDropdowns("resources");
                              setResourcesOpen((prev) => !prev);
                            }}
                            className="submenus cursor-pointer flex items-center justify-between w-full py-2 px-3 text-(--primary-color) hover:bg-(--Blumine-hover) rounded-full"
                          >
                            RESOURCES{" "}
                            <svg
                              className="w-2.5 h-2.5 ms-2.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 4 4 4-4"
                              />
                            </svg>
                          </button>

                          {resourcesOpen && (
                            <div
                              className={`${
                                menuOpen
                                  ? "relative bg-transparent shadow-none w-full"
                                  : "absolute z-10 top-12 bg-(--primary-color) shadow-lg w-44"
                              }`}
                            >
                              <ul
                                className={`py-2 px-2 text-sm flex flex-col gap-4 ${
                                  menuOpen
                                    ? "text-(--primary-color) flex flex-col gap-2 bg-[rgba(var(--Mercury),0.6)]"
                                    : "text-(--Emperor) dark:text-(--Emperor)"
                                }`}
                              >
                                <li>
                                  <a
                                    href="/all-posts/10?category=11"
                                    className="block px-4 py-2 hover:bg-(--Nevada) dark:hover:bg-(--Emperor) dark:hover:text-white"
                                  >
                                    PULLOUTS
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="/all-posts/10?category=14"
                                    className="block px-4 py-2 hover:bg-(--Nevada) dark:hover:bg-(--Emperor) dark:hover:text-(--primary-color)"
                                  >
                                    TEAROURS
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="/all-posts/10?category=13"
                                    className="block px-4 py-2 hover:bg-(--Nevada) dark:hover:bg-(--Emperor) dark:hover:text-(--primary-color)"
                                  >
                                    WORKSHEETS
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="/all-posts/10?category=12"
                                    className="block px-4 py-2 hover:bg-(--Nevada) dark:hover:bg-(--Emperor) dark:hover:text-(--primary-color)"
                                  >
                                    POSTERS
                                  </a>
                                </li>
                              </ul>
                            </div>
                          )}
                        </li>
                        <li ref={(el) => navItemsRef.current.push(el)}>
                          <a
                            href="/all-posts/16?category"
                            className="block py-2 px-3 text-(--primary-color) hover:bg-(--Blumine-hover) rounded-full"
                          >
                            MAGAZINE ISSUES
                          </a>
                        </li>
                        <li ref={(el) => navItemsRef.current.push(el)}>
                          <a
                            href="/about-us"
                            className="block py-2 px-3 text-(--primary-color) hover:bg-(--Blumine-hover) rounded-full"
                          >
                            ABOUT US
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex gap-6 items-center">
                      <div className="menu-btn flex gap-2">
                        <a
                          ref={(el) => navItemsRef.current.push(el)}
                          href="/call-for-articles"
                          className="header-menu menus left-btn"
                        >
                          Call for Articles
                        </a>
                        <a
                          ref={(el) => navItemsRef.current.push(el)}
                          href="https://login.salesforce.com/?locale=in"
                          className="header-menu menus left-btn"
                        >
                          Subscribe for Free
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div>
              <div className=" flex items-center gap-4">
                <div ref={(el) => navItemsRef.current.push(el)} className="">
                  {/* search icon */}
                  <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="cursor-pointer"
                  >
                    <img
                      src="/images/search.png"
                      alt="Search"
                      className="w-5"
                    />
                  </button>
                  {searchOpen && (
                    <div className="fixed inset-0 bg-(--Blumine) bg-opacity-70 z-50 flex items-center justify-center">
                      <div ref={modalRef} className=" w-[70%] relative">
                        {searchText && (
                          <button
                            onClick={() => {
                              setSearchText("");
                            }}
                            className="absolute top-1/2 right-[60px] transform -translate-y-1/2 z-10"
                          >
                            <img
                              src="/images/search-btn.png"
                              alt="cross-btn"
                              className="w-5 h-5"
                            />
                          </button>
                        )}
                        <div className="flex items-center justify-between w-full rounded-md bg-white/10 border border-white/20">
                          <div className="flex items-center py-2 px-4">
                            <img
                              src="/images/search.png"
                              alt="Search"
                              className="w-4  mr-2 opacity-70"
                            />
                            <input
                              type="text"
                              placeholder="Search for"
                              value={searchText}
                              onChange={(e) => setSearchText(e.target.value)}
                              className=" bg-transparent text-(--primary-color) placeholder-(--primary-color) text-xl focus:outline-none"
                              autoFocus
                            />
                          </div>
                          <button
                            className="bg-(--Blumine) rounded px-3 py-2 h-full"
                            onClick={handleModalSearch}
                          >
                            <img
                              src="/images/search.png"
                              alt="Search"
                              className="w-5 h-full opacity-70"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={(el) => navItemsRef.current.push(el)} className="">
                  <button
                    onClick={() => {
                      closeAllDropdowns("language");
                      setLanguageOpen((prev) => !prev);
                    }}
                    className="header-menu cursor-pointer flex items-center text-(--primary-color) gap-1 "
                  >
                    English <ChevronDown size={16} />
                  </button>
                  {languageOpen && (
                    <div className="absolute top-45 bg-(--primary-color) text-(--black) rounded shadow-md  p-4">
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-(--Nevada)"
                      >
                        ಕನ್ನಡ
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-(--Nevada)"
                      >
                        हिन्दी
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
