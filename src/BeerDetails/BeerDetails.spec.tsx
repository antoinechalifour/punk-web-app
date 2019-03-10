import React from "react";
import { mount } from "enzyme";
import { createContainer, asValue, AwilixContainer } from "awilix";
import { of } from "rxjs";

import { context as DiContext } from "../Di";
import { ViewModelState, ViewModel } from "./types";

import { BeerDetails } from "./BeerDetails";
import { Loading } from "./Loading";
import { Errored } from "./Errored";
import { Ready } from "./Ready";

jest.mock("react-router-dom");

// FIXME: useObservable does not update enzyme wrappers
describe.skip("BeerDetails", () => {
  describe("when state is mounting", () => {
    let container: AwilixContainer;

    beforeEach(() => {
      const state: ViewModelState = {
        state: "mounting"
      };
      const mockService = {
        state$: of(state)
      };
      container = createContainer();

      container.register<ViewModel>("viewModel", asValue(mockService));
    });

    it("should render a loading component", () => {
      const wrapper = mount(
        <DiContext.Provider value={() => container}>
          <BeerDetails />
        </DiContext.Provider>
      );

      expect(wrapper.find(Errored)).toHaveLength(0);
      expect(wrapper.find(Ready)).toHaveLength(0);
      expect(wrapper.find(Loading)).toHaveLength(1);
    });
  });

  describe("when state is loading", () => {
    let container: AwilixContainer;

    beforeEach(() => {
      const state: ViewModelState = {
        state: "loading"
      };
      const mockService = {
        state$: of(state)
      };
      container = createContainer();

      container.register<ViewModel>("viewModel", asValue(mockService));
    });

    it("should render a loading component", () => {
      const wrapper = mount(
        <DiContext.Provider value={() => container}>
          <BeerDetails />
        </DiContext.Provider>
      );

      expect(wrapper.find(Errored)).toHaveLength(0);
      expect(wrapper.find(Ready)).toHaveLength(0);
      expect(wrapper.find(Loading)).toHaveLength(1);
    });
  });

  describe("when state is errored", () => {
    let container: AwilixContainer;

    beforeEach(() => {
      const state: ViewModelState = {
        state: "errored",
        error: new Error("Something went wrong")
      };
      const mockService = {
        state$: of(state)
      };
      container = createContainer();

      container.register<ViewModel>("viewModel", asValue(mockService));
    });

    it("should render an error page", () => {
      const wrapper = mount(
        <DiContext.Provider value={() => container}>
          <BeerDetails />
        </DiContext.Provider>
      );

      expect(wrapper.find(Loading)).toHaveLength(0);
      expect(wrapper.find(Ready)).toHaveLength(0);
      expect(wrapper.find(Errored)).toHaveLength(1);
    });
  });

  describe("when the beer is loaded", () => {
    let container: AwilixContainer;
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

    beforeEach(() => {
      const state: ViewModelState = {
        state: "ready",
        beer
      };
      const mockService = {
        state$: of(state)
      };
      container = createContainer();

      container.register<ViewModel>("viewModel", asValue(mockService));
    });

    it("should render the beer page", () => {
      const wrapper = mount(
        <DiContext.Provider value={() => container}>
          <BeerDetails />
        </DiContext.Provider>
      );

      expect(wrapper.find(Loading)).toHaveLength(0);
      expect(wrapper.find(Errored)).toHaveLength(0);
      expect(wrapper.find(Ready)).toHaveLength(1);
      expect(wrapper.find(Ready).props()).toEqual({
        beer
      });
    });
  });
});
