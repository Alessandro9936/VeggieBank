import { Content } from "./../components/Content";
import { Aside } from "./../components/Aside";
import { Header } from "../components/Header";

import React from "react";

import classes from "../styles/Board.module.css";

export function Board() {
  return (
    <>
      <Header />
      <main className={classes.board}>
        <Aside />
        <Content />
      </main>
    </>
  );
}
