import React from 'react'

import { setModal } from '../actions/modalActions'
import { addToHand } from '../actions/handActions'
import { removeGraveyard } from '../actions/graveyardActions'

const GraveyardContextMenu = props => {
  const cmRef = React.useRef(null)
  const [selfWidth, setSelfWidth] = React.useState(0)

  React.useEffect(() => {
    setSelfWidth(cmRef.current.offsetWidth)
  }, [cmRef])

  const { coordinates, data } = props.modalData
  console.log(props)

  const toHand = () => {
    removeGraveyard(data)
    addToHand(data)
    setModal(null, {}, {})
  }

  const closeUp = () => {
    setModal("card", data.card, {})
  }

  return (
    <ul ref={cmRef} id="context-menu" style={{top: coordinates.y, left: coordinates.x - selfWidth}}>
      <li className="context-menu-item" onClick={closeUp}>Inspect</li>
      <li className="context-menu-item"><del>Inspect All</del></li>
      <li className="context-menu-item"><del>Move to BattleField</del></li>
      <li className="context-menu-item" onClick={toHand}>Move to Hand</li>
    </ul>
  )
}

export default GraveyardContextMenu
