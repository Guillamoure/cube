import React from 'react'

import { getCards } from '../helper_methods/fetches/cards'

const ExploreCards = props => {

	const [cards, setCards] = React.useState([])

	React.useEffect(() => {
		getCards()
			.then(setCards)
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
