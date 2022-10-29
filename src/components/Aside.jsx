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
  const [activeTags, setActiveTags] = useState({
    cuisines: [],
    types: [],
    intollerances: [],
    sorters: [],
  });

  const handleUpdateActiveFilters = (filter, value) => {
    setActiveTags((prevTags) => {
      if (prevTags[filter].includes(value)) {
        return {
          ...prevTags,
          [filter]: prevTags[filter].filter((preValue) => preValue !== value),
        };
      } else {
        return { ...prevTags, [filter]: [...prevTags[filter], value] };
      }
    });
  };

  const asideClasses = classes[`board__aside-${showAside ? "open" : "close"}`];

  const handleShowAside = () => {
    setShowAside(!showAside);
  };

  return (
    <aside className={asideClasses}>
      {!showAside && (
        <Menu
          color="#333"
          style={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={handleShowAside}
        />
      )}
      {showAside && (
        <>
          <X
            color="#333"
            style={{ marginLeft: "auto", cursor: "pointer" }}
            onClick={handleShowAside}
          />
          <NameSearch />
          <Filters updateActiveFilters={handleUpdateActiveFilters} />
          <ActiveFilters activeFilters={activeTags} />
        </>
      )}
    </aside>
  );
}
