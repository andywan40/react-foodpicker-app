import axios from "axios";
import { baseUrl } from "../helperFunctions/data";

const key = process.env.REACT_APP_UNSPLASH_API_KEY;

export const getCuisinePhotos = async (cuisine, currentPage) => {
  const url = `${baseUrl}/search/photos?query=${cuisine}+food&page=${currentPage}&per_page=9&client_id=${key}`;
  try {
    const data = await axios.get(url);
    return data.data;
  } catch (e) {
    throw new Error(e);
  }
};

// export const getCuisinePhotos = (cuisine, currentPage) => {
//     const url = `${baseUrl}/search/photos?query=${cuisine}+food&page=${currentPage}&per_page=9&client_id=${key}`;
//     return axios
//       .get(url)
//       .then((response) => response.data)
//       .catch((error) => {
//         throw error;
//       });
//   };


//   const getCuisinePhotos = async () => {
  //     const url = `${baseUrl}/search/photos?query=${cuisine}+food&page=${currentPage}&per_page=9&client_id=${key}`;
  //     try {
  //       const data = await axios.get(url);
  //       console.log(data);
  //       const photos = data.data.results;
  //       let newDishes = [...dishes, ...photos];
  //       setDishes(newDishes);
  //       setCurrentPage(currentPage + 1);
  //       if (data.data["total_pages"] !== totalPages)
  //         setTotalPages(data.data["total_pages"]);
  //     } catch (e) {
  //       console.log(e);
  //       setDishes([]);
  //     }
  //   };