import Store from '../store'

const { dispatch } = Store

export const addUser = (user) => dispatch({type: "ADD USER", user })
export const removeUser = () => dispatch({type: "REMOVE USER" })
export const addWSID = (userID) => dispatch({type: "ADD WEBSOCKET USERID", userID })
