import { Observable, from } from "rxjs";

interface ApiBeer {
  id: string;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number; // alcohol by volume
  ibu: number; // biterness unit scale
  target_fg: number; // final gravity
  target_og: number; // original gravity
  ebc: number; // european brewery convention
  srm: number; // standard reference method
  ph: number;
  attenuation_level: number;
  volume: {
    value: number;
    unit: string;
  };
  boil_volume: {
    value: number;
    unit: string;
  };
  method: {
    mash_temp: [
      {
        temp: {
          value: number;
          unit: string;
        };
        duration: number;
      }
    ];
    fermentation: {
      temp: {
        value: number;
        unit: string;
      };
    };
    twist: string | null;
  };
  ingredients: {
    malt: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
    }[];
    hops: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
      add: string;
      attribute: string;
    }[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export interface Beer {
  id: string;
  name: string;
  imageUrl: string;
  tagline: string;
  firstBrewed: string;
  description: string;
  alcoholByVolume: number;
  srm: number;
  ebc: number;
  kind: string;
  color: string;
  ph: number;
  malts: {
    name: string;
    amount: string;
  }[];
  hops: {
    name: string;
    amount: string;
    attribute: string;
    add: string;
  }[];
  yeast: string;
  foodPairing: string[];
  brewerTips: string;
  contributedBy: string;
}

const srmToColor: any = {
  1: "#ffe28e",
  2: "#ffd36d",
  3: "#ffc250",
  4: "#ffb63b",
  5: "#fca721",
  6: "#f79d02",
  7: "#f19102",
  8: "#e78301",
  9: "#e27901",
  10: "#d97001",
  11: "#d26601",
  12: "#ca5e01",
  13: "#c35701",
  14: "#bb4f01",
  15: "#b34601",
  16: "#ad4201",
  17: "#a73c01",
  18: "#9c3601",
  19: "#963000",
  20: "#912c00",
  21: "#8b2700",
  22: "#842402",
  23: "#7c1f00",
  24: "#761b00",
  25: "#71801",
  26: "#6d1703",
  27: "#651400",
  28: "#5f1000",
  29: "#5b0f00",
  30: "#530e00",
  31: "#500c04",
  32: "#550a03",
  33: "#490a0a",
  34: "#420606",
  35: "#3d0707",
  36: "#3c0709",
  37: "#37090a",
  38: "#33070a",
  39: "#330a0e",
  40: "#2f0a0c"
};

function beerAdapter(apiBeer: ApiBeer): Beer {
  return {
    alcoholByVolume: apiBeer.abv,
    brewerTips: apiBeer.brewers_tips,
    color: srmToColor[Math.min(Math.round(apiBeer.srm), 40)],
    contributedBy: apiBeer.contributed_by,
    description: apiBeer.description,
    ebc: apiBeer.ebc,
    firstBrewed: apiBeer.first_brewed,
    foodPairing: apiBeer.food_pairing,
    hops: apiBeer.ingredients.hops.map(apiHop => ({
      add: apiHop.add,
      amount: `${apiHop.amount.value} ${apiHop.amount.unit}`,
      attribute: apiHop.attribute,
      name: apiHop.name
    })),
    id: apiBeer.id,
    imageUrl: apiBeer.image_url,
    kind: "",
    malts: apiBeer.ingredients.malt.map(apiMalt => ({
      name: apiMalt.name,
      amount: `${apiMalt.amount.value} ${apiMalt.amount.unit}`
    })),
    name: apiBeer.name,
    ph: apiBeer.ph,
    srm: apiBeer.srm,
    tagline: apiBeer.tagline,
    yeast: apiBeer.ingredients.yeast
  };
}

export interface BeerStore {
  state$: Observable<Beer>;
}

function fetchBeer(id: string) {
  return fetch(`https://api.punkapi.com/v2/beers/${id}`)
    .then(response => response.json() as Promise<ApiBeer[] & { length: 1 }>)
    .then(beers => beers[0])
    .then(beerAdapter);
}

export function createStore(beerId: string): BeerStore {
  const state$ = from(fetchBeer(beerId));

  return {
    state$
  };
}
