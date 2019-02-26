import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Beers } from "./BeersList";
import { createStore } from "./BeersList/store/Store";
import { BeerDetails } from "./BeerDetails";
import { Search } from "./Search";

const store = createStore();

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/beers/:id"
          render={({ match }) => <BeerDetails id={match.params.id} />}
        />
        <Route path="/search" render={() => <Search />} />
        <Route>
          <Beers store={store} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
