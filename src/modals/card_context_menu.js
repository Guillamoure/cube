import React from 'react'
import { useSelector } from 'react-redux'

const CardContextMenu = props => {
  return (
    <ul id="card-context-menu">
      <li className="context-menu-item">Tap</li>
      <li className="context-menu-item">Move to Graveyard</li>
      <li className="context-menu-item">Move to Battlefield</li>
    </ul>
  )
}

export default CardContextMenu
