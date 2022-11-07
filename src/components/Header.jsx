import React from "react";

import logo from "../assets/logo.png";
import github from "../assets/github.png";

import classes from "./styles/Header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={classes.header}>
      <Link to="/recipes" className={classes["header__logo"]}>
        <img src={logo} className={classes.logo} alt="" />
      </Link>
      <a href="https://github.com/Alessandro9936/S2I_React" target="_blank">
        <img src={github} alt="github icon redirect to project directory" />
      </a>
    </header>
  );
}
