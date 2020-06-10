import React from 'react'
import { withRouter } from 'react-router-dom'

const Home = props => {

  console.log(props)
  return (
    <main id="home">
      <li onClick={() => props.history.push("/waiting_room")}>Start Game</li>
      <li>List of Decks</li>
      <li>Coming Soon...</li>
    </main>
  )
}

export default withRouter(Home)
