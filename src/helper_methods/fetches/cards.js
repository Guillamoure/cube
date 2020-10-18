import { expressURL } from '../variables'

export const getCards = async () => {
	const response = await fetch(`${expressURL}/cards`)
	const json = await response.json()
	const cards = json.cards || json
	return cards
}
