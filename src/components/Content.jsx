import { Recipes } from "./board/Recipes";
import React from "react";

import classes from "../styles/Content.module.css";

import { Outlet, useParams } from "react-router-dom";

export function Content() {
  const { id } = useParams();

  const content = id ? <Outlet /> : <Recipes />;
  return <section className={classes["board__content"]}>{content}</section>;
}
