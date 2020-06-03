import React from 'react'

import Board from './board'



const Game = props => {
  return (
    <main id="background">
      {/*opponent's board*/}
      <Board user={true}/>
    </main>
  )
}


export default Game
