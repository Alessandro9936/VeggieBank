import { ActiveFilter } from "./ActiveFilter";

import React from "react";

import classes from "../../styles/ActiveFilters.module.css";

export function ActiveFilters({}) {
  // GET LIST OF ACTIVE FILTERS (CUISINE, TYPE, INTOLLERANCES, SORT OPTIONS), MAP THEM
  return (
    <div className={classes["active-filters-section"]}>
      <h2>Active filters:</h2>
      <div className={classes["sort-options"]}>
        <ActiveFilter type="Cuisine" activeFilters={["Replace me"]} />
        <ActiveFilter type="Type" activeFilters={["Replace me"]} />
        <ActiveFilter type="Intollerancies" activeFilters={["Replace me"]} />
        <ActiveFilter type="Sorters" activeFilters={["Replace me :)"]} />
      </div>
    </div>
  );
}
