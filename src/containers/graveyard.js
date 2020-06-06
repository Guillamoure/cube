import React from 'react'
import { useSelector } from 'react-redux'
import GraveyardCard from '../components/graveyard_card'
import { v4 as uuidv4 } from 'uuid'

const Graveyard = props => {

  const gyCards = useSelector(state => state.graveyardReducers.graveyardCards)

  return (
    <ul className="graveyard">
      {!!gyCards.length && <GraveyardCard key={uuidv4()} cardData={gyCards[gyCards.length-1]}/>}
    </ul>
  )
}

export default Graveyard
