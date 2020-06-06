import React from 'react'

const FieldCardContextMenu = props => {

  // <menuitem>Move to Graveyard</menuitem>
  // <menuitem>Return to Hand</menuitem>

  return (
    <ul id="context-menu" style={{top: props.top, left: props.left}}>
      <li>Tap</li>
    </ul>
  )
}

export default FieldCardContextMenu
