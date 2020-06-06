import React from 'react'

import { setModal } from '../actions/modalActions'
import { addToHand } from '../actions/handActions'

const LibraryContextMenu = props => {
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
      <li className="context-menu-item" onClick={toHand}>Draw Card</li>
      <li className="context-menu-item">Mill</li>
      <li className="context-menu-item">Shuffle</li>
      <li className="context-menu-item">Scry</li>
    </ul>
  )
}

export default LibraryContextMenu
