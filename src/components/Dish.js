import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/DishStyles";

function Dish(props) {
  const { classes } = props;
  const cuisine = props.match.params.cuisine;
  const dish = props.match.params.dish;
  const dishInfo =
    props.location?.dishProps?.dishInfo ||
    JSON.parse(sessionStorage.getItem("dishInfo"));
  sessionStorage.setItem("dishInfo", JSON.stringify(dishInfo));
  const handleSearch = () => {
    window.open(`https://www.google.com/search?q=${dish}+near+me`);
  };
  const goBackLink = `/${cuisine}`;
  const usernameLink = `https://unsplash.com/@${dishInfo.username}?utm_source=foodpickerapp&utm_medium=referral`;
  const unsplashLink =
    "https://unsplash.com/?utm_source=foodpickerapp&utm_medium=referral";
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <h2 className={classes.title} onClick={handleSearch}>
          {dish}
        </h2>
        <h4>{dishInfo.desc}</h4>
        <img className={classes.img} src={dishInfo.url} alt={dishInfo.alt} />
        <h6>
          Photo by <a href={usernameLink}>{dishInfo.user}</a> on
          <a href={unsplashLink}> Unsplash</a>
        </h6>
        <div className={classes.buttonDiv}>
          <Link to={goBackLink}>
            <button className={classes.button1}>{cuisine} food</button>
          </Link>
          <Link to="/">
            <button className={classes.button2}>back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Dish);
