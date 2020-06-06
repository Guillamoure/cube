import React from 'react'

import { setModal } from '../actions/modalActions'
import { addToHand } from '../actions/handActions'
import { removeTopCard } from '../actions/libraryActions'
import { addGraveyard } from '../actions/graveyardActions'
import { draw } from '../helper_methods/library'

const LibraryContextMenu = props => {
  const cmRef = React.useRef(null)
  const [selfWidth, setSelfWidth] = React.useState(0)

  React.useEffect(() => {
    setSelfWidth(cmRef.current.offsetWidth)
  }, [cmRef])

  const { coordinates, data } = props.modalData

  const toHand = () => {
    addToHand(data[0])
    removeTopCard()
    setModal(null, {}, {})
  }

  const toGraveyard = () => {
    addGraveyard(data[0])
    removeTopCard()
    setModal(null, {}, {})
  }

  const closeUp = () => {
    setModal("card", data.card, {})
  }

  return (
    <ul ref={cmRef} id="context-menu" style={{top: coordinates.y, left: coordinates.x - selfWidth}}>
      <li className="context-menu-item" onClick={toHand}>Draw Card</li>
      <li className="context-menu-item" onClick={toGraveyard}>Mill</li>
      <li className="context-menu-item"><del>Shuffle</del></li>
      <li className="context-menu-item"><del>Scry</del></li>
    </ul>
  )
}

export default LibraryContextMenu
