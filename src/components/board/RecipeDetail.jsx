import { RecipeSteps } from "./recipeDetail/RecipeSteps";
import { RecipeNutrients } from "./recipeDetail/RecipeNutrients";
import { RecipeIngredients } from "./recipeDetail/RecipeIngredients";
import { RecipeIntro } from "./recipeDetail/RecipeIntro";
import React from "react";

import classes from "../../styles/RecipeDetail.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const getRecipe = async (id) => {
  const result = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${
      import.meta.env.VITE_KEY_1
    }`
  );
  const data = await result.json();
  return data;
};

export function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getRecipe(id).then((data) => setRecipe(data));
  }, [id]);

  const [servings, setServings] = useState(1);

  return (
    <>
      {recipe && (
        <div className={classes["recipe-detail"]}>
          <div className={classes["recipe-block-flex"]}>
            <RecipeIntro recipe={recipe} />
          </div>
          <div className={classes["recipe-block-flex"]}>
            <RecipeIngredients
              servings={servings}
              baseServings={recipe.servings}
              ingredients={recipe.extendedIngredients}
              setServings={setServings}
            />
            <RecipeNutrients nutrients={recipe.nutrition.nutrients} />
          </div>

          <div className={classes["recipe-block"]}>
            <RecipeSteps
              url={recipe.sourceUrl}
              instructions={recipe.analyzedInstructions}
            />
          </div>

          <div className={classes.recommended}>
            <h2>You may also like:</h2>
            <div className={classes["reccommended-recipes"]}>
              {/* FIND RECOMMENDED RECIPES AND MAP THEM
          <RecipePreview />
          <RecipePreview />
          <RecipePreview />
          
          */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
