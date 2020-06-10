import React from 'react'

import { w3cwebsocket as W3CWebSocket} from 'websocket'
import { wsURL } from '../helper_methods/variables'
import { distributeWS } from '../helper_methods/websockets/new_game'

const WaitingRoom = props => {

  const [displayName, setDisplayName] = React.useState(null)
  const [client, setClient] = React.useState(null)
  const [clientStatus, setClientStatus] = React.useState(false)

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
  }, [displayName, client, clientStatus])

  const formSubmit = (e) => {
    e.preventDefault()
    setDisplayName(e.target.displayName.value)
  }

  const renderForm = () => {
    return (
      <form onSubmit={formSubmit}>
        <input name="displayName"/>
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
