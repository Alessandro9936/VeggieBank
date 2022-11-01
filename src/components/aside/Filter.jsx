import React from "react";
import { Option } from "./Option";

import classes from "../../styles/Filter.module.css";
import { ChevronDown } from "react-feather";
import { useMemo } from "react";

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

  const tags = useMemo(() => {
    return typeList.map((option, i) => (
      <Option
        value={option}
        key={i}
        updateActiveFilters={returnTag}
        filter={type}
      />
    ));
  }, [typeList]);

  return (
    <>
      <ul className={classes.filter}>
        <div className={classes["filter__header"]} onClick={onShow}>
          <span>{type[0].toUpperCase() + type.slice(1)}</span>
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
          {tags}
        </div>
      </ul>
    </>
  );
}
