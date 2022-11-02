import React from "react";
import classes from "../../../styles/RecipeIntro.module.css";

import { X } from "react-feather";

import ActiveTag from "../../UI/ActiveTag";

export function RecipeIntro({ recipe }) {
  const recipeTags = {
    vegetarian: recipe.vegetarian,
    vegan: recipe.vegan,
    glutenFree: recipe.glutenFree,
    dairyFree: recipe.dairyFree,
    veryPopular: recipe.veryPopular,
    cheap: recipe.cheap,
  };

  return (
    <>
      <img
        className={classes["recipe-image"]}
        src={recipe.image}
        alt="Image of the recipe"
      />

      <div className={classes["recipe-specifics"]}>
        <h1>{recipe.title}</h1>
        <p>Cooking time: {recipe.readyInMinutes} Minutes</p>
        <p>
          Original Recipe Site:
          <a href={recipe.sourceUrl} target="_blank">
            {recipe.title}
          </a>
        </p>
        <div className={classes.tags}>
          <p>Tags:</p>
          {Object.entries(recipeTags).map(([key, value], i) => (
            <ActiveTag filter={key} value={value} key={i} />
          ))}
        </div>
      </div>
      <X
        color="#333"
        style={{
          cursor: "pointer",
        }}
      />
    </>
  );
}
