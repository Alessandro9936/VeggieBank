import React from "react";

import classes from "../../styles/ActiveTag.module.css";

export default function ActiveTag({ value }) {
  return <span className={classes["active-tag"]}>{value}</span>;
}
