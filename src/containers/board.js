import React from 'react'
import { useDispatch } from 'react-redux'

import  { updateCardDimensions } from '../actions/cardActions'

import BattleField from './battlefield'
import Library from '../components/library'


const Board = props => {
  const dispatch = useDispatch()

  let boardEl

  const [windowHeight, setHeight] = React.useState(window.innerHeight)
  const [cardDimensions, setDimensions] = React.useState({
    height: 0,
    width: 0
  })

  React.useEffect(() => {
    // take the inner height, remove a bit for the padding/margin between cards and the border of the board
    // 3px between border (both sides), and 3px between cards (both sides) = 12px
    const baseUnit = (boardEl.clientHeight-12)/14
    dispatch(updateCardDimensions(baseUnit * 5, baseUnit * 7))
    setDimensions({
      height: baseUnit * 7,
      width: baseUnit * 5
    })

    function handleResize (){
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
  }, [windowHeight, boardEl])

  // stack
  // exile
  // hand

  return (
    <section ref={target => boardEl = target} className="board">
      <BattleField cardDimensions={cardDimensions}/>
      <div>Graveyard</div>
      <Library />
    </section>
  )
}


export default Board
