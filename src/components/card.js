import React from 'react'
import { useSelector } from 'react-redux'

import { centerOfCard } from '../helper_methods/card/location'

const Card = props => {

  const { card } = props

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
    top: `${additionalCoordinates.top + coordinates.top}px`,
    left: `${additionalCoordinates.left + coordinates.left}px`,
  }
  console.log(additionalCoordinates)
  console.log(coordinates)

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
