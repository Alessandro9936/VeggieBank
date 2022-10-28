import React from "react";

import classes from "../../styles/NameSearch.module.css";

export function NameSearch({}) {
  /*
    State for searching by name
      useSearchParams 
        On input set set params e.target
          Return string up to filter recipes by name by context or state
  */

  return (
    <div className={classes["search-section"]}>
      <h2>Search by name:</h2>
      <input type="search" placeholder="Recipe name..." />
    </div>
  );
}
