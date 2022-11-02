import React from "react";

import { RecipeSpecs } from "./RecipeSpecs";
import { ChevronLeft, ChevronRight } from "react-feather";

import classes from "../../../styles/RecipeIngredients.module.css";

export function RecipeIngredients({
  baseServings,
  servings,
  ingredients,
  setServings,
}) {
  return (
    <div className={classes["recipe-ingredients"]}>
      <div className={classes["ingredients-header"]}>
        <h2>Ingredients:</h2>
        <div className={classes.servings}>
          <ChevronLeft
            onClick={() => servings > 1 && setServings(servings - 1)}
            color="#333"
            style={{
              cursor: "pointer",
            }}
          />
          <span className={classes["servings-number"]}>{servings}</span>
          <ChevronRight
            onClick={() => setServings(servings + 1)}
            color="#333"
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      <div className={classes["ingredients-container"]}>
        {ingredients.map((ingredient, i) => (
          <RecipeSpecs
            image={ingredient.image}
            name={ingredient.name}
            amount={(ingredient.amount / baseServings) * servings}
            unit={ingredient.unit}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
