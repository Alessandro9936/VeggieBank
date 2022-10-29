import React from "react";
import classes from "../../styles/Option.module.css";

export function Option({ value }) {
  // SET ACTIVE CLASS ON CLICK
  return <li className={classes.option}>{value}</li>;
}
