import { createSearchStore, SearchStore } from "./Store";
import { Beer } from "../types";
import { flushPromises } from "../test-utils";

jest.useFakeTimers();

const beers: Beer[] = [
  {
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
  }
];

describe("SearchBeers.store", () => {
  describe("search", () => {
    let subscriber: jest.Mock;
    let store: SearchStore;
    let searchBeers: jest.Mock;

    beforeEach(async () => {
      subscriber = jest.fn();
      searchBeers = jest.fn().mockResolvedValue(beers);
      store = createSearchStore({
        api: {
          fetchBeer: jest
            .fn()
            .mockRejectedValue(new Error("Should not be called")),
          fetchBeers: jest
            .fn()
            .mockRejectedValue(new Error("Should not be called")),
          searchBeers
        }
      });
      store.results$.subscribe(subscriber);

      await flushPromises();
    });

    it("should send the correct state when the query is less than 2 chars", async () => {
      store.search("l");

      await flushPromises();

      expect(subscriber).toHaveBeenCalledTimes(1);
      expect(subscriber).toHaveBeenCalledWith({
        query: "l",
        beers: null,
        isSearching: false
      });
    });

    it("should send the loading state when the query is more than 2 chars", async () => {
      store.search("la");

      jest.runAllTimers();
      await flushPromises();

      expect(subscriber).toHaveBeenCalledTimes(2);
      expect(subscriber).toHaveBeenNthCalledWith(1, {
        query: "la",
        beers: null,
        isSearching: true
      });
    });

    it("should send the results state when the query is more than 2 chars", async () => {
      store.search("la");

      jest.runAllTimers();
      await flushPromises();

      expect(searchBeers).toHaveBeenCalledTimes(1);
      expect(searchBeers).toHaveBeenCalledWith("la");
      expect(subscriber).toHaveBeenCalledTimes(2);
      expect(subscriber).toHaveBeenNthCalledWith(2, {
        query: "la",
        beers,
        isSearching: false
      });
    });
  });
});
