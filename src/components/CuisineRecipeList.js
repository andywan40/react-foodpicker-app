import React, {useState, useEffect, useCallback} from 'react'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { withStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "../styles/RecipeListStyles";
import {getCuisineRecipes } from "../apis/recipes";
import usePersistedState from "../hooks/usePersistedState";
import RecipeItem from './RecipeItem';


function CuisineRecipeList({classes, history, match}) {
    const {cuisine} = match.params;
    const [recipes, setRecipes] = usePersistedState( `recipes-${cuisine}`, []);
    const [nextLink, setNextLink] = usePersistedState( `nextLink-${cuisine}` , "");
    const [isLoading, setIsLoading] = useState(false);
    const handleRecipeData = useCallback( async () => {
      setIsLoading(true);
      try{
        const data = await getCuisineRecipes(cuisine, nextLink);
        setRecipes( recipes => [...recipes, ...data.hits]);
        setNextLink( data.nextLink);
        setIsLoading(false);
      }catch(e){
        toast.error(`Can't Fetch ${cuisine} Food Recipes!`, {
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
        //setIsLoading(false);
      }
    }, [cuisine, nextLink, setNextLink, setRecipes, history]);

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
            <ToastContainer/>
            <h2 className={classes.title}>
              {`${cuisine} Food Recipes`}
            </h2>
            <div id="edamam-badge" data-color="white"></div>
            { isLoading && recipes.length === 0 ? <CircularProgress className={classes.icon}/> : 
            <div className={classes.gridContainer}>
              {recipes.map(({recipe}) => {
                const title = recipe?.label || `${cuisine} food`;
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
                  <RecipeItem recipe={recipeObj} key={title}/>
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
              <Link to={`/${cuisine}`} className={classes.button2}>
                {cuisine} food
              </Link>
              <Link to="/" className={classes.button2}>
                home
              </Link>
            </div>}
          </div>
        </div>
    )
}


export default withStyles(styles)(CuisineRecipeList);