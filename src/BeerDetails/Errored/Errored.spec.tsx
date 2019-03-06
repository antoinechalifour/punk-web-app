import { shallow } from "enzyme";
import React from "react";

import { Errored, ErroredProps } from "./Errored";

it("should match snapshot", () => {
  const props: ErroredProps = {};

  const wrapper = shallow(<Errored {...props} />);

  expect(wrapper).toMatchSnapshot();
});
