import Store from '../store'

const { dispatch } = Store

export const addGraveyard = (graveyardCard) => dispatch({type: "ADD GRAVEYARD", graveyardCard})
export const removeGraveyard = (graveyardCard) => dispatch({type: "REMOVE GRAVEYARD", graveyardCard})
