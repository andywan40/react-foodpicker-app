import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/DishStyles";

function Dish({ classes, history, match, location }) {
  const { cuisine, dish } = match.params;
  const dishInfo =
    location?.dishProps?.dishInfo ||
    JSON.parse(sessionStorage.getItem(`${dish.toLowerCase()}-dishInfo`));
  if (!dishInfo) {
    toast.error(`Can't Fetch ${dish} Data`, {
      position: "top-right",
      autoclose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: "custom",
      onClose: () => history.push("/"),
    });
  }

  useEffect(() => {
    sessionStorage.setItem(
      `${dish.toLowerCase()}-dishInfo`,
      JSON.stringify(dishInfo)
    );
  }, [dishInfo, dish]);

  const handleSearch = () => {
    window.open(`https://www.google.com/search?q=${dishInfo.title}+near+me`);
  };

  const buttonDivStyles = !dishInfo?.canGetRecipe
    ? {
        gridTemplateColumns: "repeat(2, 60%)",
      }
    : {};

  return (
    <div className={classes.root} data-testid="dish">
      <ToastContainer />
      {dishInfo && (
        <div className={classes.contentContainer}>
          <h2
            className={classes.title}
            onClick={handleSearch}
            data-testid="title"
          >
            {dishInfo.title}
          </h2>
          <h4 className={classes.desc}>{dishInfo.desc}</h4>
          <img
            className={classes.img}
            src={dishInfo.url}
            alt={dishInfo.alt}
            data-testid="img"
          />
          <h6>
            Photo by{" "}
            <a
              href={`https://unsplash.com/@${dishInfo.username}?utm_source=foodpickerapp&utm_medium=referral`}
            >
              {dishInfo.user}
            </a>{" "}
            on
            <a href="https://unsplash.com/?utm_source=foodpickerapp&utm_medium=referral">
              {" "}
              Unsplash
            </a>
          </h6>
          <div className={classes.buttonDiv} style={buttonDivStyles}>
            <Link to={`/${cuisine}`} className={classes.button1}>
              {cuisine} food
            </Link>
            {dishInfo.canGetRecipe && (
              <Link
                to={`/recipelist/${cuisine}/${dishInfo.title}`}
                className={classes.button2}
              >
                Get Recipes
              </Link>
            )}
            <Link to="/" className={classes.button2}>
              home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default withStyles(styles)(Dish);
