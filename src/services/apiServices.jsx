import axios from "axios";

// Fetch Articles posts and announcements data
export const getArticlesData = async (categoryParam = null, categoryId) => {
    try {
      const categoryRes = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/categories?parent=${categoryId}`
      );
      const childCategoryIds = categoryRes.data.map((cat) => cat.id);

      if (childCategoryIds.length > 0) {
        const idsQuery = categoryParam
            ? categoryParam
            : childCategoryIds.join(",");
        const postRes = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_API_ROOT
          }/posts?_embed&&categories=${idsQuery}`
        );

           // console.log("Post Response:", postRes);
        // Filter posts with ANNOUNCEMENT category (ID 12)
        const announcementPosts = postRes.data.filter((post) =>
          post.categories.includes(15)
        );
        // console.log("Announcement Posts:", announcementPosts);
        const filteredPosts = postRes.data.filter(
          (post) => !post.categories.includes(15)
        );

        const sortedData = filteredPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        const categoryIds = categoryParam ? categoryParam : childCategoryIds;
        return { sortedData, categoryIds, announcementPosts };
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch Resources posts data

//   export  const getResourcesData = async (categoryId) => {
//     try {
//       const categoryRes = await axios.get(
//         `${import.meta.env.VITE_REACT_APP_API_ROOT}/categories?parent=${categoryId}`
//       );
//       const childCategoryIds = categoryRes.data.map((cat) => cat.id);

//       if (childCategoryIds.length > 0) {
//         const idsQuery = childCategoryIds.join(",");
//         const postRes = await axios.get(
//           `${
//             import.meta.env.VITE_REACT_APP_API_ROOT
//           }/posts?_embed&&categories=${idsQuery}`
//         );

//         console.log("Post Response:", postRes.data);

//         const sortedData = postRes.data.sort(
//           (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
//         );
//        return sortedData;
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };




  // Fetch Magazine posts data
  
  export  const getMagazineData = async (categoryId) => {
    try {
      const categoryRes = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/posts?_embed&&categories=${categoryId}`
      );

      const sortedData = categoryRes.data.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
        return sortedData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  // Fetch Magazine Visit posts data
  // export  const getMagazineVisitData = async (categoryId) => {
  //   try {
  //     const categoryRes = await axios.get(
  //       `${import.meta.env.VITE_REACT_APP_API_ROOT}/categories?parent=${categoryId}`
  //     );
  //     const childCategoryIds = categoryRes.data.map((cat) => cat.id);

  //     if (childCategoryIds.length > 0) {
  //       const idsQuery = childCategoryIds.join(",");
  //       const postRes = await axios.get(
  //         `${
  //           import.meta.env.VITE_REACT_APP_API_ROOT
  //         }/posts?_embed&&categories=${idsQuery}`
  //       );

  //       const sortedData = postRes.data.sort(
  //         (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  //       );
  //       return sortedData;
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

   export const getCategoryData = async() =>{
    try {
      const categoryRes = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/categories?per_page=100`
      );
      return categoryRes.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }