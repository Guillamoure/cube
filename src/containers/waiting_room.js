import React from 'react'
import { useSelector } from 'react-redux'

import { w3cwebsocket as W3CWebSocket} from 'websocket'
import { wsURL } from '../helper_methods/variables'
import { distributeWS } from '../helper_methods/websockets/new_game'

const WaitingRoom = props => {

  const username = useSelector(state => state.userReducers.user.username)

  const [displayName, setDisplayName] = React.useState(null)
  const [client, setClient] = React.useState(null)
  const [clientStatus, setClientStatus] = React.useState(false)
  const [inputName, setInputName] = React.useState("")

  React.useEffect(() => {
    if (displayName && !client){
      setClient(new W3CWebSocket(`ws://${wsURL}`))
    } else if (client && !clientStatus){
      client.onopen = () => {
        setClientStatus(true)
      }
      client.onmessage = (message) => {
        const data = JSON.parse(message.data)
        console.log(distributeWS(data.payload))
      }
    } else if (clientStatus) {
      client.send(JSON.stringify({
        type: "message",
        payload: {
          user: displayName,
          start: true
        }
      }))
    }
    if (username && !inputName){
      setInputName(username)
    }
  }, [displayName, client, clientStatus, username])

  const formSubmit = (e) => {
    e.preventDefault()
    setDisplayName(inputName)
  }

  const renderForm = () => {
    return (
      <form onSubmit={formSubmit}>
        <input name="displayName" value={inputName} onChange={e => setInputName(e.target.value)}/>
        <button>Enter Name</button>
      </form>
    )
  }

  const renderStartGame = () => {

    return (
      <div>
        Ready to start!
      </div>
    )
  }

  return (
    <main>
      {!displayName && renderForm()}
      {clientStatus && renderStartGame()}
    </main>
  )
}

export default WaitingRoom
