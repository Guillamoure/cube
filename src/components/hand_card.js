import React from 'react'
import { onTheBoard } from '../helper_methods/card/location'
import { removeFromHand } from '../actions/handActions'
import { playCard } from '../actions/fieldActions'

const HandCard = props => {
  const { card } = props
  const [width, setWidth] = React.useState(window.innerWidth / 11)
  const [height, setHeight] = React.useState(window.innerWidth / 11 * 7/5)
  const [style, setStyle] = React.useState({})


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

  const dragEnd = e => {
    if (onTheBoard(e.clientX, e.clientY)){
      removeFromHand(card)
      playCard(card, {x: e.clientX, y: e.clientY})
    }
  }

  return (
    <li className="hand-card" style={style} draggable={true} onMouseOver={hover} onMouseOut={removeHover} onDragEnd={dragEnd}>
      <img src={card.imageURL} alt={card.name} width={width} height={height}/>
    </li>
  )
}

export default HandCard
