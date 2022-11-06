import { RecipePreview } from "./RecipePreview";

import React from "react";

import classes from "./styles/Recipes.module.css";
import { useLocation } from "react-router-dom";

import axios from "axios";
import { useQuery } from "react-query";
import { Loader } from "../UI/Loader";
import { Error } from "../UI/Error";

const fetchRecipes = async ({ queryKey }) => {
  const filters = queryKey[1];

  return axios.get(
    `https://api.spoonacular.com/recipes/complexSearch${
      filters ? filters : "?"
    }&diet=vegetarian&number=100&apiKey=${import.meta.env.VITE_KEY_3}`
  );
};

export function Recipes({}) {
  const filters = useLocation().search;

  const { data, isLoading, isError, error } = useQuery(
    ["recipes", filters],
    fetchRecipes
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error status={error.response.status} />;
  }

  return (
    <ul className={classes.recipes}>
      {data?.data.results.map((recipe) => (
        <RecipePreview recipe={recipe} key={recipe.id} />
      ))}
    </ul>
  );
}
