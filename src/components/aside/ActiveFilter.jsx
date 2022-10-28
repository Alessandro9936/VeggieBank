import ActiveTag from "../UI/ActiveTag";
import React from "react";

import classes from "../../styles/ActiveFilter.module.css";

export function ActiveFilter({ type, activeFilters }) {
  return (
    <div className={classes["active-filter"]}>
      <p>{type}:</p>
      <div className={classes["active-filter__buttons"]}>
        {activeFilters.map((activeFilter, i) => {
          return <ActiveTag name={activeFilter} key={i} />;
        })}
      </div>
    </div>
  );
}
