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
	const removeCard = (e, card) => {
		e.preventDefault()
		const libraryDuplicate = [...library]

		let i = libraryDuplicate.findIndex(c => {
			return c._id === card._id
		})

		libraryDuplicate.splice(i, 1)

		setLibrary(libraryDuplicate)


	}

  return (
    <main id="new-library-container">
      <LibraryInfo library={library} removeCard={removeCard}/>
      <CardSelector addToLibrary={addToLibrary}/>
    </main>
  )
}

export default NewLibrary
