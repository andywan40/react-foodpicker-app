import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { withStyles } from "@material-ui/styles";
import styles from "../styles/DishStyles";

function Dish(props) {
  const { classes, history } = props;
  const { cuisine, dish} = props.match.params;
  const dishInfo = props.location?.dishProps?.dishInfo || JSON.parse(sessionStorage.getItem(`${dish.toLowerCase()}-dishInfo`));
  if(!dishInfo){
    toast.error(`Can't Fetch ${dish} Data`, {
          position: "top-right",
          autoclose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "custom",
          onClose: () => history.push("/")
    });
  }
  useEffect(()=> {
    sessionStorage.setItem(`${dish.toLowerCase()}-dishInfo`, JSON.stringify(dishInfo));
  }, [dishInfo, dish])
  const handleSearch = () => {
    window.open(`https://www.google.com/search?q=${dishInfo.title}+near+me`);
  };
  
  return (
    <div className={classes.root}>
      <ToastContainer/>
      {
        dishInfo && 
      <div className={classes.contentContainer}>
        <h2 className={classes.title} onClick={handleSearch}>
          {dishInfo.title}
        </h2>
        <h4>{dishInfo.desc}</h4>
        {dishInfo.canGetRecipe && <Link to={`/recipelist/${cuisine}/${dishInfo.title}`}>
            <button className={classes.recipeButton}>Get Recipes</button>
        </Link>}
        <img className={classes.img} src={dishInfo.url} alt={dishInfo.alt} />
        <h6>
          Photo by <a href={`https://unsplash.com/@${dishInfo.username}?utm_source=foodpickerapp&utm_medium=referral`}>{dishInfo.user}</a> on
          <a href="https://unsplash.com/?utm_source=foodpickerapp&utm_medium=referral"> Unsplash</a>
        </h6>
        <div className={classes.buttonDiv}>
          <Link to={`/${cuisine}`}>
            <button className={classes.button1}>{cuisine} food</button>
          </Link>
          <Link to="/">
            <button className={classes.button2}>home</button>
          </Link>
        </div>
      </div>
      }
    </div>
  );
}

export default withStyles(styles)(Dish);
