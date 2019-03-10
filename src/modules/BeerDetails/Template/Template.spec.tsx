import { shallow } from "enzyme";
import React from "react";

import { Template, TemplateProps } from "./Template";

it("should match snapshot", () => {
  const props: TemplateProps = {
    brewersTips: <div>test - brewersTips</div>,
    description: <div>test - description</div>,
    foodPairing: <div>test - foodPairing</div>,
    generalInformation: <div>test - generalInformation</div>,
    header: <div>test - header</div>,
    hops: <div>test - hops</div>,
    image: <div>test - image</div>,
    malts: <div>test - malts</div>,
    yeast: <div>test - yeast</div>
  };

  const wrapper = shallow(<Template {...props} />);

  expect(wrapper).toMatchSnapshot();
});
