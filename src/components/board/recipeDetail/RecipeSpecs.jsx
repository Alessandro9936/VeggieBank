import React from "react";

import classes from "../../../styles/RecipeSpecs.module.css";

export function RecipeSpecs(props) {
  return (
    <div className={classes.ingredient}>
      <div className={classes["ingredient-image"]}>
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/${props.image}`}
          alt="ingredient image"
        />
      </div>
      <div className={classes["ingredient-specs"]}>
        <p>
          {props.amount} {props.unit}
        </p>
        <p>{props.name[0].toUpperCase() + props.name.slice(1)}</p>
      </div>
    </div>
  );
}
