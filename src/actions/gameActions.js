import Store from '../store'

const { dispatch } = Store

export const setPlayer = (user) => dispatch({type: "SET PLAYER", user})
