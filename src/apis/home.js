import axios from "axios";

export const getDishPhoto = async (dish) => {
  const url = `https://react-foodpicker-app-backend.herokuapp.com/api/v1/unsplash/dish/${dish}`
  try{
    const data = await axios.get(url);
    return data.data;
  }catch(e){
    throw new Error(e);
  }
  
};

export const getCuisinePhoto = async (cuisine) => {
  const url = `https://react-foodpicker-app-backend.herokuapp.com/api/v1/unsplash/cuisine/${cuisine}/1`
  try{
    const data = await axios.get(url);
    return data.data;
  }catch(e){
    throw new Error(e);
  }
  
};

