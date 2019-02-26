import React, { useRef } from "react";

import { useObservable } from "../hooks/useObservable";
import { useScrollReset } from "../hooks/useScrollReset";

import { createStore, initialState } from "./store/Store";
import { BeerStore, BeerStoreState } from "./store";
import { Loading } from "./Loading";
import { Errored } from "./Errored";
import { Ready } from "./Ready";

export interface BeerDetailsProps {
  id: string;
}

export const BeerDetails: React.FunctionComponent<BeerDetailsProps> = ({
  id
}) => {
  useScrollReset();

  const store = useRef<BeerStore | null>(null);
  const state = useObservable<BeerStoreState>(getStore().state$, initialState);

  function getStore() {
    if (!store.current) {
      store.current = createStore(id);
    }

    return store.current;
  }

  if (state.state === "mounting" || state.state === "loading") {
    return <Loading />;
  } else if (state.state === "errored") {
    return <Errored />;
  } else {
    return <Ready beer={state.beer} />;
  }
};
