import React, { useState } from "react";
// import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { withStyles } from "@material-ui/styles";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import styles from "../styles/HomeStyles";
import foods from "../helperFunctions/foods";
import { getRandomItem } from "../helperFunctions/random";
import background from "../images/homebg.jpg";

function Home(props) {
  const { classes } = props;
  const [cuisine, setCuisine] = useState("");
  const [dish, setDish] = useState("");
  const [bgImg, setBgImg] = useState(background);
  const handleClick = () => {
    //call api
    const item = getRandomItem(foods);
    const cuisine = item.cuisine;
    const dishes = item.dishes;
    const dish = getRandomItem(dishes);
    setCuisine(cuisine);
    setDish(dish);
    getPhoto();
  };
  const handleSearch = item => {
    window.open(`https://www.google.com/search?q=${item}+near+me`);
  }
  const getPhoto = async () => {
    const url = `https://api.pexels.com/v1/search?query=burger`;
    const headers = {
        Authorization: "563492ad6f91700001000001c6185b83741d425ca01d38c2a33e143f"
    }
    const data = await axios.get(url, {headers});
    const photos = data.data.photos;
    const photo = getRandomItem(photos).url;
    setBgImg(photo);
    
  }
  return (
    <div className={classes.Home} style={{backgroundImage: `url(${bgImg})`}}>
      <div>
        <h1 className={classes.title}>What To Eat?</h1>
        <RestaurantIcon className={classes.restaurantIcon} onClick={handleClick}/>
      </div>
      <div className={classes.result}>
        <h3 onClick={ () => handleSearch(cuisine)}>{cuisine}</h3>
        <h4 onClick={ () => handleSearch(dish)}>{dish}</h4>
      </div>
    </div>
  );
}

export default withStyles(styles)(Home);
