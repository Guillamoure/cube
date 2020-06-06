import React from 'react'
import { useSelector } from 'react-redux'

const GraveyardHand = props => {
  const { card } = props.cardData

  const cardData = useSelector(state => state.cardReducer)

  const [width, setWidth] = React.useState(window.innerWidth / 11)
  const [height, setHeight] = React.useState(window.innerWidth / 11 * 7/5)

  return (
    <li className="graveyard-card">
      <img src={card.imageURL} alt={card.name} width={width} height={height}/>
    </li>
  )
}

export default GraveyardHand
