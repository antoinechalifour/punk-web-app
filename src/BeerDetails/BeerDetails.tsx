import React from "react";

import { useDependency } from "../hooks/useDependency";
import { useObservable } from "../hooks/useObservable";
import { useScrollReset } from "../hooks/useScrollReset";

import { ViewModel, ViewModelState } from "./types";
import { initialState } from "./ViewModel";

import { Loading } from "./Loading";
import { Errored } from "./Errored";
import { Ready } from "./Ready";

export interface BeerDetailsProps {}

export const BeerDetails: React.FunctionComponent<BeerDetailsProps> = ({}) => {
  useScrollReset();
  const store = useDependency(container =>
    container.resolve<ViewModel>("viewModel")
  );
  const state = useObservable<ViewModelState>(store.state$, initialState);

  if (state.state === "mounting" || state.state === "loading") {
    return <Loading />;
  } else if (state.state === "errored") {
    return <Errored />;
  } else {
    return <Ready beer={state.beer} />;
  }
};
