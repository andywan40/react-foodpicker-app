import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withStyles } from "@material-ui/styles";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import styles from "../styles/HomeStyles";
import foods from "../helperFunctions/foods";
import { getRandomItem } from "../helperFunctions/random";
import { getLuminance } from "../helperFunctions/colorHelpers";
import background from "../images/homebg.jpg";
import {key,baseUrl} from "../helperFunctions/data";

function Home(props) {
  const { classes } = props;
  const [cuisine, setCuisine] = useState("");
  const [dish, setDish] = useState("");
  const [bgImg, setBgImg] = useState({ url: background, luminance: 1, desc: "" , user: "", username: ""});

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

  const getDishPhoto = async (dish, cuisine) => {
    const url = `${baseUrl}/search/photos?query=${dish}&client_id=${key}`;
    try {
      const data = await axios.get(url);
      const photos = data.data.results;
      const photo = getRandomItem(photos);
      console.log(photo);
      setBgImg({
        url: photo.urls.regular,
        luminance: getLuminance(photo.color),
        desc: photo["alt_description"],
        user: photo.user.name,
        username: photo.user.username
      });
    } catch (e) {
      getCuisinePhoto(cuisine);
    }
  };

  const getCuisinePhoto = async (cuisine) => {
    const url = `${baseUrl}/search/photos?query=${cuisine}food&client_id=${key}`;
    try {
      const data = await axios.get(url);
      const photos = data.data.results;
      const photo = getRandomItem(photos);
      setBgImg({
        url: photo.urls.regular,
        luminance: getLuminance(photo.color),
        desc: photo["alt_description"],
        user: photo.user.name,
        username: photo.user.username
      });
    } catch (e) {
      setBgImg({ url: background, luminance: 1 , desc: "", user: ""});
    }
  };

  const textColor = bgImg.luminance < 0.725 ? "white" : "black"; //luminacne is 1 => bg is white, text should be dark

  const styles = {
    backgroundImage: `url(${bgImg.url})`,
    color: textColor,
    textShadow: "2px 2px grey",
  };

  const cuisineObj = {
    pathname: `/cuisine/${cuisine}`,
    cuisineProps: {
      photo: bgImg,
    },
  };

  const dishObj = {
    pathname: `/dish/${dish}`,
    dishProps: {
      dishInfo: bgImg,
      cuisine: cuisine
    },
  };

  return (
    <div className={classes.Home} style={styles}>
      <div>
        <h1 className={classes.title}>What To Eat?</h1>
        <RestaurantIcon className={classes.restaurantIcon} onClick={getFood} />
      </div>
      <div className={classes.result}>
        <Link to={cuisineObj} className={classes.link}>
          <h2 className={classes.cuisine}>{cuisine}</h2>
        </Link>
        <Link to={dishObj} className={classes.link}>
          <h3 className={classes.dish}>{dish}</h3>
        </Link>
      </div>
    </div>
  );
}

export default withStyles(styles)(Home);
