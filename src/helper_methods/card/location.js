export const coordinates = (card) => {
  if (card.current){
    return card.current.getBoundingClientRect()
  }
}

export const onTheBoard = (x, y) => {
  let battlefield = document.getElementById('battlefield')
  let coordinates = battlefield.getBoundingClientRect()
  if (x > coordinates.left && x < coordinates.right && y < coordinates.bottom && y > coordinates.top) {
    return true
  } else {
    return false
  }
}

export const calculateTopAndLeft = e => {
  const locationX = e.clientX
  const locationY = e.clientY

  let dimensions = e.target.getBoundingClientRect()
  const left = dimensions.left
  const top = dimensions.top

  return {
    left: left - locationX,
    top: top - locationY
  }
}
