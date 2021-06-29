import React, { useState, useEffect, useCallback} from "react";
import { Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import { withStyles } from "@material-ui/styles";
import styles from "../styles/CuisineStyles";
import { getCuisinePhotos } from "../apis/cuisine";
import usePersistedState from "../hooks/usePersistedState";
import CuisineItem from "./CuisineItem";

function Cuisine({classes, match}) {
  const {cuisine} = match.params;
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
        <div className={classes.gridContainer}>
          {dishes.map((dish) => {
            const dishTitle = dish?.description?.length < 60 ? dish.description : dish.alt_description;
            //dish["alt_description"] = dish["alt_description"] || `${cuisine} Food`;
            const dishProps = {
              dishInfo: {
                url: dish.urls.regular,
                luminance: 1,
                title: dishTitle,
                desc: dish["alt_description"] || `${cuisine} Food`,
                user: dish.user.name,
                username: dish.user.username,
                tags: dish.tags
              },
              cuisine: cuisine,
            } 
            return (
              <CuisineItem key={nanoid()} dishProps={dishProps}/>
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
          <Link to={`/recipelist/cuisine/${cuisine}`} className={classes.button2}>
            Get Recipes
          </Link>
          <Link to="/" className={classes.button2}>
            home
          </Link>
        </div>}
      </div>
    </div>
  );
}

export default withStyles(styles)(Cuisine);
