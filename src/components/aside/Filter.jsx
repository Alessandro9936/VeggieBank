import React from "react";
import { Option } from "./Option";

import classes from "../../styles/Filter.module.css";
import { ChevronDown } from "react-feather";

export function Filter({
  updateActiveFilters,
  typeList,
  type,
  isActive,
  onShow,
}) {
  const returnTag = (filter, value) => {
    updateActiveFilters(filter, value);
  };

  return (
    <ul className={classes.filter}>
      <div className={classes["filter__header"]} onClick={onShow}>
        <span>{type}</span>
        <ChevronDown
          color="#333"
          style={{ marginLeft: "auto", cursor: "pointer" }}
        />
      </div>

      <div
        className={`${classes["options-container"]} ${
          !isActive ? classes.hidden : ""
        }`}
      >
        {typeList.map((option, i) => (
          <Option
            value={option}
            key={i}
            updateActiveFilters={returnTag}
            filter={type.toLowerCase()}
          />
        ))}
      </div>
    </ul>
  );
}
