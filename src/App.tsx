import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {
  Beers,
  registerDependencies as registerBeerListDependencies
} from "./modules/BeersList";
import {
  BeerDetails,
  registerDependencies as registerBeerDependencies
} from "./modules/BeerDetails";
import {
  SearchBeers,
  registerDependencies as registerSearchDependencies
} from "./modules/SearchBeers";
import { DiScope } from "./Di/DiScope";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/beers/:id"
            render={({ match }) => (
              <DiScope
                registerDependencies={registerBeerDependencies(match.params.id)}
              >
                <BeerDetails />
              </DiScope>
            )}
          />
          <Route
            path="/search"
            render={() => (
              <DiScope registerDependencies={registerSearchDependencies()}>
                <SearchBeers />
              </DiScope>
            )}
          />
          <Route>
            <DiScope registerDependencies={registerBeerListDependencies()}>
              <Beers />
            </DiScope>
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
