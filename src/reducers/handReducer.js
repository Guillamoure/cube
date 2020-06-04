const initialState = {
  hand: []
}

const handReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD HAND":
      var handDuplicate = [...state.hand]
      handDuplicate.push(action.card)
      return { ...state, hand: handDuplicate }
    case "REMOVE HAND":
      let found = false
      handDuplicate = [...state.hand].filter(hc => {
        if (hc.id === action.card.id && !found){
          found = true
          return false
        } else {return true}
      })
      return { ...state, hand: handDuplicate }
    default:
      return state
  }
}

export default handReducer
