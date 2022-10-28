import React from "react";

import logo from "../assets/logo.png";
import github from "../assets/github.png";

import classes from "../styles/Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <a href="/recipes" className={classes["header__logo"]}>
        <img src={logo} className={classes.logo} alt="" />
      </a>
      <a href="https://github.com/Alessandro9936/S2I_React">
        <img src={github} alt="github icon redirect to project directory" />
      </a>
    </header>
  );
}
