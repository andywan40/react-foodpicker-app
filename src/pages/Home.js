import React, { useState } from "react";
// import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { withStyles } from "@material-ui/styles";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import styles from "../styles/HomeStyles";
import foods from "../helperFunctions/foods";
import { getRandomItem } from "../helperFunctions/random";
import background from "../images/homebg.jpg";

//TODO change text color depending on background darkness
function Home(props) {
  const { classes } = props;
  const [cuisine, setCuisine] = useState("");
  const [dish, setDish] = useState("");
  const [bgImg, setBgImg] = useState(background);
  const key = "v0QNKQFmkR9rzeGbt9wHp6CL1Ow4cJLBlCJOHS1X9vE";
  const baseUrl = "https://api.unsplash.com";
  const handleClick = () => {
    //call api
    const item = getRandomItem(foods);
    const cuisine = item.cuisine;
    const dishes = item.dishes;
    const dish = getRandomItem(dishes);
    setCuisine(cuisine);
    setDish(dish);
    getPhoto(dish);
  };
  const handleSearch = (item) => {
    window.open(`https://www.google.com/search?q=${item}+near+me`);
  };
  const getPhoto = async (dish) => {
    let url = `${baseUrl}/search/photos?query=${dish}&client_id=${key}`;
    let data = await axios.get(url);
    let photos = data.data.results;
    let photo;
    if (photos.length !== 0){
        photo = getRandomItem(photos).urls.regular;
    }else{
        url = `${baseUrl}/search/photos?query=${cuisine}&client_id=${key}`;
        data = await axios.get(url);
        photos = data.data.results;
        photo = getRandomItem(photos).urls.regular;
    }
    console.log(photos)
    setBgImg(photo);
  };
  return (
    <div className={classes.Home} style={{backgroundImage: `url(${bgImg})`}}>
      <div>
        <h1 className={classes.title}>What To Eat?</h1>
        <RestaurantIcon
          className={classes.restaurantIcon}
          onClick={handleClick}
        />
      </div>
      <div className={classes.result}>
        <h3 onClick={() => handleSearch(cuisine)}>{cuisine}</h3>
        <h4 onClick={() => handleSearch(dish)}>{dish}</h4>
      </div>
      {/* <img src={bgImg} alt="pic" width="100" height="100" /> */}
      
    </div>
  );
}

export default withStyles(styles)(Home);
