import { Beer } from "../types";
import { ApiBeer } from "./types";

function getColorFromSrm(srm: number) {
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

  return srmToColor[Math.min(Math.round(srm), 40)];
}

export function mapBeer(apiBeer: ApiBeer): Beer {
  return {
    alcoholByVolume: apiBeer.abv,
    brewerTips: apiBeer.brewers_tips,
    color: getColorFromSrm(apiBeer.srm),
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
