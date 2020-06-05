import React from 'react'
import Card from '../components/card'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

const Battlefield = props => {
  let cards = useSelector(state => state.fieldReducers.fieldCards)

  const displayCards = () => {
    return cards.map(c => <Card key={uuidv4()} cardData={c}/>)
  }
  return (
    <article id="battlefield">
      {displayCards()}
    </article>
  )
}

export default Battlefield
