import React from "react";
import { Nutrient } from "./Nutrient";
import classes from "./styles/RecipeNutrients.module.css";

export function RecipeNutrients({ nutrients }) {
  const nutrientInTable = [
    "Calories",
    "Fat",
    "Saturated Fat",
    "Carbohydrates",
    "Sugar",
    "Fiber",
    "Protein",
    "Cholesterol",
    "Sodium",
  ];
  const filteredNutrients = nutrients.filter((nutrient) =>
    nutrientInTable.includes(nutrient.name)
  );

  return (
    <div className={classes["recipe-nutrients"]}>
      <h2>Nutrients:</h2>
      {filteredNutrients.map((nutrient, i) => (
        <Nutrient
          name={nutrient.name}
          amount={nutrient.amount}
          unit={nutrient.unit}
          key={i}
        />
      ))}
    </div>
  );
}
