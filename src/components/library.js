import React from 'react'
import { useSelector} from 'react-redux'

import { draw } from '../helper_methods/library'
import { coordinates } from '../helper_methods/card/location'
import { setModal } from '../actions/modalActions'

const Library = props => {
  const state = useSelector(state => state)
  const libraryRef = React.useRef(null)

  const renderLibrary = (library) => {
    let width = state.cardReducer.cardDimensions.width
    let height = state.cardReducer.cardDimensions.height
    if (!library.count){
      return (
        <>
          <img ref={libraryRef} src="/magic-card-back.jpg" alt="library" width={width} height={height} onContextMenu={rightClick}/>
        </>
      )
    } else {
      return (
        <>
          <img ref={libraryRef} src="/empty-spaces.jpg" alt="no library" width={width} height={height}/>
        </>
      )
    }
  }

  const rightClick = e => {
    e.preventDefault()
    if (e.shiftKey){
      let co = coordinates(libraryRef)
      setModal("libraryContextMenu", state.libraryReducer.activeLibrary, {x: co.x, y: co.y})
    }
  }

  return (
    <section className="library" onClick={(e) => draw(e, state)}>
      {renderLibrary(state.libraryReducer.activeLibrary)}
    </section>
  )
}

export default Library
