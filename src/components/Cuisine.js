import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCuisinePhotos } from "../apis/cuisine";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/CuisineStyles";
import usePersistedState from "../hooks/usePersistedState";

function Cuisine(props) {
  console.log('render')
  const { classes } = props;
  const cuisine = props.match.params.cuisine;
  const [dishes, setDishes] = usePersistedState(cuisine, []);
  const [currentPage, setCurrentPage] = usePersistedState(`currentPage-${cuisine}`, 1);
  const [totalPages, setTotalPages] = usePersistedState(`totalPages-${cuisine}`, 1000000);
  const canLoadMore = currentPage < totalPages;

  useEffect(()=> {
    if(dishes.length === 0) handleFetchCuisinePhotos(cuisine, currentPage);
  }, []);

  const handleFetchCuisinePhotos = async ( food, page)=> {
    try {
      const data = await getCuisinePhotos(food, page);
      const newDishes = data.results;
      setDishes([...dishes, ...newDishes]);
      setCurrentPage( pg => pg + 1);
      if (data.total_pages !== totalPages) setTotalPages(data.total_pages);
    } catch (e) {
        setDishes([]);
        alert(`Something went wrong! Can't load ${cuisine} food pictures.`)
    }
  };

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
          {dishes.map((dish) => {
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
        <div className={classes.buttonDiv }>
          <button
            className={classes.button1}
            onClick={()=> handleFetchCuisinePhotos(cuisine, currentPage)}
            disabled={!canLoadMore}
          >
            load more
          </button>
          <Link to="/">
            <button className={classes.button2}>back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Cuisine);
