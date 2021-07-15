import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/CuisineItemStyles";

function CuisineItem({ classes, dishProps }) {
  const { title, url, desc } = dishProps.dishInfo;
  const { cuisine } = dishProps;
  return (
    <Link
      className={classes.imageContainer}
      to={{
        pathname: `/${cuisine}/${desc}`,
        dishProps,
      }}
    >
      <img className={classes.dishImg} src={url} alt={desc} />
      <div className={classes.dishImgText}>{title}</div>
    </Link>
  );
}

export default withStyles(styles)(CuisineItem);
