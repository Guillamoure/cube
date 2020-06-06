import React from 'react'
import { useSelector } from 'react-redux'
import { coordinates } from '../helper_methods/card/location'

import { setModal } from '../actions/modalActions'

const GraveyardCard = props => {
  const { card } = props.cardData
  const gyRef = React.useRef(null)
  const [width, setWidth] = React.useState(window.innerWidth / 11)
  const [height, setHeight] = React.useState(window.innerWidth / 11 * 7/5)

  const cardData = useSelector(state => state.cardReducer)


  const rightClick = e => {
    e.preventDefault()
    if (e.shiftKey){
      let co = coordinates(gyRef)
      setModal("graveyardContextMenu", props.cardData, {x: co.x, y: co.y})
    }
  }
  const expand = () => {
    setModal("card", card)
  }

  return (
    <li className="graveyard-card">
      <img ref={gyRef} src={card.imageURL} alt={card.name} width={width} height={height} onContextMenu={rightClick} onDoubleClick={expand}/>
    </li>
  )
}

export default GraveyardCard
