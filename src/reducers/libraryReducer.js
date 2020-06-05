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
    case "SELECT LIBRARY":
      return {...state, activeLibrary: action.library}
    case "SHUFFLE":
      let shuffledLibrary = shuffle(state.activeLibrary)
      return {...state, activeLibrary: shuffledLibrary}
    default:
      return state
  }
}

const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default libraryReducer
