import React from 'react'
import Sidebar from './sidebar'
import { userData } from '../helper_methods/user_data'
import { shuffle } from '../helper_methods/functions/shuffle'
import { useSelector } from 'react-redux'
import { updateLibrary } from '../actions/libraryActions'

import Board from './board'


const Game = props => {

  React.useEffect(() => {
    userData(1)
  }, [])

  let state = useSelector(state => state)
  if (!state.libraryReducer.activeLibrary.length && state.userReducers.user.name){
    updateLibrary(shuffle(state.userReducers.user.decks[0]))
  }

  return (
    <main id="background">
      {/*opponent's board*/}
      <Sidebar />
      <Board user={true}/>
    </main>
  )
}


export default Game
