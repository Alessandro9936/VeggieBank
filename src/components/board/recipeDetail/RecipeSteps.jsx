import React from "react";
import { Step } from "./Step";
import classes from "./styles/RecipeSteps.module.css";

export function RecipeSteps({ url, instructions }) {
  if (instructions.length === 0) {
    return (
      <>
        <h2>Recipe Steps:</h2>
        <p className={classes["unavailble-description"]}>
          Analyzed instructions not available, check the
          <a href={url} target="_blank">
            {" "}
            Original site{" "}
          </a>{" "}
          of this recipe
        </p>
      </>
    );
  }
  const [{ steps, ...rest }] = instructions;

  return (
    <>
      <h2>Recipe Steps:</h2>
      {steps.map((step, i) => (
        <Step number={step.number} step={step.step} key={i} />
      ))}
    </>
  );
}
