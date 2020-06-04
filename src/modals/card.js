import React from 'react'
import { useSelector } from 'react-redux'
import { setModal } from '../actions/modalActions'

const CardModal = props => {
  const modalRedux = useSelector(state => state.modalReducers)
  const [classList, setClassList] = React.useState([])

  const removeModal = e => {
    if (e.target.id === "modal"){
      setModal(null, {})
    }
  }

  const rotate = e => {
    e.preventDefault()
    
    let cl = [...classList]
    if (cl.includes("rotated")){
      cl = cl.filter(c => c !== "rotated")
    } else {cl.push("rotated")}
    setClassList(cl)
  }

  return (
    <aside id="modal" onClick={removeModal}>
      <img id="modal-image" className={classList.join(" ")} src={modalRedux.data.imageURL} alt={modalRedux.data.name} height={window.innerWidth/3 * 7/5} width={window.innerWidth/3} onContextMenu={rotate}/>
    </aside>
  )
}

export default CardModal
