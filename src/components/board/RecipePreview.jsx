import React from "react";

import classes from "../../styles/RecipePreview.module.css";

export function RecipePreview({ recipe }) {
  return (
    <li className={classes["recipe-container"]}>
      <img
        src="https://spoonacular.com/recipeImages/715538-312x231.jpg"
        alt="recipe image"
      />
      <p>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</p>
    </li>
  );
}
