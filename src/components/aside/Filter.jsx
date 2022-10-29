import { Option } from "./Option";

import React from "react";

import classes from "../../styles/Filter.module.css";
import { ChevronDown } from "react-feather";

export function Filter({ type, typeList, isActive, onShow }) {
  return (
    <ul className={classes.filter} onClick={onShow}>
      <div className={classes["filter__header"]}>
        <span>{type}</span>
        <ChevronDown
          color="#333"
          style={{ marginLeft: "auto", cursor: "pointer" }}
        />
      </div>
      {isActive && (
        <div className={classes["options-container"]}>
          {typeList.map((option, i) => (
            <Option value={option} key={i} />
          ))}
        </div>
      )}
    </ul>
  );
}
