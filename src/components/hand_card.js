import React from 'react'

const HandCard = props => {
  const { card } = props

  let width = window.innerWidth / 11
  let height = 7/5 * width

  return (
    <li>
      <img src={card.imageURL} alt={card.name} width={width} height={height}/>
    </li>
  )
}

export default HandCard
