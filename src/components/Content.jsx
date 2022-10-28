import { Recipes } from "./board/Recipes";
import React from "react";

import classes from "../styles/Content.module.css";

import { Outlet } from "react-router-dom";

export function Content() {
  // HIDE RECIPES WITH STATE WHEN CLICK ON RECIPE
  return (
    <section className={classes["board__content"]}>
      <Recipes />
      <Outlet />
    </section>
  );
}
