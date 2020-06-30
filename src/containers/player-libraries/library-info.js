import React from 'react'
import { useSelector } from 'react-redux'

const LibraryInfo = props => {

  const [libraryName, setName] = React.useState("")

  const opacity = mana => {

  }

  const toggleMana = mana => {
    
  }

  return (
    <aside>
      <input value={libraryName} placeholder="Library Name" onChange={e => setName(e.target.value)}/>
      <ul id="mana-icon-container">
        <li><img clasName={opacity("black")} onClick={() => toggleMana("black")} src="/images/mana/black.png"/></li>
        <li><img src="/images/mana/blue.png"/></li>
        <li><img src="/images/mana/green.png"/></li>
        <li><img src="/images/mana/red.png"/></li>
        <li><img src="/images/mana/white.png"/></li>
      </ul>
    </aside>
  )
}

export default LibraryInfo
