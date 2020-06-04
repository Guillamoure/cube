const initialState = {
  fieldCards: []
}

const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAY CARD":
    var fieldCardsDuplicate = [...state.fieldCards]
    fieldCardsDuplicate.push(action.card)
      return {...state, fieldCards: fieldCardsDuplicate}
    default:
      return state
  }
}

export default fieldReducer
