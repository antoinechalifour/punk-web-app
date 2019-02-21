import React from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";

import { Beers } from "./Beers";
import { createStore } from "./Beers/Store";
import { Header } from "./Header";
import { BeerDetails } from "./BeerDetails";

const store = createStore();

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/beers/:id"
          render={({ match }) => <BeerDetails id={match.params.id} />}
        />
        <Route>
          <>
            <Header />
            <main>
              <Beers store={store} />
            </main>
          </>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
