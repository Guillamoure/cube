import React from 'react'
import { useSelector } from 'react-redux'

const Library = props => {
  const state = useSelector(state => state)
  console.log(state)

  const renderLibrary = (library) => {
    let width = state.cardReducer.cardDimensions.width
    let height = state.cardReducer.cardDimensions.height
    return (
        <img src="/magic-card-back.jpg" alt="library" width={width} height={height}/>
    )
  }

  return (
    <section className="library">
      {renderLibrary(state.deckReducer.activeDeck)}
    </section>
  )
}

export default Library
