import Store from '../store'
const { dispatch } = Store

export const addToHand = (card) => dispatch({type: "ADD HAND", card})
export const removeFromHand = (card) => dispatch({type: "REMOVE HAND", card})
