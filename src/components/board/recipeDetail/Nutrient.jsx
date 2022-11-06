import React from "react";

import classes from "./styles/Nutrient.module.css";

export function Nutrient(props) {
  return (
    <div className={classes.nutrient}>
      <p className={classes["nutrient-name"]}>{props.name}</p>
      <p className={classes.quantity}>
        {props.amount.toFixed(1)}
        {props.unit}
      </p>
    </div>
  );
}
