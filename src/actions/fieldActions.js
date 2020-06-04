import Store from '../store'

const { dispatch } = Store

export const playCard = (card) => dispatch({type: "PLAY CARD", card})
