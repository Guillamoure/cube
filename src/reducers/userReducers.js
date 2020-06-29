const initialState = {
  user: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD USER":
      return {...state, user: action.user}
    case "REMOVE USER":
      return {...state, user: {}}
    case "ADD WEBSOCKET USERID":
      return {...state, user: {...state.user, userID: action.userID}}
    default:
      return state
  }
}

export default userReducer
