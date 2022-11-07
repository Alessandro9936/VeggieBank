import React from "react";

import { RecipeSpecs } from "./RecipeSpecs";

import classes from "./styles/RecipeIngredients.module.css";

export function RecipeIngredients({ baseServings, ingredients }) {
  const filteredIngredients = ingredients.reduce((acc, cur) => {
    if (!acc.some((ingredient) => ingredient.id === cur.id)) {
      acc.push(cur);
    }
    return acc;
  }, []);

  return (
    <div className={classes["recipe-ingredients"]}>
      <div className={classes["ingredients-header"]}>
        <h2>Ingredients:</h2>

        <span className={classes["servings-number"]}>
          For {baseServings} servings
        </span>
      </div>
      <div className={classes["ingredients-container"]}>
        {filteredIngredients.map((ingredient) => (
          <RecipeSpecs
            image={ingredient.image}
            name={ingredient.name}
            amount={ingredient.original}
            unit={ingredient.unit}
            key={ingredient.id}
          />
        ))}
      </div>
    </div>
  );
}
