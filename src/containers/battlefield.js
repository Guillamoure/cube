import React from 'react'
import Card from '../components/card'

const Battlefield = props => {

  return (
    <article className="battlefield">
      <Card cardDimensions={props.cardDimensions}/>
      <Card cardDimensions={props.cardDimensions}/>
    </article>
  )
}

export default Battlefield
