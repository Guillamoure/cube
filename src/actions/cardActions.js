import Store from '../store'

const { dispatch } = Store

export const updateCardDimensions = (width, height) => dispatch({type: "SET CARD DIMENSIONS", width, height})
