import React from 'react'
import { withRouter } from 'react-router-dom'

const Libraries = props => {

  // librarys are cards with info
  // name, colors, card list, k/d, included sets, tags

  // new library is button in top right

  const renderNewLibrary = e => {
    e.preventDefault()
    props.history.push("/new-library")
  }

  return (
    <main>
      All Libraries
      <button id="new-library-button" onClick={renderNewLibrary}>Craft Library</button>
    </main>
  )
}

export default Libraries
