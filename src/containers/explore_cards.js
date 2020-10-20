import React from 'react'

import { getCards } from '../helper_methods/fetches/cards'

const ExploreCards = props => {

	const [cards, setCards] = React.useState([])

	React.useEffect(() => {
		getCards()
			.then(data =>{
				// let therosBeyondDeath = data.filter(c => c.set === "THB")
				// therosBeyondDeath = therosBeyondDeath.sort((a,b) => parseInt(a.number) - parseInt(b.number))
				// setCards(therosBeyondDeath)
				setCards(data)
			})
	}, [])

	const renderCards = () => {
		const domCards = cards.map(card => {
			return <img src={card.imageUrl} alt={card.name}/>

		})

		return (
			<main id="cards-container">
				{domCards}
			</main>
		)
	}

	return (
		<>
			{renderCards()}
		</>
	)
}
export default ExploreCards
