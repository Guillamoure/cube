import Store from '../store'

const { dispatch } = Store

export const playCard = (libraryCard, coordinates) => dispatch({type: "PLAY CARD", libraryCard, coordinates})
export const moveCard = (libraryCard, coordinates) => dispatch({type: "MOVE CARD", libraryCard, coordinates})
export const updateTap = (libraryCard) => dispatch({type: "TAP", libraryCard})
