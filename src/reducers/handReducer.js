const initialState = {
  hand: []
}

const handReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD HAND":
      var handDuplicate = [...state.hand]
      handDuplicate.push(action.card)
      return { ...state, hand: handDuplicate }
    default:
      return state
  }
}

export default handReducer
