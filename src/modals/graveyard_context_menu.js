import React from 'react'

import { setModal } from '../actions/modalActions'
import { addToHand } from '../actions/handActions'

const GraveyardContextMenu = props => {
  const { coordinates, data } = props.modalData
  console.log(props)

  const toHand = () => {
    addToHand(data)
    setModal(null, {}, {})
  }

  const closeUp = () => {
    setModal("card", data.card, {})
  }

  return (
    <ul id="context-menu" style={{top: coordinates.y, left: coordinates.x}}>
      <li className="context-menu-item" onClick={closeUp}>Inspect</li>
      <li className="context-menu-item">Inspect All</li>
      <li className="context-menu-item">Move to BattleField</li>
      <li className="context-menu-item" onClick={toHand}>Move to Hand</li>
    </ul>
  )
}

export default GraveyardContextMenu
