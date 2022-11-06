import React from "react";
import { Option } from "./Option";

import classes from "../../styles/Filter.module.css";
import { ChevronDown } from "react-feather";
import { useMemo } from "react";
import { useContext } from "react";
import { ActiveTagsContext } from "../context/activeTags-context";

export function Filter({ filterName, optionList, isActive, onShow }) {
  const activeOptions = useContext(ActiveTagsContext);

  return (
    <>
      <ul className={classes.filter}>
        <div className={classes["filter__header"]} onClick={onShow}>
          <span>{filterName[0].toUpperCase() + filterName.slice(1)}</span>
          <ChevronDown
            color="#333"
            style={{ marginLeft: "auto", cursor: "pointer" }}
          />
        </div>

        <div
          className={`${classes["options-container"]} ${
            !isActive ? classes.hidden : ""
          }`}
        >
          {optionList.map((option) => (
            <Option
              value={option}
              key={option}
              filter={filterName}
              isActive={activeOptions[filterName].includes(option)}
            />
          ))}
        </div>
      </ul>
    </>
  );
}
