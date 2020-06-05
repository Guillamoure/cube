import React from 'react'
import { url } from '../helper_methods/variables'
import { userData } from '../helper_methods/user_data'
import { useSelector } from 'react-redux'
import { selectLibrary, shuffle } from '../actions/libraryActions'

import Board from './board'


const Game = props => {

  React.useEffect(() => {
    userData(1)
  }, [])

  let state = useSelector(state => state)
  if (!state.libraryReducer.activeLibrary.length && state.userReducers.user.name){
    selectLibrary(state.userReducers.user.decks[0])
    shuffle()
  }

  return (
    <main id="background">
      {/*opponent's board*/}
      <Board user={true}/>
    </main>
  )
}


export default Game
