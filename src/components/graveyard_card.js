import React from 'react'
import { useSelector } from 'react-redux'

const GraveyardHand = props => {
  const { card } = props.cardData

  const cardData = useSelector(state => state.cardReducer)

  const { height, width } = cardData.cardDimensions

  return (
    <li>
    </li>
  )
}

export default GraveyardHand
