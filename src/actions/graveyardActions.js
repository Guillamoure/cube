import Store from '../store'

const { dispatch } = Store

export const addCard = (card) => dispatch({type: "ADD TO GRAVEYARD", card})
