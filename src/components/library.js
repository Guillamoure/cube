import React from 'react'
import { useSelector } from 'react-redux'

const Library = props => {
  const thing = useSelector(state => state.deckReducer)
  console.log(thing)

  return (
    <section className="library">
    </section>
  )
}

export default Library
