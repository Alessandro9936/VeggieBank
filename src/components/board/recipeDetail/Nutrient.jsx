import React from "react";

import classes from "../../../styles/Nutrient.module.css";

export function Nutrient({}) {
  return (
    <div className={classes.nutrient}>
      <p className={classes["nutrient-name"]}>Energy</p>
      <p className={classes.quantity}>200 Kcal</p>
    </div>
  );
}
