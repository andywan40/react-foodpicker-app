import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
//import foods from "../helperFunctions/foods";
import { key, baseUrl } from "../helperFunctions/data";
import styles from "../styles/CuisineStyles";

function Cuisine(props) {
  console.log(props);
  const { classes } = props;
  const cuisine = props.match.params.cuisine;
  const [dishes, setDishes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10000);
  const canLoadMore = currentPage < totalPages;
  useEffect(() => {
    console.log("run");
    //call api
    getCuisinePhotos();
  }, []);

  const getCuisinePhotos = async () => {
    const url = `${baseUrl}/search/photos?query=${cuisine}+food&page=${currentPage}&per_page=9&client_id=${key}`;
    try {
      const data = await axios.get(url);
      console.log(data);
      const photos = data.data.results;
      let newDishes = [...dishes, ...photos];
      setDishes(newDishes);
      setCurrentPage(currentPage + 1);
      if (data.data["total_pages"] !== totalPages)
        setTotalPages(data.data["total_pages"]);
    } catch (e) {
      console.log(e);
      setDishes([]);
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
            return (
              <Link
                className={classes.imageContainer}
                key={dish["id"]}
                to={{
                  pathname: `/dish/${dish["alt_description"]}`,
                  dishProps: {
                    dishInfo: { 
                        url: dish.urls.regular,
                        luminance: 1,
                        desc: dish["alt_description"],
                        user: dish.user.name,
                        username: dish.user.username
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
        <div>
          <button
            className={classes.button1}
            onClick={getCuisinePhotos}
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
