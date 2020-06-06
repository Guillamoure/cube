const initialState = {
  graveyardCards: []
}

const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD GRAVEYARD":
      var gyDuplicate = [...state.graveyardCards]
      gyDuplicate.push(action.graveyardCard)
      return {...state, graveyardCards: gyDuplicate}
    case "REMOVE GRAVEYARD":
      let found = false
      gyDuplicate = [...state.graveyardCards].filter(gyc => {
        if (gyc.id === action.graveyardCard.id){return false}
        else {return true}
      })
      return { ...state, graveyardCards: gyDuplicate }
    default:
      return state
  }
}

export default fieldReducer
