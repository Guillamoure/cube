import Store from '../store'

const { dispatch } = Store

export const playCard = (card, coordinates) => dispatch({type: "PLAY CARD", card, coordinates})
export const moveCard = (card, coordinates) => dispatch({type: "MOVE CARD", card, coordinates})
