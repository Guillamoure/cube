import React from 'react'

import { expressURL } from '../../helper_methods/variables'
import { setModal } from '../../actions/modalActions'

const CardSelector = props => {

  const [searchField, setSearchField] = React.useState("")
  const [setCodeField, setSetCodeField] = React.useState("")
	const [cards, setCards] = React.useState([])
	const [loading, setLoading] = React.useState(false)
	const [selectedMana, setSelectedMana] = React.useState([])

  const renderSearch = e => {
    e.preventDefault()
		if (!loading){
			setLoading(true)

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
				setLoading(false)
			})
		}
  }

	const renderCards = () => {
		let filteredCards = cards.filter(c => {
			if (selectedMana.length){
				let colorMatch = false
				selectedMana.forEach(mana => {
					if(c.colorIdentity.includes(mana)){
						colorMatch = true
					}
				})
				return colorMatch
			} else {return true}
		})
		const domCards = filteredCards.map(card => {
			return <img onContextMenu={(e) => props.addToLibrary(e, card)} src={card.imageUrl} alt={card.name} onClick={() => setModal("card", card)}/>
		})
		return domCards
	}

	const opacity = mana => {
		return selectedMana.includes(mana) ? "opaque-icon" : "transparant-icon"
	}

	const toggleMana = mana => {
		if (selectedMana.includes(mana)){
			setSelectedMana(selectedMana.filter(m => m !== mana))
		} else {
			setSelectedMana([...selectedMana, mana])
		}
	}

  return (
    <article>
			<form onSubmit={renderSearch}>
		    <input value={searchField} placeholder='Type Card Name' onChange={e => setSearchField(e.target.value)}/>
		    <input value={setCodeField} placeholder='Set Code' onChange={e => setSetCodeField(e.target.value)}/>
				<button>Search</button>
				<ul id="mana-icon-container">
					<li><img className={opacity("B")} onClick={() => toggleMana("B")} src="/images/mana/black.png"/></li>
					<li><img className={opacity("U")} onClick={() => toggleMana("U")} src="/images/mana/blue.png"/></li>
					<li><img className={opacity("G")} onClick={() => toggleMana("G")} src="/images/mana/green.png"/></li>
					<li><img className={opacity("R")} onClick={() => toggleMana("R")} src="/images/mana/red.png"/></li>
					<li><img className={opacity("W")} onClick={() => toggleMana("W")} src="/images/mana/white.png"/></li>
				</ul>
			</form>
			<section id="display-search-cards">
				{renderCards()}
			</section>
    </article>
  )
}

export default CardSelector
