import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { withStyles } from "@material-ui/styles";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import CircularProgress from "@material-ui/core/CircularProgress";
import foods from "../helpers/foods";
import { getRandomItem } from "../helpers/random";
import { getLuminance } from "../helpers/colorHelpers";
import { getDishPhoto, getCuisinePhoto } from "../apis/home";
import styles from "../styles/HomeStyles";
import background from "../images/homebg.jpg";

function Home({classes}) {
  const [cuisine, setCuisine] = useState("");
  const [dish, setDish] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bgImg, setBgImg] = useState({
    url: background,
    luminance: 1,
    title: "",
    desc: "",
    user: "Brooke Lark",
    username: "brookelark",
    canGetRecipe: false
  });

  const getFood = async () => {
    setIsLoading(true);
    const item = getRandomItem(foods);
    const cuisine = item.cuisine;
    const dish = getRandomItem(item.dishes);
    try {
      const data = await getDishPhoto(dish);
      dealWithPhotoData(data, dish);
    } catch (e) {
      try {
        const data = await getCuisinePhoto(cuisine);
        dealWithPhotoData(data, dish);
      } catch (e) {
        toast.error(`Can't Load Food Pic!`, {
          position: "top-right",
          autoclose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "custom"
      });
        setBgImg({ url: background, luminance: 1, desc: "", user: "Brooke Lark", username: "brookelark", title: "", canGetRecipe: false});
      }
    }
    setCuisine(cuisine);
    setDish(dish);
    setIsLoading(false);
  };

  const dealWithPhotoData = (res, chosenDish) => {
    const photos = res.results;
    const photo = photos[0];
    setBgImg({
      url: photo.urls.regular,
      luminance: getLuminance(photo.color),
      title: chosenDish || photo.description,
      desc: photo.alt_description,
      user: photo.user.name,
      username: photo.user.username,
      canGetRecipe: true
    });
  };

  const textColor = bgImg.luminance < 0.725 ? "white" : "black"; //luminacne is 1 => bg is white, text should be dark
  const styles = {
    backgroundImage: `url(${bgImg.url})`,
    color: textColor,
    textShadow: "1px 1px grey",
  };

  const cuisineObj = {
    pathname: `/${cuisine}`,
    cuisineProps: {
      photo: bgImg,
    },
  };

  const dishObj = {
    pathname: bgImg.canGetRecipe ? `/${cuisine}/${dish}` : "#",
    dishProps: {
      dishInfo: bgImg,
      cuisine: cuisine,
    },
  };

  const icon = isLoading ? (
    <CircularProgress className={classes.icon} />
  ) : (
    <RestaurantIcon className={classes.icon} onClick={getFood} />
  );

  return (
    <div className={classes.Home} style={styles}>
      <ToastContainer />
      <div>
        <h1 className={classes.title}>What To Eat?</h1>
        {icon}
      </div>
      <div className={classes.result}>
        <Link to={cuisineObj} className={classes.link}>
          <h2 className={classes.cuisine}>{cuisine}</h2>
        </Link>
        {bgImg.canGetRecipe ? <Link to={dishObj} className={classes.link}>
          <h3 className={classes.dish}>{dish}</h3>
        </Link>: <h3 className={classes.disabledDish}>{dish}</h3>}
      </div>
      <h6 className={classes.hrefLink}>
        Photo by <a href={`https://unsplash.com/@${bgImg.username}?utm_source=foodpickerapp&utm_medium=referral`}>{bgImg.user}</a> on
        <a href="https://unsplash.com/?utm_source=foodpickerapp&utm_medium=referral"> Unsplash</a>
      </h6>
    </div>
  );
}

export default withStyles(styles)(Home);
