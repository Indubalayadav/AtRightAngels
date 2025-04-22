import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllPosts from "./pages/AllPosts";
import Posts from "./pages/Posts";
import Footer from "./components/Footer";
import CallForArticles from "./pages/CallForArticles";
import Search from "./pages/Search";
import FollowMouse from "./components/FollowMouse";
import AboutUs from "./pages/AboutUs";
import MagazineGuidelines from "./pages/MagazineGuidelines";
import ContactUs from "./pages/ContactUs";  
import Author from "./pages/Author";

function App() {
  return (
    <>
      <Header />
      {/* <FollowMouse /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-posts/:categoryId" element={<AllPosts />} />
        <Route path="/posts/:id" element={<Posts />} /> 
        <Route path="/call-for-articles" element={<CallForArticles />} /> 
        <Route path="/search" element={<Search />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/magazine-guidelines" element={<MagazineGuidelines />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/authors" element={<Author />} />
        {/* <Route path="*" element={<NotFound />} />
      <Route path="/dashboard/:id" element={<Dashboard />} /> */}
      </Routes>

      {/* <Button name="All Articles" submit/> */}
      {/* < Category category="The Joy of Mathematics" /> */}
      {/* <PostCard
        title="Explorations on Symmetric Polygons"
        author="AjayKumar"
        date="17 Nov 2024"
        image="images/post1.png"
      /> */}
      {/* < Information /> */}

      {/* <Announcement /> */}
      {/* < Editor/> */}
      {/* < ResourcesCard title="Montessori Approach: An Introduction to Selected Materials and How to re-Create Them (Part 1)" author="AjayKumar" date="17 Nov 2024" image="images/post1.png" link="#"/> */}
      {/* < MagazinePage image="/images/magazine.png" title="Mathematics! Love to learn it, learn to love it" issue="Issue 20, November 2024" date="15 Nov 2024"/>  */}

      {/* <Magazinevisit image="images/visit.png" title="पाठशाला"  link="#"/> */}

      {/* <Form /> */}

      {/* <Post />
      <Resources />
      <Magazine />
      <MagazineUnivaersity />
      <Informed /> */}
      {/* < Articles/> */}
      {/* <Posts /> */}
      <Footer />
      {/* <FollowMouse /> */}
      {/* < ArticleForm /> */}
    </>
  );
}

export default App;
