import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import foods from "../helperFunctions/foods";
import { getRandomItem } from "../helperFunctions/random";
import { getLuminance } from "../helperFunctions/colorHelpers";
import { getDishPhoto, getCuisinePhoto } from "../apis/home";
import styles from "../styles/HomeStyles";
import background from "../images/homebg.jpg";

function Home(props) {
  const { classes } = props;
  const [cuisine, setCuisine] = useState("");
  const [dish, setDish] = useState("");
  const [bgImg, setBgImg] = useState({
    url: background,
    luminance: 1,
    desc: "",
    user: "",
    username: "",
  });

  const getFood = async () => {
    const item = getRandomItem(foods);
    const cuisine = item.cuisine;
    const dish = getRandomItem(item.dishes);
    try{
        const data = await getDishPhoto(dish);
        dealWithPhotoData(data);
    }catch(e){
        try{
            const data = await getCuisinePhoto(cuisine);
            dealWithPhotoData(data);
        } catch(e){
            setBgImg({ url: background, luminance: 1, desc: "", user: "" });
        }  
    }
    setCuisine(cuisine);
    setDish(dish);
  };

  const dealWithPhotoData = res => {
    const photos = res.results;
    //const photo = photos[0];
    const photo = getRandomItem(photos);
    setBgImg({
      url: photo.urls.regular,
      luminance: getLuminance(photo.color),
      desc: photo["alt_description"],
      user: photo.user.name,
      username: photo.user.username,
    });
  }

  const textColor = bgImg.luminance < 0.725 ? "white" : "black"; //luminacne is 1 => bg is white, text should be dark
  const styles = {
    backgroundImage: `url(${bgImg.url})`,
    color: textColor,
    textShadow: "2px 2px grey",
  };

  const cuisineObj = {
    pathname: `/${cuisine}`,
    cuisineProps: {
      photo: bgImg,
    },
  };

  const dishObj = {
    pathname: `/${cuisine}/${dish}`,
    dishProps: {
      dishInfo: bgImg,
      cuisine: cuisine,
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
