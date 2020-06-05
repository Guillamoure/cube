const initialState = {
  fieldCards: []
}

const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAY CARD":
      var fieldCardsDuplicate = [...state.fieldCards]
      fieldCardsDuplicate.push({
        libraryCard: action.libraryCard,
        coordinates: action.coordinates
      })
      return {...state, fieldCards: fieldCardsDuplicate}
    case "MOVE CARD":
      fieldCardsDuplicate = [...state.fieldCards].map(c => {
        if(c.libraryCard.id !== action.libraryCard.id){return c}
        console.log(action.coordinates)
        let cardDuplicate = {...c}
        cardDuplicate.coordinates.x += action.coordinates.x
        cardDuplicate.coordinates.y += action.coordinates.y
        return cardDuplicate
      })
      return {...state, fieldCards: fieldCardsDuplicate}
    default:
      return state
  }
}

export default fieldReducer
