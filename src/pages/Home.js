import React, { useState } from "react";
// import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { withStyles } from "@material-ui/styles";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import styles from "../styles/HomeStyles";
import foods from "../helperFunctions/foods";
import { getRandomItem } from "../helperFunctions/random";
import { getLuminance } from "../helperFunctions/colorHelpers";
import background from "../images/homebg.jpg";

//TODO change text color depending on background darkness
function Home(props) {
  const { classes } = props;
  const [cuisine, setCuisine] = useState("");
  const [dish, setDish] = useState("");
  const [bgImg, setBgImg] = useState({url: background, luminance: 1});
  const key = "v0QNKQFmkR9rzeGbt9wHp6CL1Ow4cJLBlCJOHS1X9vE";
  const baseUrl = "https://api.unsplash.com";
  const getFood = () => {
    //call api
    const item = getRandomItem(foods);
    const cuisine = item.cuisine;
    const dishes = item.dishes;
    const dish = getRandomItem(dishes);
    getDishPhoto(dish, cuisine);
    setCuisine(cuisine);
    setDish(dish);
    
  };

  const handleSearch = (item) => {
    window.open(`https://www.google.com/search?q=${item}+near+me`);
  };

  const getDishPhoto = async (dish, cuisine) => {
    const url = `${baseUrl}/search/photos?query=${dish}&client_id=${key}`;
    try{
        const data = await axios.get(url);
        const photos = data.data.results;
        const photo = getRandomItem(photos);
        setBgImg({url: photo.urls.regular, luminance: getLuminance(photo.color)});
    }catch(e){
        getCuisinePhoto(cuisine);
    }
  }

  const getCuisinePhoto = async (cuisine) => {
    const url = `${baseUrl}/search/photos?query=${cuisine}-food&client_id=${key}`;
    try{
        const data = await axios.get(url);
        const photos = data.data.results;
        const photo = getRandomItem(photos);
        setBgImg({url: photo.urls.regular, luminance: getLuminance(photo.color)});
    }catch(e){
        setBgImg({url: background, luminance: 1});
    }
  }
  
  const textColor = bgImg.luminance < 0.75 ? "white": "black"; //luminacne is 1 => bg is white, text should be dark
  const styles ={
      backgroundImage: `url(${bgImg.url})`,
      color: textColor,
      textShadow: "2px 2px grey"
  };

  //style={{backgroundImage: `url(${bgImg.url})`, color: textColor, textShadow: "2px 2px grey"}}
  return (
    <div className={classes.Home} style={styles}>
      <div>
        <h1 className={classes.title}>What To Eat?</h1>
        <RestaurantIcon
          className={classes.restaurantIcon}
          onClick={getFood}
        />
      </div>
      <div className={classes.result}>
        <h2 className={classes.cuisine} onClick={() => handleSearch(cuisine)}>{cuisine}</h2>
        <h3 className={classes.dish} onClick={() => handleSearch(dish)}>{dish}</h3>
      </div>
      {/* <img src={bgImg} alt="pic" width="150" height="150" /> */}
      
    </div>
  );
}

export default withStyles(styles)(Home);
