import Store from '../store'
const { dispatch } = Store

export const removeTopCard = () => dispatch({type: "REMOVE TOP CARD"})
export const updateLibrary = (library) => dispatch({type: "UPDATE LIBRARY", library})
