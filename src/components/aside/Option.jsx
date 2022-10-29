import React from "react";
import { useState } from "react";
import classes from "../../styles/Option.module.css";

export function Option({ value, filter, updateActiveFilters }) {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setIsActive(!isActive);
    updateActiveFilters(filter, value);
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
