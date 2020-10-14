import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import DeckSelection from '../components/deck_selection'

import socketIOClient from 'socket.io-client'
import { expressURL } from '../helper_methods/variables'
import { distributeWS } from '../helper_methods/websockets/new_game'

const WaitingRoom = props => {

  const user = useSelector(state => state.userReducers.user)
  const players = useSelector(state => state.gameReducer.players)
  const playerMaximum = useSelector(state => state.gameReducer.numOfPlayers)

  const [displayName, setDisplayName] = React.useState(null)
  const [client, setClient] = React.useState(null)
  const [clientStatus, setClientStatus] = React.useState(false)
  const [inputName, setInputName] = React.useState("")
  const [numOfPlayers, setNumOfPlayers] = React.useState(2)

  React.useEffect(() => {
    if (displayName && !client){

      setClient(socketIOClient(expressURL))

    } else if (client && !clientStatus){

      // client.onopen = () => {
      //   setClientStatus(true)
      // }
			client.emit('join', () => {
				console.log("Did it work?")
			})
			client.on('welcome', (data) => {
				setClientStatus(true)
				distributeWS(data)
			})
      client.on('joinRoom', (data) =>{
        // const data = JSON.parse(message.data)
        distributeWS(data)
        // if (data.payload.start){
        //   client.send(JSON.stringify({
        //     type: "message",
        //     payload: {
        //       user: displayName,
        //       start: false
        //     }
        //   }))
        // }
      })

    } else if (clientStatus) {
      if (user.userID){
        console.log(user)
        client.emit('joinRoom', {
          user: displayName,
          _id: user._id,
          userID: user.userID,
          numOfPlayers,
          players: []
        })
      }
    }

    if (user && !inputName){
      setInputName(user.username)

    }
  }, [displayName, client, clientStatus, user])

  React.useEffect(() => {
    if (client){
      return function cu() {
        console.log("butts")
        console.log("componentWillUnmount")
        distributeWS({
          players: [],
          roomID: null,
          numOfPlayers: 0,
          userID: null
        })
        client.send(JSON.stringify({payload: {type: "unmount"}}))
      }
    }
  }, [client])

  const formSubmit = (e) => {
    e.preventDefault()
    setDisplayName(inputName)
  }

  const selectFriends = e => {
    e.preventDefault()
  }

  const toggleNumOfPlayers = (e, num) => {
    e.preventDefault()
    setNumOfPlayers(num)
  }

  const renderForm = () => {
    return (
      <form>
        <input name="displayName" value={inputName} onChange={e => setInputName(e.target.value)}/>
        <br/>
        <label>Num of Players</label>
        <button onClick={e => toggleNumOfPlayers(e, 2)} style={numOfPlayers === 2 ? {backgroundColor: "grey"} : {backgroundColor: "lightgrey"}}>2</button>
        <br/>
        <button onClick={formSubmit}>Join Game</button>
        <button onClick={selectFriends} style={{backgroundColor: "red"}}><strike>Start Game with Friends</strike></button>
      </form>
    )
  }

  const renderStartGame = () => {

    return (
      <div>
        Signed Up!
      </div>
    )
  }

  const renderAwaitingPlayers = () => {
    return (
      <div>
        <p>{players.map(p => p.user).join(", ")} {players.length > 1 ? "are" : "is"} all set!</p>
        <p>{players.length} out of {playerMaximum}</p>
      </div>
    )
  }

  return (
    <main>
      {!displayName && renderForm()}
      {clientStatus && renderStartGame()}
      {!!players.length && renderAwaitingPlayers()}
      {players.length === playerMaximum && playerMaximum > 0 && <DeckSelection />}
    </main>
  )
}

export default WaitingRoom
