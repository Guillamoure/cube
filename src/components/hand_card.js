import React from 'react'

const HandCard = props => {
  const { card } = props
  return (
    <li>
      {card.name}
    </li>
  )
}

export default HandCard
