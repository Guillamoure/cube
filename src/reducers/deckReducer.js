const initialState = {
  decks: [],
  activeDeck: [
    {
      name: "Grappling Sundew",
      imageURL: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452881&type=card",
      mana: [
        {colorless: 1},
        {green: 1},
        {red: 0},
        {blue: 0},
        {black: 0},
        {white: 0}
      ]
    },
    {
      name: "Fated Retribution",
      imageURL: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=378383&type=card",
      mana: [
        {colorless: 4},
        {green: 0},
        {red: 0},
        {blue: 0},
        {black: 0},
        {white: 3}
      ]
    },
    {
      name: "Manglehorn",
      imageURL: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426877&type=card",
      mana: [
        {colorless: 2},
        {green: 1},
        {red: 0},
        {blue: 0},
        {black: 0},
        {white: 0}
      ]
    },
    {
      name: "Trained Condor",
      imageURL: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=370692&type=card",
      mana: [
        {colorless: 2},
        {green: 0},
        {red: 0},
        {blue: 1},
        {black: 0},
        {white: 0}
      ]
    },
    {
      name: "Alloy Myr",
      imageURL: "https://www.cardkingdom.com/images/magic-the-gathering/new-phyrexia/alloy-myr-29538-medium.jpg",
      mana: [
        {colorless: 3},
        {green: 0},
        {red: 0},
        {blue: 0},
        {black: 0},
        {white: 0}
      ]
    },
    {
      name: "Burst of Strength",
      imageURL: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366304&type=card",
      mana: [
        {colorless: 0},
        {green: 1},
        {red: 0},
        {blue: 0},
        {black: 0},
        {white: 0}
      ]
    },
    {
      name: "Armed // Dangerous",
      imageURL: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=368989&type=card",
      mana: [
        {colorless: 4},
        {green: 1},
        {red: 1},
        {blue: 0},
        {black: 0},
        {white: 0}
      ]
    },
    {
      name: "Manifold Key",
      imageURL: "https://www.cardkingdom.com/images/magic-the-gathering/core-set-2020/manifold-key-32197-medium.jpg",
      mana: [
        {colorless: 1},
        {green: 0},
        {red: 0},
        {blue: 0},
        {black: 0},
        {white: 0}
      ]
    },
    {
      name: "Sundering Stroke",
      imageURL: "https://www.cardkingdom.com/images/magic-the-gathering/throne-of-eldraine/sundering-stroke-87407-medium.jpg",
      mana: [
        {colorless: 6},
        {green: 0},
        {red: 1},
        {blue: 0},
        {black: 0},
        {white: 0}
      ]
    },
    {
      name: "Orochi Hatchery",
      imageURL: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=80241&type=card",
      mana: [
        {colorless: 0},
        {green: 0},
        {red: 0},
        {blue: 0},
        {black: 0},
        {white: 0},
        {x: 2}
      ]
    },
    {
      name: "Pressure Point",
      imageURL: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=391896&type=card",
      mana: [
        {colorless: 1},
        {green: 0},
        {red: 0},
        {blue: 0},
        {black: 0},
        {white: 1}
      ]
    },
    {
      name: "Avarice Totem",
      imageURL: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=39667&type=card",
      mana: [
        {colorless: 1},
        {green: 0},
        {red: 0},
        {blue: 0},
        {black: 0},
        {white: 0}
      ]
    },
    {
      name: "Deathbringer Regent",
      imageURL: "https://media.miniaturemarket.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/-/m-651-033.jpg",
      mana: [
        {colorless: 5},
        {green: 0},
        {red: 0},
        {blue: 0},
        {black: 2},
        {white: 0}
      ]
    },
    {
      name: "Simic Cluestone",
      imageURL: "https://www.cardkingdom.com/images/magic-the-gathering/dragons-maze/simic-cluestone-33544-medium.jpg",
      mana: [
        {colorless: 3},
        {green: 0},
        {red: 0},
        {blue: 0},
        {black: 0},
        {white: 0}
      ]
    },
  ]
}

const deckReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default deckReducer
