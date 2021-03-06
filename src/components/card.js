import React from 'react'
import { useSelector } from 'react-redux'

import { moveCard, updateTap } from '../actions/fieldActions'
import { setModal } from '../actions/modalActions'

const Card = props => {

  const { libraryCard, coordinates: co, tapped } = props.cardData
  const { card } = libraryCard

  const cardData = useSelector(state => state.cardReducer)

  const { height, width } = cardData.cardDimensions

  const [startingXY, setXY] = React.useState({x: 0, y: 0})
  const [classList, setClassList] = React.useState(["card"])


  const l = React.useRef(null)

  React.useEffect(() => {
    if(tapped && !classList.includes("tapped")){
      var clDuplicate = [...classList]
      clDuplicate.push("tapped")
      setClassList(clDuplicate)
    } else {
      clDuplicate = [...classList].filter(cl => cl !== "tapped")
      setClassList(clDuplicate)
    }
  }, [tapped])

  const style = {
    backgroundSize: "cover",
    top: `${co.y}px`,
    left: `${co.x}px`
  }

  const drag = (e) => {
    setXY({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop
    })
  }

  const dragEnd = e => {
    // debugger
    moveCard(libraryCard, {
      x: e.clientX - startingXY.x,
      y: e.clientY - startingXY.y
    })
    setXY({ x: 0, y: 0 })
  }

  const hover = e => {
    if (e.target === l.current || e.target === l.current.querySelector('img')){
      let cl = [...classList]
      cl.push("hover-card-good")
      setClassList(cl)
    }
  }

  const removeHover = e => {
    if (e.target === l.current || e.target === l.current.querySelector('img')){
      let cl = [...classList].filter(c => c !== "hover-card-good")
      setClassList(cl)
    }
  }

  const rightClick = e => {
    e.preventDefault()
    if (e.shiftKey){
      setModal("fieldCardContextMenu", props.cardData, {x: co.x + l.current.offsetWidth, y: co.y})
    } else {
      tap()
    }
  }

  const tap = () => {
    updateTap(libraryCard)
  }

  const expand = () => {
    setModal("card", card)
  }

  return (
    <>
      <li ref={l} className={classList.join(" ")} style={style} draggable="true" onDragStart={drag} onDragEnd={dragEnd} onMouseOver={hover} onMouseOut={removeHover} onContextMenu={rightClick} onDoubleClick={expand}>
        <img src={card.imageURL} alt={card.name} width={width} height={height}/>
      </li>
    </>
  )
}

export default Card
