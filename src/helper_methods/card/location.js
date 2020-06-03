export const centerOfCard = (card) => {
  if (card.current){
    return card.current.getBoundingClientRect()
  }
}
