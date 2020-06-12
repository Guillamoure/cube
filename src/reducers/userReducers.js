const initialState = {
  user: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD USER":
      return {...state, user: action.user}
    case "REMOVE USER":
      return {...state, user: {}}
    default:
      return state
  }
}

export default userReducer
