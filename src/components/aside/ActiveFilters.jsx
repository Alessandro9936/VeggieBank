import { ActiveFilter } from "./ActiveFilter";

import React from "react";

import classes from "./styles/ActiveFilters.module.css";
import { useContext } from "react";
import { ActiveTagsContext } from "../context/activeTags-context";

export function ActiveFilters() {
  const activeTags = useContext(ActiveTagsContext);

  return (
    <div className={classes["active-filters-section"]}>
      <h2>Active filters:</h2>
      <div className={classes["sort-options"]}>
        {Object.keys(activeTags).map((filter) => (
          <ActiveFilter
            type={filter}
            activeFilters={activeTags[filter]}
            key={filter}
          />
        ))}
      </div>
    </div>
  );
}
