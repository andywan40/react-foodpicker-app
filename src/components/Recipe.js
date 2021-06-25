import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/RecipeStyles";

function Recipe({classes, location, history}) {
    const recipe = location.recipe || JSON.parse(sessionStorage.getItem('recipeInfo'));
    useEffect(()=> {
        sessionStorage.setItem("recipeInfo", JSON.stringify(recipe));
    }, [recipe]);
    
    return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <h1 className={classes.title}>
          <a href={recipe.url} target="_blank" rel="noreferrer">{recipe.title}</a>
        </h1>
        <div className={classes.section}>
            <h4>ingredients</h4>
            <ul>
                {recipe.ingredientLines.map( ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ul>
        </div>
        <div className={classes.section}>
            <h4>diet labels</h4>
            <ul>
                {recipe.dietLabels.map( label => <li key={label}>{label}</li>)}
            </ul>
        </div>
        <div className={classes.section}>
            <h4>cuisine</h4>
            <ul>
                {[recipe.cuisine].map( cuisine => <li key={cuisine}>{cuisine}</li>)}
            </ul>
        </div>
        <div className={classes.section}>
            <h4>calories</h4>
            <ul>
                {[recipe.calories].map( calories => <li key={calories}>{calories}</li>)}
            </ul>
        </div>
        <img className={classes.img} src={recipe.image} alt={recipe.title} />
        <div className={classes.buttonDiv}>
          <button className={classes.button1} onClick={()=> history.goBack()}>go back</button>
          <Link to="/">
            <button className={classes.button2}>home page</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Recipe);