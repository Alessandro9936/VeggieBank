import React from "react";

import classes from "../../styles/RecipePreview.module.css";

export function RecipePreview({ recipe }) {
  return (
    <li className={classes["recipe-container"]}>
      <img src={recipe.image} alt="recipe image" />
      <p>{recipe.title}</p>
    </li>
  );
}
