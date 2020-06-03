import { removeTopCard } from '../actions/libraryActions'
import { addToHand } from '../actions/handActions'

export const draw = (e, state) => {
  let topCard = {...state}.libraryReducer.activeLibrary[0]
  console.log(topCard)
  removeTopCard()
  addToHand(topCard)
}

export const shuffle = (state) => {

}
