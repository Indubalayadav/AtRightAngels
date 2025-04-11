import React, { useState, useEffect } from "react";
import ResourcesCard from "./ResourcesCard";
import Button from "./CustomButton";
import axios from "axios";

const Resources = () => {
  const [resourcesPosts, setResourcesPosts] = useState([]);
  const [categoriesId, setCategoriesId] = useState([]);

  useEffect(() => {
    fetchResourcesData();
  }, []);

  const fetchResourcesData = async () => {
    try {
      const categoryRes = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/categories?parent=10`
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

        setResourcesPosts(postRes.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log("Posts:", resourcesPosts);

  return (
    <>
      <div className="relative">
        <img
          src="/images/linebar-up-down-multi-color.svg"
          alt=""
          className="absolute xl:top-[-4.875rem] lg:top-[-2.5rem] md:-top-[-1.875rem] sm:-top[-0.75rem]"
        />
        <div className=" bg-(--Sidecar) ">
          <div className="max-w-7xl mx-auto px-4 py-30">
            <div>
              <img src="/images/resimg.svg" alt="icon" />
              <h2 className="font-bold text-lg lg:text-2xl tracking-wider pt-2">RESOURCES</h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 mt-10">
              <div className="w-full lg:w-1/2 flex flex-col gap-10">
                {resourcesPosts.length > 0 ? (
                  <ResourcesCard post={resourcesPosts[1]} mainSection={true} />
                ) : (
                  <></>
                )}
                
                <div className="flex flex-col md:flex-row gap-6">
                  {resourcesPosts.length > 0 ? (
                    resourcesPosts.slice(0, 2).map((item, index) => (
                      <div key={index} className="w-full lg:w-1/2">
                        <ResourcesCard
                          post={item}
                          mainSection={true}
                          sectionVariant="customSection"
                        />
                      </div>
                    ))
                  ) : (
                    <p>No Post Available..</p>
                  )}
                </div>
              </div>
              <div className="w-full lg:w-1/2 gap-4 flex flex-col">
                {resourcesPosts.length > 0 ? (
                  resourcesPosts.map((item, index) => (
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
              <Button name="ALL RESOURCES" />
            </div>
          </div>
        </div>
        <img
          src="/images/linebar-up-down-multi-color.svg"
          alt=""
          className="absolute xl:bottom-[-3.875rem] lg:bottom-[-2.5rem] md:-bottom-[-1.875rem] sm:-bottom[-0.75rem]"
        />
      </div>
    </>
  );
};

export default Resources;
