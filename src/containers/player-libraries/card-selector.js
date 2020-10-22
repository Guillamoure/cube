import React from 'react'

import { expressURL } from '../../helper_methods/variables'
import { setModal } from '../../actions/modalActions'

const CardSelector = props => {

  const [searchField, setSearchField] = React.useState("")
  const [setCodeField, setSetCodeField] = React.useState("")
	const [cards, setCards] = React.useState([])

  const renderSearch = e => {
    e.preventDefault()
		let query = ""
		if (searchField || setCodeField){
			query += "?"
		}
		if (setCodeField){
			query += `set=${setCodeField}`
		}
		if (searchField){
			if (query.length > 1){query += "&"}
			query += `name=${searchField}`
		}

    fetch(`${expressURL}/cards${query}`)
      .then(r => r.json())
      .then(data => {
				let sorted = setCodeField ? data.sort((a,b) => parseInt(a.number) - parseInt(b.number)) : data
        setCards(data)
      })
  }

	const renderCards = () => {
		const domCards = cards.map(card => {
			return <img onContextMenu={(e) => props.addToLibrary(e, card)} src={card.imageUrl} alt={card.name} onClick={() => setModal("card", card)}/>
		})
		return domCards
	}

  return (
    <article>
	    <input value={searchField} placeholder='Type Card Name' onChange={e => setSearchField(e.target.value)}/>
	    <input value={setCodeField} placeholder='Set Code' onChange={e => setSetCodeField(e.target.value)}/>
	    <button onClick={renderSearch}>Search</button>
			<section id="display-search-cards">
				{renderCards()}
			</section>
    </article>
  )
}

export default CardSelector
