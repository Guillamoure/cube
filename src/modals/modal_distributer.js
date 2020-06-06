import React from 'react'
import { useSelector } from 'react-redux'
import { setModal } from '../actions/modalActions'

import CardModal from './card'
import FieldCardContextMenu from './field_card_context_menu'
import GraveyardContextMenu from './graveyard_context_menu'
import CardList from './card_list'

const ModalDistributer = props => {

  const modalData = useSelector(state => state.modalReducers)
  let kind = modalData.kind
  console.log(modalData)

  const renderModal = () => {
    switch(kind){
      case "card":
        return <CardModal />
      case "fieldCardContextMenu":
        return <FieldCardContextMenu modalData={modalData}/>
      case "graveyardContextMenu":
        return <GraveyardContextMenu modalData={modalData}/>
      case "cardList":
        return <CardList modalData={modalData} />
      default:
        break
    }
  }

  const removeModal = e => {
    if (e.target.id === "modal"){
      setModal(null, {})
    }
  }

  return (
    <aside id="modal" onClick={removeModal}>
      {renderModal()}
    </aside>
  )
}

export default ModalDistributer
