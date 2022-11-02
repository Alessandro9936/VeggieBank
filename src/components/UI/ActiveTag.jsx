import React from "react";

import classes from "../../styles/ActiveTag.module.css";

export default function ActiveTag({ filter, value }) {
  let tagClasses;
  if (value === undefined || value) {
    tagClasses = classes["active-tag"];
  } else {
    tagClasses = classes["disabled-tag"];
  }

  return <span className={tagClasses}>{filter}</span>;
}
