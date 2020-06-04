export const centerOfCard = (card) => {
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
