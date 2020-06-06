import React from 'react'

import { setModal } from '../actions/modalActions'
import { addToHand } from '../actions/handActions'
import { removeTopCard, updateLibrary } from '../actions/libraryActions'
import { addGraveyard } from '../actions/graveyardActions'
import { draw } from '../helper_methods/library'
import { shuffle } from '../helper_methods/functions/shuffle'

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

  const shuffleLibrary = () => {
    updateLibrary(shuffle([...data]))
    setModal(null, {}, {})
  }

  const closeUp = () => {
    setModal("card", data.card, {})
  }

  return (
    <ul ref={cmRef} id="context-menu" style={{top: coordinates.y, left: coordinates.x - selfWidth}}>
      <li className="context-menu-item" onClick={toHand}>Draw Card</li>
      <li className="context-menu-item" onClick={toGraveyard}>Mill</li>
      <li className="context-menu-item" onClick={shuffleLibrary}>Shuffle</li>
      <li className="context-menu-item"><del>Scry</del></li>
    </ul>
  )
}

export default LibraryContextMenu
