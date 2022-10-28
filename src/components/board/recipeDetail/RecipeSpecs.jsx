import React from "react";

import classes from "../../../styles/RecipeSpecs.module.css";

export function RecipeSpecs({}) {
  return (
    <div className={classes.ingredient}>
      <div className={classes["ingredient-image"]}>
        <img src="" alt="" />
      </div>
      <div className={classes["ingredient-specs"]}>
        <p>Amuount</p>
        <p>Ingredient</p>
      </div>
    </div>
  );
}
