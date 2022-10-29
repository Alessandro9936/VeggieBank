import { Filter } from "./Filter";

import React from "react";

import classes from "../../styles/Filters.module.css";

import {
  cuisines,
  mealTypes,
  intollerances,
  sortingOptions,
} from "../../utils/filter-options";
import { useState } from "react";

export function Filters() {
  const [activeIndex, setActiveIndex] = useState(null);
  // ONLY ONE FILTER CAN BE OPEN PER TIME, SET STATE FOR THAT

  return (
    <>
      <div className={classes["filters-section"]}>
        <h2>Filter by:</h2>
        <div className={classes["filter-container"]}>
          <Filter
            type="Cuisines"
            typeList={cuisines}
            isActive={activeIndex === 0}
            onShow={() => setActiveIndex(activeIndex === 0 ? null : 0)}
          />
          <Filter
            type="Meal types"
            typeList={mealTypes}
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(activeIndex === 1 ? null : 1)}
          />
          <Filter
            type="Intollerances"
            typeList={intollerances}
            isActive={activeIndex === 2}
            onShow={() => setActiveIndex(activeIndex === 2 ? null : 2)}
          />
          <h2>Sort by:</h2>
          <Filter
            type="Sorters"
            typeList={sortingOptions}
            isActive={activeIndex === 3}
            onShow={() => setActiveIndex(activeIndex === 3 ? null : 3)}
          />
        </div>
      </div>
    </>
  );
}
