import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/DishStyles";

function Dish(props) {
  const { classes } = props;
  const dish = props.match.params.dish;
  const dishInfo = props.location.dishProps.dishInfo;
  const cuisine = props.location.dishProps.cuisine;
  const handleSearch = () => {
    window.open(`https://www.google.com/search?q=${dish}+near+me`);
  };
  const goBackLink = `/cuisine/${cuisine}`;
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <h2 className={classes.title} onClick={handleSearch}>
          {dish}
        </h2>
        <h4>{dishInfo.desc}</h4>
        <img src={dishInfo.url} alt={dishInfo.alt} />
        <h6>Credit to {dishInfo.user}</h6>
        <div>
        <Link to={goBackLink}>
            <button className={classes.button1}>
              {cuisine} food
            </button>
          </Link>
          <Link to="/">
            <button className={classes.button2}>
              back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Dish);
