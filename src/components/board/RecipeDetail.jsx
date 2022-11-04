import { RecipeSteps } from "./recipeDetail/RecipeSteps";
import { RecipeNutrients } from "./recipeDetail/RecipeNutrients";
import { RecipeIngredients } from "./recipeDetail/RecipeIngredients";
import { RecipeIntro } from "./recipeDetail/RecipeIntro";
import React from "react";

import classes from "../../styles/RecipeDetail.module.css";
import { useParams } from "react-router-dom";
import { RecipePreview } from "./RecipePreview";
import { useQuery } from "react-query";
import axios from "axios";
import { Loader } from "../UI/Loader";
import { Error } from "../UI/Error";

const fetchRecipeDetail = ({ queryKey }) => {
  const id = queryKey[1];

  const recipeDetailRequest = axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${
      import.meta.env.VITE_KEY_5
    }`
  );

  const similarRecipesRequest = axios.get(
    `https://api.spoonacular.com/recipes/${id}/similar?number=10&apiKey=${
      import.meta.env.VITE_KEY_5
    }`
  );

  return axios.all([recipeDetailRequest, similarRecipesRequest]);
};

export function RecipeDetail() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    ["recipe-detail", id],
    fetchRecipeDetail
  );
  const recipe = data?.[0].data;
  const similarRecipes = data?.[1].data;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error status={error.response.status} />;
  }

  return (
    <>
      {recipe && (
        <div className={classes["recipe-detail"]}>
          <div className={classes["recipe-block-flex"]}>
            <RecipeIntro recipe={recipe} />
          </div>
          <div className={classes["recipe-block-flex"]}>
            <RecipeIngredients
              baseServings={recipe.servings}
              ingredients={recipe.extendedIngredients}
            />
            <RecipeNutrients nutrients={recipe.nutrition.nutrients} />
          </div>

          <div className={classes["recipe-block"]}>
            <RecipeSteps
              url={recipe.sourceUrl}
              instructions={recipe.analyzedInstructions}
            />
          </div>

          {!error && (
            <div className={classes.recommended}>
              <h2>You may also like:</h2>
              <ul className={classes["reccommended-recipes"]}>
                {similarRecipes.map((recipe) => (
                  <RecipePreview recipe={recipe} key={recipe.id} />
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}
