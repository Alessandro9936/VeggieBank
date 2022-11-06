import { Content } from "./../components/Content";
import { Aside } from "./../components/Aside";
import { Header } from "../components/Header";

import React from "react";

import classes from "./styles/Board.module.css";
import { ActiveTagsProvider } from "../components/context/activeTags-context";

export function Board() {
  return (
    <>
      <Header />
      <main className={classes.board}>
        <ActiveTagsProvider>
          <Aside />
        </ActiveTagsProvider>
        <Content />
      </main>
    </>
  );
}
