import axios from "axios";
import { baseUrl} from "../helperFunctions/data";
const key = process.env.REACT_APP_UNSPLASH_API_KEY;

export const getDishPhoto = async (dish) => {
  const url = `${baseUrl}/search/photos?query=${dish}&client_id=${key}`;
  try{
    const data = await axios.get(url);
    return data.data;
  }catch(e){
    throw new Error(e);
  }
  
};

export const getCuisinePhoto = async (cuisine) => {
  const url = `${baseUrl}/search/photos?query=${cuisine}food&client_id=${key}`;
  try{
    const data = await axios.get(url);
    return data.data;
  }catch(e){
    throw new Error(e);
  }
  
};

// export const getCuisinePhoto = (cuisine, callback, errorcallback) => {
//   const url = `${baseUrl}/search/photos?query=${cuisine}food&client_id=${key}`;
//   axios
//     .get(url)
//     .then((res) => {
//       if (callback !== null) {
//         callback(res);
//       }
//     })
//     .catch((err) => {
//       if (errorcallback !== null) {
//         errorcallback(err);
//       }
//     });
// };


//   const getDishPhoto = async (dish, cuisine) => {
//     const url = `${baseUrl}/search/photos?query=${dish}&client_id=${key}`;
//     try {
//       const data = await axios.get(url);
//       const photos = data.data.results;
//       const photo = getRandomItem(photos);
//       console.log(photo);
//       setBgImg({
//         url: photo.urls.regular,
//         luminance: getLuminance(photo.color),
//         desc: photo["alt_description"],
//         user: photo.user.name,
//         username: photo.user.username,
//       });
//     } catch (e) {
//       getCuisinePhoto(cuisine);
//     }
//   };

// const getCuisinePhoto = async (cuisine) => {
//   const url = `${baseUrl}/search/photos?query=${cuisine}food&client_id=${key}`;
//   try {
//     const data = await axios.get(url);
//     const photos = data.data.results;
//     const photo = getRandomItem(photos);
//     setBgImg({
//       url: photo.urls.regular,
//       luminance: getLuminance(photo.color),
//       desc: photo["alt_description"],
//       user: photo.user.name,
//       username: photo.user.username,
//     });
//   } catch (e) {
//     setBgImg({ url: background, luminance: 1, desc: "", user: "" });
//   }
// };