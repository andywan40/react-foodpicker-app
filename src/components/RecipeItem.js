import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/RecipeItemStyles";

function RecipeItem({classes, recipe}) {
    const {title, image, cuisine} = recipe;
    return (
        <Link
            className={classes.imageContainer}
            key={title}
            to={{
                pathname: `/recipe/${cuisine}/${title}`,
                recipe
            }}
        >
            <img
                className={classes.recipeImg}
                src={image}
                alt={title}
            />
            <div className={classes.recipeImgText}>{title}</div>
        </Link>
    )
}

export default withStyles(styles)(RecipeItem);