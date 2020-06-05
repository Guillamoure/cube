import { removeTopCard } from '../actions/libraryActions'
import { addToHand } from '../actions/handActions'

export const draw = (e, state) => {
  let topCard = {...state}.libraryReducer.activeLibrary[0]
  console.log(topCard)
  removeTopCard()
  addToHand(topCard)
}

export const shuffle = (array) => {
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
