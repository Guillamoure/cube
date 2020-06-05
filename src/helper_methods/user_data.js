import { getUser, getDecks, getDeckCards, getCards } from './fetches/game'
import { addUser } from '../actions/userActions'

export const userData = (id) => {
  return getUser(1).then(user => {
    let userObj = {user}

    getDecks().then(decks => {
      let userDecks = decks.filter(d => d.user_id === user.id)
      userObj.user.decks = userDecks

      getDeckCards().then(deckCards => {
        userDecks.forEach(ud => {
          let userDeckCards = deckCards.filter(dc => dc.deck_id === ud.id)
          userObj.user.decks.find(d => d.id === ud.id).deckCards = userDeckCards
        })

        getCards().then(cards => {
          userObj.user.decks = [...userObj.user.decks].map(d => {
            return d.deckCards.map(dc => {
              return {
                id: dc.id,
               deck_id: dc.deck_id,
               card: cards.find(c => c.id === dc.card_id)
             }
           })
          })
          addUser(userObj.user)
          // userObj.user.decks.forEach(d => {
          //   d.deckCards.forEach(dc => {

          //     let oldDC = userObj.user.decks.find(newD => newD.id === d.id).deckCards.find(newDC => newDC.id === dc.id)
          //     oldDC = dcObj
          //   })
          // })
          // console.log(userObj)
        })
      })
    })
  })
}
