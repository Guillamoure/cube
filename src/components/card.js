import React from 'react'
import { centerOfCard } from '../helper_methods/card/location'

const Card = props => {

  const { height, width } = props.cardDimensions
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
    height: `${height}px`,
    width: `${width}px`,
    backgroundImage: `url("https://static.tappedout.net/mtg-cards-2/guilds-of-ravnica/piston-fist-cyclops/mtg-cards/_user-added/femme_fatale-piston-fist-cyclops-grn-15372234670.png")`,
    backgroundSize: "cover",
    top: `${additionalCoordinates.top || coordinates.top}px`,
    left: `${additionalCoordinates.left || coordinates.left}px`,
  }

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

  return (
    <li ref={l} className={classList.join(" ")} style={style} draggable="true" onDragStart={drag} onDragEnd={dragEnd} onMouseOver={hover} onMouseOut={removeHover}>
    </li>
  )
}

export default Card
