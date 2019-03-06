import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {
  Beers,
  registerDependencies as registerBeerListDependencies
} from "./BeersList";
import {
  BeerDetails,
  registerDependencies as registerBeerDependencies
} from "./BeerDetails";
import {
  Search,
  registerDependencies as registerSearchDependencies
} from "./Search";
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
                <Search />
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
