import { shallow } from "enzyme";
import React from "react";

import { Loading, LoadingProps } from "./Loading";

it("should match snapshot", () => {
  const props: LoadingProps = {};

  const wrapper = shallow(<Loading {...props} />);

  expect(wrapper).toMatchSnapshot();
});
