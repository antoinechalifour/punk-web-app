export interface Beer {
  id: number;
  name: string;
  imageUrl: string;
  tagline: string;
  firstBrewed: string;
  description: string;
  alcoholByVolume: number;
  srm: number;
  ebc: number;
  kind: string;
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
