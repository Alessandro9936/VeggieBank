import React from "react";

import classes from "./styles/Step.module.css";

export function Step({ number, step }) {
  return (
    <div className={classes.step}>
      <div className={classes["step-number"]}>
        <p>{number}</p>
      </div>
      <p>{step}</p>
    </div>
  );
}
