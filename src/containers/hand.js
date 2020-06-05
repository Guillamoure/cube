import React from 'react'
import { useSelector } from 'react-redux'
import HandCard from '../components/hand_card'
import { v4 as uuidv4 } from 'uuid'

const Hand = props => {

  const handContents = useSelector(state => state.handReducer.hand)

  const displayHand = (h) => {
    return h.map(hc => <HandCard key={uuidv4()} libraryCard={hc}/>)
  }

  return (
    <ul id="hand">
      {displayHand(handContents)}
    </ul>
  )
}

export default Hand
