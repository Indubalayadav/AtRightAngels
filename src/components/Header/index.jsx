import React, { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeAllDropdowns = (except = "") => {
    if (except !== "articles") setArticlesOpen(false);
    if (except !== "resources") setResourcesOpen(false);
    if (except !== "language") setLanguageOpen(false);
  };

  return (
    <header className="bg-(--Blumine) min-h-24 p-3">
      <div className="mw-1280 mx-auto place-items-center">
        <div className="top-0 left-6 absolute 2xl:block hidden">
          <img src="/images/left-design.png" alt="" />
        </div>
        <div className="top-0 right-10 absolute  2xl:block hidden">
          <img src="/images/right-design.png" alt="" />
        </div>
        <div className="logo flex items-center justify-center g-3">
          <div>
            <img
              src="/images/site-logo.png"
              alt="Azim Premji University"
              className="site-logo"
            />
          </div>
          <div>
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
        <div className="flex justify-between w-full">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block lg:hidden text-white"
          >
            <Menu size={28} />
          </button>
          <nav className="lg:w-full ">
            <div className={`${menuOpen ? "menu-open" : ""}`}>
              <div
                className=" lg:flex gap-6 justify-center"
               
              >
                <div className={`${menuOpen ? "flex" : "hidden"} flex justify-evenly 2xl:gap-16 xl:gap-4 `}  id="navbar-dropdown">
                  <ul className={`flex ${menuOpen ? 'flex-col':'flex-row'} items-center font-medium header-menu`}>
                    <li className="relative">
                      <button
                        onClick={() => {
                          closeAllDropdowns("articles");
                          setArticlesOpen((prev) => !prev);
                        }}
                        className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-(--Blumine-hover) rounded-full"
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
                        <div className="z-10 absolute top-14 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 ">
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-400"
                            aria-labelledby="dropdownLargeButton"
                          >
                            <li>
                              <a
                                href="/all-posts/5?category=8"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                FEATURES
                              </a>
                            </li>
                            <li>
                              <a
                                href="/all-posts/5?category=6"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                CLASSROOM
                              </a>
                            </li>
                            <li>
                              <a
                                href="/all-posts/5?category=7"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                THE JOY OF MATHMATICS
                              </a>
                            </li>
                            <li>
                              <a
                                href="/all-posts/5?category=9"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                REVIEWS
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li className="relative">
                      <button
                        onClick={() => {
                          closeAllDropdowns("resources");
                          setResourcesOpen((prev) => !prev);
                        }}
                        className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-(--Blumine-hover) rounded-full"
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
                        <div className="z-10 absolute top-14 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 ">
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-400"
                            aria-labelledby="dropdownLargeButton"
                          >
                            <li>
                              <a
                                href="/all-posts/10?category=11"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                PULLOUTS
                              </a>
                            </li>
                            <li>
                              <a
                                href="/all-posts/10?category=14"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                TEAROURS
                              </a>
                            </li>
                            <li>
                              <a
                                href="/all-posts/10?category=13"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                WORKSHEETS
                              </a>
                            </li>
                            <li>
                              <a
                                href="/all-posts/10?category=12"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                POSTERS
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 text-white hover:bg-(--Blumine-hover) rounded-full"
                      >
                        MAGAZINE ISSUES
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 text-white hover:bg-(--Blumine-hover) rounded-full"
                      >
                        ABOUT US
                      </a>
                    </li>
                  </ul>
                  <div className="menu-btn flex gap-2">
                    <a href="#" className="header-menu menus left-btn">
                      Call for Articles
                    </a>
                    <a href="#" className="header-menu menus left-btn">
                      Subscribe for Free
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <button
                      onClick={() => setSearchOpen(!searchOpen)}
                      className="px-1"
                    >
                      <img
                        src="/images/search.png"
                        alt="Search"
                        className="w-6 h-6"
                      />
                    </button>
                    {searchOpen && (
                      <div className="absolute top-full right-0 text-black bg-white p-2 shadow-md rounded mt-2">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="w-48 p-2 border rounded"
                        />
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => {
                        closeAllDropdowns("language");
                        setLanguageOpen((prev) => !prev);
                      }}
                      className="header-menu flex items-center text-white gap-1 "
                    >
                      English <ChevronDown size={16} />
                    </button>
                    {languageOpen && (
                      <div className="absolute bg-white text-black rounded shadow-md mt-2 p-2">
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          ಕನ್ನಡ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          हिन्दी
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
