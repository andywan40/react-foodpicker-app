import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCuisinePhotos } from "../apis/cuisine";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/CuisineStyles";
import usePersistedState from "../hooks/usePersistedState";

function Cuisine1(props) {
  const { classes } = props;
  const cuisine = props.match.params.cuisine;
  const [currentPage, setCurrentPage] = usePersistedState(`currentPage-${cuisine}`, 1);
  const [dishes, setDishes] = usePersistedState(cuisine, []);
  const [totalPages, setTotalPages] = usePersistedState(`totalPages-${cuisine}`, 1000000);
  const [isLoading, setIsLoading] = useState(false);
  const canLoadMore = currentPage < totalPages;
  const loadMore = () => {
    setCurrentPage( page => page + 1);
  }
  
  console.log(dishes, totalPages, currentPage)

  useEffect( ()=> {
    const fetchPhotos = async () => {
      try{
        const data = await getCuisinePhotos(cuisine, currentPage);
        setDishes(dishes => [...dishes, ...data.results]);
        if(totalPages !== data.total_pages) setTotalPages(data.total_pages);
      }catch(e){
        console.log(e);
      } 
    }
    if(dishes.length === 0){
      fetchPhotos();
    }
  }, [])



  useEffect(()=> {
    const fetchPhotos = async () => {
      try{
        const data = await getCuisinePhotos(cuisine, currentPage);
        setDishes(dishes => [...dishes, ...data.results]);
        if(totalPages !== data.total_pages) setTotalPages(data.total_pages);
      }catch(e){
        console.log(e);
      } 
    }

    fetchPhotos();
  }, [cuisine, currentPage, setDishes, setTotalPages]);

  const handleSearch = () => {
    window.open(`https://www.google.com/search?q=${cuisine}+food+near+me`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <h2 className={classes.title} onClick={handleSearch}>
          {cuisine} Food
        </h2>
        <div className={classes.gridContainer}>
          {dishes && dishes.map((dish) => {
            dish["alt_description"] = dish["alt_description"] || `${cuisine} Food`
            return (
              <Link
                className={classes.imageContainer}
                key={dish["id"]}
                to={{
                  pathname: `/${cuisine}/${dish["alt_description"]}`,
                  dishProps: {
                    dishInfo: {
                      url: dish.urls.regular,
                      luminance: 1,
                      desc: dish["alt_description"],
                      user: dish.user.name,
                      username: dish.user.username,
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
                  {dish["alt_description"]}
                </div>
              </Link>
            );
          })}
        </div>
        {!isLoading &&  <div className={classes.buttonDiv }>
          <button
            className={classes.button1}
            onClick={loadMore}
            disabled={!canLoadMore}
          >
            load more
          </button>
          <Link to="/">
            <button className={classes.button2}>back</button>
          </Link>
        </div>}
      </div>
    </div>
  );
}

export default withStyles(styles)(Cuisine1);
