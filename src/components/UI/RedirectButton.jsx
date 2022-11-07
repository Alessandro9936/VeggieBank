import React from "react";
import { Link } from "react-router-dom";

import classes from "./styles/RedirectButton.module.css";
export function RedirectButton({}) {
  return (
    <Link to={".."} className={classes["error-back"]}>
      Go back to recipes
    </Link>
  );
}
