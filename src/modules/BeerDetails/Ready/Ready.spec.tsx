import { shallow } from "enzyme";
import React from "react";

import { Ready, ReadyProps } from "./Ready";

const beer = {
  alcoholByVolume: 4.5,
  brewerTips:
    "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
  contributedBy: "Sam Mason <samjbmason>",
  description:
    "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
  ebc: 20,
  firstBrewed: "09/2007",
  foodPairing: [
    "Spicy chicken tikka masala",
    "Grilled chicken quesadilla",
    "Caramel toffee cake"
  ],
  hops: [
    {
      add: "start",
      amount: "25 grams",
      attribute: "bitter",
      name: "Fuggles"
    },
    {
      add: "start",
      amount: "25 grams",
      attribute: "bitter",
      name: "First Gold"
    },
    {
      add: "middle",
      amount: "37.5 grams",
      attribute: "flavour",
      name: "Fuggles"
    },
    {
      add: "middle",
      amount: "37.5 grams",
      attribute: "flavour",
      name: "First Gold"
    },
    {
      add: "end",
      amount: "37.5 grams",
      attribute: "flavour",
      name: "Cascade"
    }
  ],
  id: 1,
  imageUrl: "https://images.punkapi.com/v2/keg.png",
  kind: "",
  malts: [
    {
      amount: "3.3 kilograms",
      name: "Maris Otter Extra Pale"
    },
    {
      amount: "0.2 kilograms",
      name: "Caramalt"
    },
    {
      amount: "0.4 kilograms",
      name: "Munich"
    }
  ],
  name: "Buzz",
  ph: 4.4,
  srm: 10,
  tagline: "A Real Bitter Experience.",
  yeast: "Wyeast 1056 - American Ale™"
};

it("should match snapshot", () => {
  const props: ReadyProps = { beer };

  const wrapper = shallow(<Ready {...props} />);

  expect(wrapper).toMatchSnapshot();
});
