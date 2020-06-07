import Store from '../store'

const { dispatch } = Store

export const setPlayer = (user, life) => dispatch({type: "SET PLAYER", user, life})
