import { of, throwError } from "rxjs";

import { BeerRepository } from "../../repository/beers/types";
import { flushPromises } from "../../test-utils";
import { ViewModel } from "./types";
import { createViewModel } from "./ViewModel";

describe("beer details ViewModel", () => {
  describe("when the API resolves the beer", () => {
    const beerId = "1";
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
    const subscriber = jest.fn();
    let beerRepository: BeerRepository;
    let viewModel: ViewModel;

    beforeEach(async () => {
      beerRepository = {
        getBeer: jest.fn().mockImplementation(() => of(beer)),
        getBeers: jest
          .fn()
          .mockImplementation(() =>
            throwError(new Error("Should not be called"))
          ),
        searchBeers: jest
          .fn()
          .mockImplementation(() =>
            throwError(new Error("Should not be called"))
          ),
        loadMoreBeers: jest.fn()
      };
      viewModel = createViewModel({ beerId, beerRepository });
      viewModel.state$.subscribe(subscriber);
      await flushPromises();
    });

    it("should call the API with the correct parameters", () => {
      expect(beerRepository.getBeer).toHaveBeenCalledTimes(1);
      expect(beerRepository.getBeer).toHaveBeenCalledWith(beerId);
    });

    it("should first notify the mounting state to the subscriber", () => {
      expect(subscriber).toHaveBeenNthCalledWith(1, {
        state: "mounting"
      });
    });

    it("should then notify the loading state to the subscriber", () => {
      expect(subscriber).toHaveBeenNthCalledWith(2, {
        state: "loading"
      });
    });

    it("should then notify the beers to the subscriber", () => {
      expect(subscriber).toHaveBeenNthCalledWith(3, {
        state: "ready",
        beer
      });
    });
  });

  describe("when the API rejects an error", () => {
    const beerId = "1";
    const error = new Error("Network failed");
    let beerRepository: BeerRepository;
    const subscriber = jest.fn();

    let viewModel: ViewModel;

    beforeEach(async () => {
      beerRepository = {
        getBeer: jest.fn().mockImplementation(() => throwError(error)),
        getBeers: jest
          .fn()
          .mockImplementation(() =>
            throwError(new Error("Should not be called"))
          ),
        searchBeers: jest
          .fn()
          .mockImplementation(() => new Error("Should not be called")),
        loadMoreBeers: jest.fn()
      };
      viewModel = createViewModel({ beerId, beerRepository });
      viewModel.state$.subscribe(subscriber);
      await flushPromises();
    });

    it("should call the API with the correct parameters", () => {
      expect(beerRepository.getBeer).toHaveBeenCalledTimes(1);
      expect(beerRepository.getBeer).toHaveBeenCalledWith(beerId);
    });

    it("should first notify the mounting state to the subscriber", () => {
      expect(subscriber).toHaveBeenNthCalledWith(1, {
        state: "mounting"
      });
    });

    it("should then notify the loading state to the subscriber", () => {
      expect(subscriber).toHaveBeenNthCalledWith(2, {
        state: "loading"
      });
    });

    it("should then notify the beers to the subscriber", () => {
      expect(subscriber).toHaveBeenNthCalledWith(3, {
        state: "errored",
        error
      });
    });
  });
});
