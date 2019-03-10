import { Beer } from "../../types";

export enum ActionTypes {
  MOUNTING = "mount",
  LOADING = "load",
  ADD_BEERS = "addBeers"
}

export interface ActionMount {
  type: ActionTypes.MOUNTING;
}

export interface ActionLoad {
  type: ActionTypes.LOADING;
}

export interface ActionAddBeer {
  type: ActionTypes.ADD_BEERS;
  beers: Beer[];
}

export type Action = ActionMount | ActionLoad | ActionAddBeer;
