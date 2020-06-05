import Store from '../store'
const { dispatch } = Store

export const removeTopCard = () => dispatch({type: "REMOVE TOP CARD"})
export const selectLibrary = (library) => dispatch({type: "SELECT LIBRARY", library})
export const shuffle = () => dispatch({type: "SHUFFLE"})
