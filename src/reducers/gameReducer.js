const initialState = {
  players: [],
  roomID: null,
  numOfPlayers: 0
}

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD PLAYER":
      var playersDuplicate = [...state.players]
      playersDuplicate.push({
        user: action.user
      })
      return {...state, players: playersDuplicate}
    case "UPDATE PLAYERS":
      return {...state, players: [...action.players]}
    case "ADD ROOM ID":
      return {...state, roomID: action.roomID}
    case "SET GAME PLAYER MAXIMUM":
      return {...state, numOfPlayers: action.numOfPlayers}
    default:
      return state
  }
}

export default cardReducer
