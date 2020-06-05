import { url } from '../variables'

export const getUser = async (id) => {
  const response = await fetch(`${url}/users/${id}`)
  const json = await response.json()
  return json
}

export const getDecks = async () => {
  const response = await fetch(`${url}/decks`)
  const json = await response.json()
  return json
}

export const getDeckCards = async () => {
  const response = await fetch(`${url}/deck_cards`)
  const json = await response.json()
  return json
}

export const getCards = async () => {
  const response = await fetch(`${url}/cards`)
  const json = await response.json()
  return json
}
