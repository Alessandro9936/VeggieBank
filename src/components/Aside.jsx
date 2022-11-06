import { ActiveFilters } from "./aside/ActiveFilters";
import { Filters } from "./aside/Filters";
import { NameSearch } from "./aside/NameSearch";

import React from "react";
import { useState } from "react";

import classes from "../styles/Aside.module.css";

import { X } from "react-feather";
import { Menu } from "react-feather";
import { useParams } from "react-router-dom";

export function Aside() {
  /*
  When recipe detail is displayed all filter inputs must be disabled
  Insted of declaring a state high on the tree, we check whether the url has a recipe id or not
  */
  const { id } = useParams();

  const [showAside, setShowAside] = useState(true);
  const [disableModal, setDisableModal] = useState(false);

  const handleDisableModal = () => {
    setDisableModal(true);
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
            style={{ marginLeft: "auto", cursor: "pointer", zIndex: 1 }}
            onClick={handleShowAside}
          />
          {id && (
            <div
              className={classes["disable-overlay"]}
              onClick={handleDisableModal}
            >
              {disableModal && (
                <div className={classes["disable-modal"]}>
                  Close recipe detail to enable filters!
                </div>
              )}
            </div>
          )}
          <NameSearch />
          <Filters />
          <ActiveFilters />
        </>
      )}
    </aside>
  );
}
