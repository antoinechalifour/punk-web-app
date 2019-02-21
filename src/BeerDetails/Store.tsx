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
  categories: string[];
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

const categories = [
  {
    from: 0,
    to: 2,
    name: "Pale Lager"
  },
  {
    from: 0,
    to: 2,
    name: "Witbier"
  },
  {
    from: 0,
    to: 2,
    name: "Pilsener"
  },
  {
    from: 0,
    to: 2,
    name: "Berliner Weisse"
  },
  {
    from: 3,
    to: 3,
    name: "Maibock"
  },
  {
    from: 3,
    to: 3,
    name: "Blonde Ale"
  },
  {
    from: 4,
    to: 5,
    name: "Weissbier"
  },
  {
    from: 6,
    to: 7,
    name: "American Pale Ale"
  },
  {
    from: 6,
    to: 7,
    name: "India Pale Ale"
  },
  {
    from: 8,
    to: 9,
    name: "Weissbier"
  },
  {
    from: 8,
    to: 9,
    name: "Saison"
  },
  {
    from: 10,
    to: 12,
    name: "English Bitter"
  },
  {
    from: 10,
    to: 12,
    name: "ESB"
  },
  {
    from: 13,
    to: 16,
    name: "Biere de Garde"
  },
  {
    from: 13,
    to: 16,
    name: "Double IPA"
  },
  {
    from: 17,
    to: 19,
    name: "Dark Lager"
  },
  {
    from: 17,
    to: 19,
    name: "Vienna Lager"
  },
  {
    from: 17,
    to: 19,
    name: "Marzen"
  },
  {
    from: 17,
    to: 19,
    name: "Amber Ale"
  },
  {
    from: 20,
    to: 23,
    name: "Brown Ale"
  },
  {
    from: 20,
    to: 23,
    name: "Bock"
  },
  {
    from: 20,
    to: 23,
    name: "Dunkel"
  },
  {
    from: 20,
    to: 23,
    name: "Dunkelweizen"
  },
  {
    from: 24,
    to: 28,
    name: "Irish Dry Stout"
  },
  {
    from: 24,
    to: 28,
    name: "Doppelbock"
  },
  {
    from: 24,
    to: 28,
    name: "Porter"
  },
  {
    from: 29,
    to: 34,
    name: "Stout"
  },
  {
    from: 35,
    to: 39,
    name: "Foreign Stout"
  },
  {
    from: 35,
    to: 39,
    name: "Baltic Porter"
  },
  {
    from: 40,
    to: 40,
    name: "Imperial Stout"
  }
];

const getCategory = (srm: number) =>
  categories
    .filter(category => srm >= category.from && srm <= category.to)
    .map(category => category.name);

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
    yeast: apiBeer.ingredients.yeast,
    categories: getCategory(apiBeer.srm)
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
