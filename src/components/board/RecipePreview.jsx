import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import classes from "../../styles/RecipePreview.module.css";

export function RecipePreview({ recipe }) {
  /*
   Use navigate instead of Link because we use this component in two scenarios:
   1) When user click on a recipe in recipe preview
   2) When user click on a similar recipe in recipe detail

   in the first state in the URL there's no id, while in the second case
   we already have an id in the URL, with link they wouls stack on each other.
   With useNavigate, every time a click on preview happens, the id in the url
   is added or replaced
  */
  const navigate = useNavigate();
  const handleNavigationToId = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  const recipeImageSrc = recipe.image
    ? recipe.image
    : `https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`;

  return (
    <li className={classes["recipe-container"]} onClick={handleNavigationToId}>
      <img src={recipeImageSrc} alt="recipe image" />
      <p>{recipe.title}</p>
    </li>
  );
}
