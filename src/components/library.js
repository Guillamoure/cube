import React from 'react'
import { useSelector} from 'react-redux'

import { draw } from '../helper_methods/library'

const Library = props => {
  const state = useSelector(state => state)


  const renderLibrary = (library) => {
    let width = state.cardReducer.cardDimensions.width
    let height = state.cardReducer.cardDimensions.height
    return (
      <>
        <img src="/magic-card-back.jpg" alt="library" width={width} height={height}/>
        <p>{library.length}</p>
      </>
    )
  }

  return (
    <section className="library" onClick={(e) => draw(e, state)}>
      {renderLibrary(state.libraryReducer.activeLibrary)}
    </section>
  )
}

export default Library
