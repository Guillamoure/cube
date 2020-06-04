const initialState = {
  graveyardCards: []
}

const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD CARD":
      var gyDuplicate = [...state.graveyardCards]
      gyDuplicate.push(action.card)
      return {...state, graveyardCards: gyDuplicate}
    default:
      return state
  }
}

export default fieldReducer
