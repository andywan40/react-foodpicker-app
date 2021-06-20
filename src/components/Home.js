import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import CircularProgress from "@material-ui/core/CircularProgress";
import foods from "../helpers/foods";
import { getRandomItem } from "../helpers/random";
import { getLuminance } from "../helpers/colorHelpers";
import { getDishPhoto, getCuisinePhoto } from "../apis/home";
import styles from "../styles/HomeStyles";
import background from "../images/homebg.jpg";

function Home(props) {
  const { classes } = props;
  const [cuisine, setCuisine] = useState("");
  const [dish, setDish] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bgImg, setBgImg] = useState({
    url: background,
    luminance: 1,
    desc: "",
    user: "Brooke Lark",
    username: "brookelark",
  });

  const usernameLink = `https://unsplash.com/@${bgImg.username}?utm_source=foodpickerapp&utm_medium=referral`;
  const unsplashLink = "https://unsplash.com/?utm_source=foodpickerapp&utm_medium=referral";

  const getFood = async () => {
    setIsLoading(true);
    const item = getRandomItem(foods);
    const cuisine = item.cuisine;
    const dish = getRandomItem(item.dishes);
    try {
      const data = await getDishPhoto(dish);
      dealWithPhotoData(data);
    } catch (e) {
      try {
        const data = await getCuisinePhoto(cuisine);
        dealWithPhotoData(data);
      } catch (e) {
        setBgImg({ url: background, luminance: 1, desc: "", user: "" });
      }
    }
    setCuisine(cuisine);
    setDish(dish);
    setIsLoading(false);
  };

  const dealWithPhotoData = (res) => {
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
  };

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

  const icon = isLoading ? (
    <CircularProgress className={classes.icon} />
  ) : (
    <RestaurantIcon className={classes.icon} onClick={getFood} />
  );

  return (
    <div className={classes.Home} style={styles}>
      <div>
        <h1 className={classes.title}>What To Eat?</h1>
        {icon}
      </div>
      <div className={classes.result}>
        <Link to={cuisineObj} className={classes.link}>
          <h2 className={classes.cuisine}>{cuisine}</h2>
        </Link>
        <Link to={dishObj} className={classes.link}>
          <h3 className={classes.dish}>{dish}</h3>
        </Link>
      </div>
      <h6 className={classes.hrefLink}>
        Photo by <a href={usernameLink}>{bgImg.user}</a> on
        <a href={unsplashLink}> Unsplash</a>
      </h6>
    </div>
  );
}

export default withStyles(styles)(Home);
