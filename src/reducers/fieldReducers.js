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
        let cardDuplicate = {...c}
        cardDuplicate.coordinates.x += action.coordinates.x
        cardDuplicate.coordinates.y += action.coordinates.y
        return cardDuplicate
      })
      return {...state, fieldCards: fieldCardsDuplicate}
    case "TAP":
      fieldCardsDuplicate = [...state.fieldCards].map(fc => {
        if (fc.libraryCard.id === action.libraryCard.id){
          return {...fc, tapped: !fc.tapped}
        } else {return fc}
      })
      return {...state, fieldCards: fieldCardsDuplicate}
    case "REMOVE CARD":
    console.log(action)
    console.log(state.fieldCards)
      let found = false
      fieldCardsDuplicate = [...state.fieldCards].filter(fc => {
        if (fc.libraryCard.id === action.libraryCard.id && !found){
          found = true
          return false
        } else {return true}
      })
      return { ...state, fieldCards: fieldCardsDuplicate }
    default:
      return state
  }
}

export default fieldReducer
