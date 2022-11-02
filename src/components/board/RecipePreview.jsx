import React from "react";
import { Link } from "react-router-dom";

import classes from "../../styles/RecipePreview.module.css";

export function RecipePreview({ recipe }) {
  return (
    <li className={classes["recipe-container"]}>
      <Link
        to={`${recipe.id}`}
        style={{ textDecoration: "none", color: "#333" }}
      >
        <img src={recipe.image} alt="recipe image" />
        <p>{recipe.title}</p>
      </Link>
    </li>
  );
}
