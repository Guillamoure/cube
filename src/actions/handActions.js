import Store from '../store'
const { dispatch } = Store

export const addToHand = (handCard) => dispatch({type: "ADD HAND", handCard})
export const removeFromHand = (handCard) => dispatch({type: "REMOVE HAND", handCard})
