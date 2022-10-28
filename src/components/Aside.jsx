import { ActiveFilters } from "./aside/ActiveFilters";
import { Filters } from "./aside/Filters";
import { NameSearch } from "./aside/NameSearch";

import React from "react";
import { useState } from "react";

import classes from "../styles/Aside.module.css";

import { X } from "react-feather";
import { Menu } from "react-feather";

export function Aside() {
  const [showAside, setShowAside] = useState(true);

  return (
    <aside className={classes["board__aside-open"]}>
      {/* <Menu
        color="#333"
        style={{ "margin-left": "auto", cursor: "pointer" }}
  /> */}
      <X color="#333" style={{ marginLeft: "auto", cursor: "pointer" }} />
      <NameSearch />
      <Filters />
      <ActiveFilters />
    </aside>
  );
}
