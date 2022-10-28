import { Filter } from "./Filter";

import React from "react";

import classes from "../../styles/Filters.module.css";

import {
  cuisines,
  mealTypes,
  intollerances,
  sortingOptions,
} from "../../utils/filter-options";

export function Filters() {
  // ONLY ONE FILTER CAN BE OPEN PER TIME, SET STATE FOR THAT

  return (
    <>
      <div className={classes["filters-section"]}>
        <h2>Filter by:</h2>
        <div className={classes["filter-container"]}>
          <Filter type="Cuisines" typeList={cuisines} />
          <Filter type="Meal types" typeList={mealTypes} />
          <Filter type="Intollerances" typeList={intollerances} />
          <h2>Sort by:</h2>
          <Filter typeList={sortingOptions} />
        </div>
      </div>
    </>
  );
}
