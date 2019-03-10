import { BeerApi, createApi } from "./api";

const beers = [
  {
    id: 1,
    name: "Buzz",
    tagline: "A Real Bitter Experience.",
    first_brewed: "09/2007",
    description:
      "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 4.5,
    ibu: 60,
    target_fg: 1010,
    target_og: 1044,
    ebc: 20,
    srm: 10,
    ph: 4.4,
    attenuation_level: 75,
    volume: {
      value: 20,
      unit: "liters"
    },
    boil_volume: {
      value: 25,
      unit: "liters"
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 64,
            unit: "celsius"
          },
          duration: 75
        }
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius"
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: "Maris Otter Extra Pale",
          amount: {
            value: 3.3,
            unit: "kilograms"
          }
        },
        {
          name: "Caramalt",
          amount: {
            value: 0.2,
            unit: "kilograms"
          }
        },
        {
          name: "Munich",
          amount: {
            value: 0.4,
            unit: "kilograms"
          }
        }
      ],
      hops: [
        {
          name: "Fuggles",
          amount: {
            value: 25,
            unit: "grams"
          },
          add: "start",
          attribute: "bitter"
        },
        {
          name: "First Gold",
          amount: {
            value: 25,
            unit: "grams"
          },
          add: "start",
          attribute: "bitter"
        },
        {
          name: "Fuggles",
          amount: {
            value: 37.5,
            unit: "grams"
          },
          add: "middle",
          attribute: "flavour"
        },
        {
          name: "First Gold",
          amount: {
            value: 37.5,
            unit: "grams"
          },
          add: "middle",
          attribute: "flavour"
        },
        {
          name: "Cascade",
          amount: {
            value: 37.5,
            unit: "grams"
          },
          add: "end",
          attribute: "flavour"
        }
      ],
      yeast: "Wyeast 1056 - American Ale™"
    },
    food_pairing: [
      "Spicy chicken tikka masala",
      "Grilled chicken quesadilla",
      "Caramel toffee cake"
    ],
    brewers_tips:
      "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
    contributed_by: "Sam Mason <samjbmason>"
  }
];

describe("api", () => {
  let api: BeerApi;

  beforeEach(() => {
    api = createApi({ apiBase: "http://example.com/v1" });
    ((fetch as any) as jest.Mock).mockClear();
  });

  describe("fetchBeer", () => {
    beforeEach(() => {
      ((fetch as any) as jest.Mock).mockResolvedValue({
        ok: true,
        json() {
          return beers;
        }
      });
    });

    it("should call the correct url", async () => {
      await api.fetchBeer("666");

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith("http://example.com/v1/beers/666");
    });

    it("should return the beer", async () => {
      const response = await api.fetchBeer("666");

      expect(response).toEqual({
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
      });
    });
  });

  describe("fetchBeers", () => {
    beforeEach(() => {
      ((fetch as any) as jest.Mock).mockResolvedValue({
        ok: true,
        json() {
          return beers;
        }
      });
    });

    it("should call the correct url", async () => {
      await api.fetchBeers(12);

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith("http://example.com/v1/beers?page=12");
    });

    it("should return the beers", async () => {
      const response = await api.fetchBeers(12);

      expect(response).toEqual([
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
      ]);
    });
  });

  describe("searchBeers", () => {
    beforeEach(() => {
      ((fetch as any) as jest.Mock).mockResolvedValue({
        ok: true,
        json() {
          return beers;
        }
      });
    });

    it("should call the correct url", async () => {
      await api.searchBeers("punk");

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        "http://example.com/v1/beers?beer_name=punk"
      );
    });

    it("should return the beers", async () => {
      const response = await api.searchBeers("punk");

      expect(response).toEqual([
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
      ]);
    });
  });
});
