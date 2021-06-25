import axios from "axios";

export const getCuisineRecipes = async (cuisine, nextLink) => {
    const url = nextLink === "" ? `http://localhost:4545/api/v1/edamam/cuisine/${cuisine}/null` :  `http://localhost:4545/api/v1/edamam/cuisine/${cuisine}/${nextLink}`;   
//   const url = `https://react-foodpicker-app-backend.herokuapp.com/api/v1/edamam/cuisine/${cuisine}`;
  try {
    const data = await axios.get(url);
    return data.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getDishRecipes = async (dish, nextLink) => {
    const url = nextLink === "" ? `http://localhost:4545/api/v1/edamam/dish/${dish}/null` :  `http://localhost:4545/api/v1/edamam/dish/${dish}/${nextLink}`;   
//   const url = `https://react-foodpicker-app-backend.herokuapp.com/api/v1/edamam/cuisine/${cuisine}`;
  try {
    const data = await axios.get(url);
    return data.data;
  } catch (e) {
    throw new Error(e);
  }
};
