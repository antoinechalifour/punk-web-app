import React, { Component } from "react";
import { Beers } from "./Beers";
import { createStore } from "./Beers/Store";
import { Header } from "./Header";

const store = createStore();

export function App() {
  return (
    <>
      <Header />
      <main>
        <Beers store={store} />
      </main>
    </>
  );
}
