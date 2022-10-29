import { ActiveFilter } from "./ActiveFilter";

import React from "react";

import classes from "../../styles/ActiveFilters.module.css";

export function ActiveFilters({ activeFilters }) {
  // GET LIST OF ACTIVE FILTERS (CUISINE, TYPE, INTOLLERANCES, SORT OPTIONS), MAP THEM

  return (
    <div className={classes["active-filters-section"]}>
      <h2>Active filters:</h2>
      <div className={classes["sort-options"]}>
        <ActiveFilter type="Cuisine" activeFilters={activeFilters.cuisines} />
        <ActiveFilter type="Type" activeFilters={activeFilters.types} />
        <ActiveFilter
          type="Intollerances"
          activeFilters={activeFilters.intollerances}
        />
        <ActiveFilter type="Sorters" activeFilters={activeFilters.sorters} />
      </div>
    </div>
  );
}
