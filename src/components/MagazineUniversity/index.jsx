import React, {useState, useEffect} from "react";
import MagazineVisit from "../MagazineVisit";
import axios from "axios";

const MagazineUnivaersity = () => {
    // const magazines = [
    //     {
    //       image: "images/visit.png",
    //       title: "पाठशाला",
    //       subtitle: "भीतर और बाहर",
    //       link: "#",
    //     },
    //     {
    //       image: "images/visit.png",
    //       title: "Learning Curve Curve",
    //       subtitle: "A journal for educators",
    //       link: "#",
    //     },
    //   ];
   
        const [magazineVisit, setMagazineVisit] = useState([]);
        const [categoriesId, setCategoriesId] = useState([]);
      
        useEffect(() => {
          fetchMagazineVisitData();
        }, []);
      
        const fetchMagazineVisitData = async () => {
          try {
            const categoryRes = await axios.get(
              `${import.meta.env.VITE_REACT_APP_API_ROOT}/categories?parent=17`
            );
            const childCategoryIds = categoryRes.data.map((cat) => cat.id);
            setCategoriesId(childCategoryIds);
      
            if (childCategoryIds.length > 0) {
              const idsQuery = childCategoryIds.join(",");
              const postRes = await axios.get(
                `${
                  import.meta.env.VITE_REACT_APP_API_ROOT
                }/posts?_embed&&categories=${idsQuery}`
              );
      
              console.log("Post Response:", postRes.data);
      
              setMagazineVisit(postRes.data.reverse());
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        console.log("Posts:", magazineVisit);
    return (
    <div className="relative">
      
      <div className="bg-(--Twilight)">
        <div className="max-w-7xl mx-auto px-4 py-30">
          <div>
            <img src="/images/magagineuni-img.svg" alt="icon" />   
            <h2 className="font-bold  tracking-wider pt-2 w-86">
              <span className="uppercase text-base lg:text-2xl">other magazines from </span>
               <span className="lg:text-3xl text-base">Azim Premji University</span>
            </h2>
          </div>
          <div className="pt-10 overflow-x-auto xl:overflow-x-visible">
          <div className="flex flex-row md:justify-center gap-8 mt-8">
          {magazineVisit.length > 0 ? (
           magazineVisit.map((magazine, index) => (
            <div key={index} className="flex-shrink-0">
              <MagazineVisit
               post={magazine}
                value={index}
              />
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
  );
};

export default MagazineUnivaersity;
