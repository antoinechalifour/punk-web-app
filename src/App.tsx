import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const BeerDetails = React.lazy(() => import("./modules/BeerDetails/Module"));
const BeersList = React.lazy(() => import("./modules/BeersList/Module"));
const SearchBeers = React.lazy(() => import("./modules/SearchBeers/Module"));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <BrowserRouter>
        <Switch>
          <Route
            path="/beers/:id"
            render={({ match }) => <BeerDetails id={match.params.id} />}
          />
          <Route path="/search" render={() => <SearchBeers />} />
          <Route>
            <BeersList />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </React.Suspense>
  );
}
