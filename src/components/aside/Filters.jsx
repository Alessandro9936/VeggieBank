import { Filter } from "./Filter";
import React from "react";

import classes from "../../styles/Filters.module.css";

import * as optionsArrays from "../../utils/filter-options";
import { useState } from "react";

export function Filters({ updateActiveFilters }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const filterTypes = ["cuisine", "type", "intolerances", "sort"];
  const options = optionsArrays;

  const returnTag = (filter, value) => {
    updateActiveFilters(filter, value);
  };

  return (
    <>
      <div className={classes["filters-section"]}>
        <h2>Filter by:</h2>
        <div className={classes["filter-container"]}>
          {filterTypes.map((filterType, i) => (
            <Filter
              key={i}
              type={filterType}
              typeList={options[filterType]}
              updateActiveFilters={returnTag}
              isActive={activeIndex === i}
              onShow={() => setActiveIndex(activeIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
