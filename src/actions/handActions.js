import Store from '../store'
const { dispatch } = Store

export const addToHand = (card) => dispatch({type: "ADD HAND", card})
