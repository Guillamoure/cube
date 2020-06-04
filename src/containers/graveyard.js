import React from 'react'
import { useSelector } from 'react-redux'
import GraveyardCard from '../components/graveyard_card'
import { v4 as uuidv4 } from 'uuid'

const Graveyard = props => {

  const gyCards = useSelector(state => state.graveyardReducers.graveyardCards)

  const displayGraveyard = (gy) => {
    return gy.map(gyc => <GraveyardCard key={uuidv4()} card={gyc}/>)
  }

  return (
    <ul className="graveyard">
      {displayGraveyard(gyCards)}
    </ul>
  )
}

export default Graveyard
