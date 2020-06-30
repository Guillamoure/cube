import React from 'react'

import { useSelector } from 'react-redux'

const DeckSelection = props => {

  const user = useSelector(state => state.userReducers.user)
  const gameData = useSelector(state => state.gameReducer)

  // display all players in boxes
  // user in box on left
    // dropdown menu with library names
    // once toggled, list card names
    // button to confirm
  // enemies will have a pending thing
    // once chosen, check mark and library name
  // once all libraries chosen, wait 5 seconds, countdown, history.push to game

  const renderUserCard = userData => {
    return (
      <li>
        <h4>{userData.user}</h4>
      </li>
    )
  }

  const renderOtherCards = othersData => {
    return othersData.map(player => {
      return (
        <li>
          <h4>{player.user}</h4>
        </li>
      )
    })
  }

  const renderCards = () => {
    const userData = gameData.players.find(p => p.userID === user.userID)
    const otherPlayersData = gameData.players.filter(p => p.userID !== user.userID)
    return (
      <ul id='library-selection-container'>
        {renderUserCard(userData)}
        {renderOtherCards(otherPlayersData)}
      </ul>
    )
  }

  return (
    <main>
      {renderCards()}
    </main>
  )
}

export default DeckSelection
