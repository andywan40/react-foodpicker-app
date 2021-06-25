import React, {useState, useEffect, useCallback} from 'react'
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "../styles/RecipeListStyles";
import {getDishRecipes } from "../apis/recipes";
import usePersistedState from "../hooks/usePersistedState";
import RecipeItem from './RecipeItem';

function DishRecipeList(props) {
    const {classes} = props;
    const {cuisine} = props.match.params;
    const {dish} = props.match.params;
    const [recipes, setRecipes] = usePersistedState( `recipes-${dish}`, []);
    const [nextLink, setNextLink] = usePersistedState( `nextLink-${dish}` , "");
    const [isLoading, setIsLoading] = useState(false);
    const handleRecipeData = useCallback( async () => {
      setIsLoading(true);
      try{
        const data = await getDishRecipes(dish, nextLink);
        setRecipes( recipes => [...recipes, ...data.hits]);
        setNextLink( data.nextLink);
        setIsLoading(false);
      }catch(e){
        alert(`Can't fetch ${dish} recipes!`);
      }
    }, [dish, nextLink, setNextLink, setRecipes]);

    useEffect(()=> { 
        const fetchRecipes = async () => {
            handleRecipeData();
        }
        if(recipes.length === 0) fetchRecipes();
    }, [handleRecipeData, recipes]);

    const handleLoadMoreButtonClick = async () => {
      if(nextLink !== ""){
        handleRecipeData();
      }
    }

    return (
        <div className={classes.root}>
          <div className={classes.contentContainer}>
            <h2 className={classes.title}>
              {`${dish} Recipes`}
            </h2>
            <div id="edamam-badge" data-color="white"></div>
            { isLoading && recipes.length === 0 ? <CircularProgress className={classes.icon}/> : 
            <div className={classes.gridContainer}>
              {recipes.map(({recipe}, idx) => {
                const title = recipe?.label || dish;
                const recipeObj = {
                  title,
                  image: recipe.image,
                  cuisine,
                  url: recipe.url,
                  calories: recipe.calories,
                  dietLabels: recipe.dietLabels,
                  ingredientLines: recipe.ingredientLines
                }
                return (
                  <RecipeItem recipe={recipeObj} key={`${title}-${idx}`}/>
                );
              })}
            </div>}
            {!isLoading && <div className={classes.buttonDiv }>
              <button
                className={classes.button1}
                onClick={()=> handleLoadMoreButtonClick()}
                disabled={nextLink === ""}
              >
                load more
              </button>
              <Link to={`/${cuisine}/${dish}`}>
                <button className={classes.button1}>{dish}</button>
              </Link>
              <Link to="/">
                <button className={classes.button2}>home</button>
              </Link>
            </div>}
          </div>
        </div>
    )
}


export default withStyles(styles)(DishRecipeList);