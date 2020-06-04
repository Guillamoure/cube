import React from 'react'

const GraveyardHand = props => {
  const { card } = props

  const cardData = useSelector(state => state.cardReducer)

  const { height, width } = cardData.cardDimensions

  return (
    <li>
    </li>
  )
}

export default GraveyardHand
