const initialState = {
  cardDimensions: {
    width: 0,
    height: 0
  }
}

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET CARD DIMENSIONS":
      return {...state, cardDimensions: {width: action.width, height: action.height}}
    default:
      return state
  }
}

export default cardReducer
