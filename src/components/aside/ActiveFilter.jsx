import ActiveTag from "../UI/ActiveTag";
import React from "react";

import classes from "../../styles/ActiveFilter.module.css";

export function ActiveFilter({ type, activeFilters }) {
  if (activeFilters.length === 0) return;

  let activeTags;

  if (Array.isArray(activeFilters)) {
    activeTags = activeFilters.map((activeFilter) => (
      <ActiveTag filter={activeFilter} key={activeFilter} />
    ));
  } else {
    activeTags = <ActiveTag filter={activeFilters} />;
  }

  return (
    <div className={classes["active-filter"]}>
      <p>{type}:</p>
      <div className={classes["active-filter__buttons"]}>{activeTags}</div>
    </div>
  );
}
