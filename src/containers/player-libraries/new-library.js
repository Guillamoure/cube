import React from 'react'
import LibraryInfo from './library-info'
import CardSelector from './card-selector'

const NewLibrary = props => {
  // list of available colors
  // search bar
  // grid display 20/80
  // added cards, total on left
  // searched cards on right
  return (
    <main id="new-library-container">
      <LibraryInfo />
      <CardSelector />
    </main>
  )
}

export default NewLibrary
