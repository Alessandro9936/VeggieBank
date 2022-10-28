import { RecipePreview } from "./RecipePreview";

import React from "react";

import classes from "../../styles/Recipes.module.css";

export function Recipes({}) {
  // GET ALL RECIPES WHEN LOAD

  return (
    <ul className={classes.recipes}>
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
    </ul>
  );
}
