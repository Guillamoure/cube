import { addPlayer, updatePlayers, addRoomID, setNumOfPlayers } from '../../actions/gameActions'
import { addWSID } from '../../actions/userActions'

export const distributeWS = (payload) => {
  debugger
  if (payload.start){
    addPlayer(payload.user)
  } else if (payload.userID){
    addWSID(payload.userID)
  } else if (payload.players){
    addRoomID(payload.roomID)
    setNumOfPlayers(payload.numOfPlayers)
    updatePlayers(payload.players)
  }
  return payload
}
