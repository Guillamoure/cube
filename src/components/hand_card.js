import React from 'react'
import { onTheBoard, calculateTopAndLeft } from '../helper_methods/card/location'
import { removeFromHand } from '../actions/handActions'
import { playCard } from '../actions/fieldActions'
import { setModal } from '../actions/modalActions'

const HandCard = props => {
  const { card } = props.deckCard
  const [width, setWidth] = React.useState(window.innerWidth / 11)
  const [height, setHeight] = React.useState(window.innerWidth / 11 * 7/5)
  const [style, setStyle] = React.useState({})
  const [startingXY, setXY] = React.useState({})


  const hover = () => {
      setWidth(width * 2)
      setHeight(height * 2)
      setStyle({
        top: "-10px"
      })
  }

  const removeHover = () => {
      setWidth(width/2)
      setHeight(height/2)
      setStyle({})
  }

  const drag = e => {
    setXY(calculateTopAndLeft(e))
  }

  const dragEnd = e => {
    if (onTheBoard(e.clientX, e.clientY)){
      removeFromHand(props.deckCard)
      playCard(card, {x: e.clientX + (startingXY.left/2), y: e.clientY + (startingXY.top/2)})
      setXY({})
    }
  }

  const modal = () => {
    setModal("card", card)
  }

  return (
    <li className="hand-card" style={style} draggable={true} onMouseOver={hover} onMouseOut={removeHover} onDragStart={drag} onDragEnd={dragEnd} onDoubleClick={modal}>
      <img src={card.imageURL} alt={card.name} width={width} height={height}/>
    </li>
  )
}

export default HandCard
