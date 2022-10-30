import { Filter } from "./Filter";
import { Option } from "./Option";

import React from "react";

import classes from "../../styles/Filters.module.css";

import {
  cuisines,
  mealTypes,
  intollerances,
  sortingOptions,
} from "../../utils/filter-options";
import { useState } from "react";

export function Filters({ updateActiveFilters }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const returnTag = (filter, value) => {
    updateActiveFilters(filter, value);
  };

  console.log("render Filters");
  return (
    <>
      <div className={classes["filters-section"]}>
        <h2>Filter by:</h2>
        <div className={classes["filter-container"]}>
          {/* Use composition to avoid prop drilling */}
          <Filter
            type="Cuisines"
            typeList={cuisines}
            updateActiveFilters={returnTag}
            isActive={activeIndex === 0}
            onShow={() => setActiveIndex(activeIndex === 0 ? null : 0)}
          />
          <Filter
            type="Types"
            typeList={mealTypes}
            updateActiveFilters={returnTag}
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(activeIndex === 1 ? null : 1)}
          />
          <Filter
            type="Intollerances"
            typeList={intollerances}
            updateActiveFilters={returnTag}
            isActive={activeIndex === 2}
            onShow={() => setActiveIndex(activeIndex === 2 ? null : 2)}
          />
          <h2>Sort by:</h2>
          <Filter
            type="Sorters"
            typeList={sortingOptions}
            updateActiveFilters={returnTag}
            isActive={activeIndex === 3}
            onShow={() => setActiveIndex(activeIndex === 3 ? null : 3)}
          />
        </div>
      </div>
    </>
  );
}
