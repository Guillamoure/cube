import React from 'react'
import { useSelector } from 'react-redux'

import { updateTap, removeCard } from '../actions/fieldActions'
import { setModal } from '../actions/modalActions'
import { addToHand } from '../actions/handActions'

const CardContextMenu = props => {
  const { coordinates, data } = props.modalData

  const tap = () => {
    updateTap(data.libraryCard)
    setModal(null, {}, {})
  }

  const toHand = () => {
    removeCard(data.libraryCard)
    addToHand(data.libraryCard)
    setModal(null, {}, {})
  }

  return (
    <ul id="context-menu" style={{top: coordinates.y, left: coordinates.x}}>
      <li className="context-menu-item" onClick={tap}>{data.tapped ? "Untap" : "Tap"}</li>
      <li className="context-menu-item">Move to Graveyard</li>
      <li className="context-menu-item" onClick={toHand}>Move to Hand</li>
    </ul>
  )
}

export default CardContextMenu
