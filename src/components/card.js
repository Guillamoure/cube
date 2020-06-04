import React from 'react'
import { useSelector } from 'react-redux'

import { centerOfCard } from '../helper_methods/card/location'
import { moveCard } from '../actions/fieldActions'

const Card = props => {

  const { card, coordinates: co } = props.card

  const cardData = useSelector(state => state.cardReducer)

  const { height, width } = cardData.cardDimensions
  const [coordinates, setCoordinates] = React.useState({})

  const [startingXY, setXY] = React.useState({x: 0, y: 0})

  const [additionalCoordinates, setAdditionalCoordinates] = React.useState({ top: 0, left: 0})

  const [classList, setClassList] = React.useState(["card"])


  const l = React.useRef(null)

  React.useEffect(() => {
    if(l.current){
      let rect = centerOfCard(l)
      setCoordinates(rect)
    }
  }, [])

  const style = {
    backgroundSize: "cover",
    top: `${co.y}px`,
    left: `${co.x}px`
    // top: `${additionalCoordinates.top + coordinates.top}px`,
    // left: `${additionalCoordinates.left + coordinates.left}px`,
  }
  // console.log(additionalCoordinates)
  // console.log(co)

  const drag = (e) => {
    setXY({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop
    })
  }

  const dragEnd = e => {
    // debugger
    setAdditionalCoordinates({
      top: e.clientY - startingXY.y,
      left: e.clientX - startingXY.x
    })
    moveCard(card, {
      x: e.clientX - startingXY.x,
      y: e.clientY - startingXY.y
    })
    setXY({ x: 0, y: 0 })
  }

  const hover = e => {
    if (e.target === l.current){
      let cl = [...classList]
      cl.push("hover-card-good")
      setClassList(cl)
    }
  }

  const removeHover = e => {
    if (e.target === l.current){
      let cl = [...classList].filter(c => c !== "hover-card-good")
      setClassList(cl)
    }
  }

  const tap = e => {
    e.preventDefault()
    let cl = [...classList]
    if (classList.includes("tapped")){
      cl = cl.filter(c => c !== "tapped")
      setClassList(cl)
    } else {
      cl.push("tapped")
      setClassList(cl)
    }
  }

  return (
    <li ref={l} className={classList.join(" ")} style={style} draggable="true" onDragStart={drag} onDragEnd={dragEnd} onMouseOver={hover} onMouseOut={removeHover} onContextMenu={tap}>
      <img src={card.imageURL} alt={card.name} width={width} height={height}/>
    </li>
  )
}

export default Card
