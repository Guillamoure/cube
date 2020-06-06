import React from 'react'
import { useSelector } from 'react-redux'

import { setModal } from '../actions/modalActions'

const GraveyardHand = props => {
  const { card } = props.cardData

  const cardData = useSelector(state => state.cardReducer)

  const [width, setWidth] = React.useState(window.innerWidth / 11)
  const [height, setHeight] = React.useState(window.innerWidth / 11 * 7/5)

  const rightClick = e => {
    e.preventDefault()
    if (e.shiftKey){
      setModal("graveyardContextMenu", props.cardData, {})
    }
  }
  const expand = () => {
    setModal("card", card)
  }

  return (
    <li className="graveyard-card">
      <img src={card.imageURL} alt={card.name} width={width} height={height} onContextMenu={rightClick} onDoubleClick={expand}/>
    </li>
  )
}

export default GraveyardHand
