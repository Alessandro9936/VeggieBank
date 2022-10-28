import React from "react";

import { Step } from "./recipeDetail/Step";
import { Nutrient } from "./recipeDetail/Nutrient";
import { RecipeSpecs } from "./recipeDetail/RecipeSpecs";
import { RecipePreview } from "./RecipePreview";
import ActiveTag from "../UI/ActiveTag";

import { X, ChevronLeft, ChevronRight } from "react-feather";
import classes from "../../styles/RecipeDetail.module.css";

export function RecipeDetail() {
  return (
    <div className={classes["recipe-detail"]}>
      <div className={classes["recipe-block-flex"]}>
        <img
          className={classes["recipe-image"]}
          src="https://spoonacular.com/recipeImages/716429-312x231.jpg"
          alt=""
        />

        <div className={classes["recipe-specifics"]}>
          <h1>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</h1>
          <p>Cooking time:</p>
          <p>
            Complete Description:
            <a
              href="http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html"
              target="_blank"
            >
              Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
            </a>
          </p>
          <div className={classes.tags}>
            {/* MAP TRUE TAGS IN RECIPE */}
            <p>Tags:</p>
            <ActiveTag />
            <ActiveTag />
            <ActiveTag />
          </div>
        </div>
        <X color="#333" style={{ cursor: "pointer" }} />
      </div>

      <div className={classes["recipe-block-flex"]}>
        <div className={classes["recipe-ingredients"]}>
          <div className={classes["ingredients-header"]}>
            <h2>Ingredients:</h2>
            <div className={classes.servings}>
              <ChevronLeft color="#333" style={{ cursor: "pointer" }} />
              <span className={classes["servings-number"]}>1</span>
              <ChevronRight color="#333" style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div className={classes["ingredients-container"]}>
            {/* MAP ALL INGREDIENTS IN RECIPE */}
            <RecipeSpecs />
            <RecipeSpecs />
            <RecipeSpecs />
            <RecipeSpecs />
            <RecipeSpecs />
          </div>
        </div>
        <div className={classes["recipe-nutrients"]}>
          <h2>Nutrients</h2>
          {/* MAP ALL NUTRIENTS (enegy, fat, carbs, fibers, proteins, colesterol, sodium) IN RECIPE */}
          <Nutrient />
          <Nutrient />
          <Nutrient />
          <Nutrient />
          <Nutrient />
          <Nutrient />
          <Nutrient />
        </div>
      </div>

      <div className={classes["recipe-block"]}>
        <h2>Recipe Steps:</h2>
        {/* MAP ALL STEPS IN RECIPE - STEPS MAY NOT BE IN JSON*/}
        <Step />
        <Step />
      </div>

      <div className={classes.recommended}>
        <h2>You may also like:</h2>
        <div className={classes["reccommended-recipes"]}>
          {/* FIND RECOMMENDED RECIPES AND MAP THEM*/}
          <RecipePreview />
          <RecipePreview />
          <RecipePreview />
        </div>
      </div>
    </div>
  );
}
