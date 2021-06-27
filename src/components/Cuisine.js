import React, { useState, useEffect, useCallback} from "react";
import { Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import { withStyles } from "@material-ui/styles";
import styles from "../styles/CuisineStyles";
import { getCuisinePhotos } from "../apis/cuisine";
import usePersistedState from "../hooks/usePersistedState";

function Cuisine(props) {
  const { classes } = props;
  const {cuisine} = props.match.params;
  const [dishes, setDishes] = usePersistedState(cuisine, []);
  const [currentPage, setCurrentPage] = usePersistedState(`currentPage-${cuisine}`, 1);
  const [totalPages, setTotalPages] = usePersistedState(`totalPages-${cuisine}`, 1000000);
  const [isLoading, setIsLoading] = useState(false);
  const canLoadMore = currentPage < totalPages;
  const handleFetchCuisinePhotos = useCallback( async ( food, page)=> {
    setIsLoading(true);
    try {
      const data = await getCuisinePhotos(food, page);
      const newDishes = data.results;
      setDishes([...dishes, ...newDishes]);
      setCurrentPage( pg => pg + 1);
      if (data.total_pages !== totalPages) setTotalPages(data.total_pages);
      setIsLoading(false);
    } catch (e) {
      setDishes([]);
      toast.error(`Can't Load ${cuisine} Food Pictures!`, {
          position: "top-right",
          autoclose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "custom"
      });
      setIsLoading(false);
    }
  }, [cuisine, dishes, setCurrentPage, setDishes, setTotalPages, totalPages]);

  useEffect(()=> {
    if(dishes.length === 0) handleFetchCuisinePhotos(cuisine, currentPage);
  }, [cuisine, currentPage, dishes, handleFetchCuisinePhotos]);

  const handleSearch = () => {
    window.open(`https://www.google.com/search?q=${cuisine}+food+near+me`);
  };

  return (
    <div className={classes.root} data-testid="cuisine">
      <div className={classes.contentContainer}>
        <ToastContainer />
        <h2 className={classes.title} onClick={handleSearch} data-testid="title">
          {cuisine} Food
        </h2>
        {!isLoading && <Link to={`/recipelist/cuisine/${cuisine}`}>
            <button className={classes.recipeButton}>Get Recipes</button>
        </Link>}
        <div className={classes.gridContainer}>
          {dishes.map((dish) => {
            const dishTitle = dish?.description?.length < 60 ? dish.description : dish.alt_description;
            dish["alt_description"] = dish["alt_description"] || `${cuisine} Food`;
            return (
              <Link
                className={classes.imageContainer}
                key={nanoid()} //british food photos have duplicate keys
                to={{
                  pathname: `/${cuisine}/${dish["alt_description"]}`,
                  dishProps: {
                    dishInfo: {
                      url: dish.urls.regular,
                      luminance: 1,
                      title: dishTitle,
                      desc: dish["alt_description"],
                      user: dish.user.name,
                      username: dish.user.username,
                      tags: dish.tags
                    },
                    cuisine: cuisine,
                  },
                }}
              >
                <img
                  className={classes.dishImg}
                  src={dish.urls.regular}
                  alt={dish.description}
                />
                <div className={classes.dishImgText}>
                  {dishTitle}
                </div>
              </Link>
            );
          })}
        </div>
        {!isLoading && <div className={classes.buttonDiv }>
          <button
            className={classes.button1}
            onClick={()=> handleFetchCuisinePhotos(cuisine, currentPage)}
            disabled={!canLoadMore}
          >
            load more
          </button>
          <Link to="/">
            <button className={classes.button2}>home</button>
          </Link>
        </div>}
      </div>
    </div>
  );
}

export default withStyles(styles)(Cuisine);
