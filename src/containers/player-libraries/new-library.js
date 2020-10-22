import React from 'react'
import LibraryInfo from './library-info'
import CardSelector from './card-selector'

const NewLibrary = props => {

	const [library, setLibrary] = React.useState([])
  // list of available colors
  // search bar
  // grid display 20/80
  // added cards, total on left
  // searched cards on right

	const addToLibrary = (e, card) => {
		e.preventDefault()

		setLibrary([...library, card])
	}

  return (
    <main id="new-library-container">
      <LibraryInfo library={library}/>
      <CardSelector addToLibrary={addToLibrary}/>
    </main>
  )
}

export default NewLibrary
