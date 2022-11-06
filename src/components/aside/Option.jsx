import React from "react";
import { useContext } from "react";
import classes from "./styles/Option.module.css";
import { ActiveTagsDispatchContext } from "../context/activeTags-context";

export function Option({ value, filter, isActive }) {
  const dispatch = useContext(ActiveTagsDispatchContext);

  const handleOnClick = () => {
    dispatch({ type: filter, tag: value });
  };

  return (
    <li
      className={`${classes.option} ${isActive ? classes.active : ""}`}
      onClick={handleOnClick}
    >
      {value}
    </li>
  );
}
