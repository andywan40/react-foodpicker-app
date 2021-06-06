import axios from "axios";

export const getCuisinePhotos = async (cuisine, currentPage) => {
  const url = `https://react-foodpicker-app-backend.herokuapp.com/api/v1/unsplash/cuisine/${cuisine}/${currentPage}`;
  try {
    const data = await axios.get(url);
    return data.data;
  } catch (e) {
    throw new Error(e);
  }
};