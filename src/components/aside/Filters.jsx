import { Filter } from "./Filter";
import React from "react";

import classes from "./styles/Filters.module.css";

import { optionsPerFilter } from "../../utils/filter-options";
import { useState } from "react";

export function Filters() {
  const [activeIndex, setActiveIndex] = useState(null);

  const filterTypes = ["cuisine", "type", "intolerances", "sort"];

  return (
    <>
      <div className={classes["filters-section"]}>
        <h2>Filter by:</h2>
        <div className={classes["filter-container"]}>
          {filterTypes.map((filterType, i) => (
            <Filter
              key={filterType}
              filterName={filterType}
              optionList={optionsPerFilter[filterType]}
              isActive={activeIndex === i}
              onShow={() => setActiveIndex(activeIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
