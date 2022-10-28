import { Option } from "./Option";

import React from "react";

import classes from "../../styles/Filter.module.css";
import { ChevronDown } from "react-feather";

export function Filter({ type, typeList }) {
  return (
    <ul className={classes.filter}>
      <div className={classes["filter__header"]}>
        <span>{type || ""}</span>
        <ChevronDown
          color="#333"
          style={{ marginLeft: "auto", cursor: "pointer" }}
        />
      </div>
      <div className={classes["options-container hidden"]}>
        {typeList.map((option, i) => {
          <Option value={option} key={i} />;
        })}
      </div>
    </ul>
  );
}
