const initialState = {
  players: []
}

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET PLAYER":
      var playersDuplicate = [...state.players]
      playersDuplicate.push({
        user: action.user,
        life: action.life
      })
      return {...state, players: playersDuplicate}
    default:
      return state
  }
}

export default cardReducer
