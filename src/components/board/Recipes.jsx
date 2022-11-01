import { RecipePreview } from "./RecipePreview";

import React from "react";

import classes from "../../styles/Recipes.module.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { fetchRecipes } from "../../utils/recipes-fetcher";
import { useState } from "react";

export function Recipes({}) {
  const location = useLocation();
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    fetchRecipes(location.search).then((data) => setRecipes(data.results));
  }, [location]);

  return (
    <ul className={classes.recipes}>
      {recipes &&
        recipes.map((recipe) => (
          <RecipePreview key={recipe.id} recipe={recipe} />
        ))}
    </ul>
  );
}
