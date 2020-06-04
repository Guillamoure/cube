const initialState = {
  data: {},
  kind: null
}

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET MODAL":
      return {...state, data: action.data, kind: action.kind}
    default:
      return state
  }
}

export default cardReducer
