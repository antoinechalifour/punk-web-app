import { shallow } from "enzyme";
import React from "react";

import { BeerCard, BeerCardProps } from "./BeerCard";

it("should match snapshot", () => {
  const props: BeerCardProps = {
    imageUrl: "http://example.com/picture.png",
    id: 1,
    name: "Punk IPA",
    tagline: "Post modern classic"
  };

  const wrapper = shallow(<BeerCard {...props} />);

  expect(wrapper).toMatchSnapshot();
});
