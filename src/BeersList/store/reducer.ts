import { Action, ActionTypes } from "./actions";
import { BeerStoreState } from "./types";

export function beersReducer(
  state: BeerStoreState,
  action: Action
): BeerStoreState {
  switch (action.type) {
    case ActionTypes.ADD_BEERS:
      return {
        state: "ready",
        beers: [...state.beers, ...action.beers]
      };

    case ActionTypes.LOADING:
      return {
        state: "loading",
        beers: state.beers
      };

    default:
      return state;
  }
}

export const initialState: BeerStoreState = {
  state: "mounting",
  beers: []
};
