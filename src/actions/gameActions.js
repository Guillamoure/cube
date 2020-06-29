import Store from '../store'

const { dispatch } = Store

export const addPlayer = (user) => dispatch({type: "ADD PLAYER", user})
export const updatePlayers = (players) => dispatch({type: "UPDATE PLAYERS", players})
export const addRoomID = (roomID) => dispatch({type: "ADD ROOM ID", roomID})
export const setNumOfPlayers = (numOfPlayers) => dispatch({type: "SET GAME PLAYER MAXIMUM", numOfPlayers})
