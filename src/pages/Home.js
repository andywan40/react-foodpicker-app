import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import styles from "../styles/HomeStyles";
import foods from "../helperFunctions/foods";
import { getRandomItem } from "../helperFunctions/random";

function Home(props) {
  const { classes } = props;
  const [cuisine, setCuisine] = useState("");
  const [dish, setDish] = useState("");
  const handleClick = () => {
    //call api
    const item = getRandomItem(foods);
    const cuisine = item.cuisine;
    const dishes = item.dishes;
    const dish = getRandomItem(dishes);
    setCuisine(cuisine);
    setDish(dish);
  };
  const handleSearch = item => {
    window.open(`https://www.google.com/search?q=${item}+near+me`);
  }
  return (
    <div className={classes.Home}>
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
