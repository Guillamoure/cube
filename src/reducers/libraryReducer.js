const initialState = {
  libraries: [],
  activeLibrary: {}
}

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE TOP CARD":
      var libraryDuplicate = [...state.activeLibrary]
      libraryDuplicate.shift()
      return {...state, activeLibrary: libraryDuplicate}
    case "UPDATE LIBRARY":
      return {...state, activeLibrary: action.library}
    default:
      return state
  }
}

export default libraryReducer
