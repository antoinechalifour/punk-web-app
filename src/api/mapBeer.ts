import { Beer } from "../types";
import { ApiBeer } from "./types";

export function mapBeer(apiBeer: ApiBeer): Beer {
  return {
    alcoholByVolume: apiBeer.abv,
    brewerTips: apiBeer.brewers_tips,
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
