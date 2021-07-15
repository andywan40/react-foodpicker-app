import axios from "axios";
export const getCuisineRecipes = async (cuisine, nextLink) => {
  const url =
    nextLink === ""
      ? `https://react-foodpicker-app-backend.herokuapp.com/api/v1/edamam/cuisine/${cuisine}/null`
      : `https://react-foodpicker-app-backend.herokuapp.com/api/v1/edamam/cuisine/${cuisine}/${nextLink}`;
  try {
    const data = await axios.get(url);
    return data.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getDishRecipes = async (dish, nextLink) => {
  const url =
    nextLink === ""
      ? `https://react-foodpicker-app-backend.herokuapp.com/api/v1/edamam/dish/${dish}/null`
      : `https://react-foodpicker-app-backend.herokuapp.com/api/v1/edamam/dish/${dish}/${nextLink}`;
  try {
    const data = await axios.get(url);
    return data.data;
  } catch (e) {
    throw new Error(e);
  }
};
