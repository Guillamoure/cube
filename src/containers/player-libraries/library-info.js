import React from 'react'
import { useSelector } from 'react-redux'

const LibraryInfo = props => {

  const [libraryName, setName] = React.useState("")
  const [selectedMana, setSelectedMana] = React.useState([])

  const opacity = mana => {
    return selectedMana.includes(mana) ? "opaque-icon" : "transparant-icon"
  }

  const toggleMana = mana => {
    if (selectedMana.includes(mana)){
      setSelectedMana(selectedMana.filter(m => m !== mana))
    } else {
      setSelectedMana([...selectedMana, mana])
    }
  }

  const backgroundColors = () => {
    if (selectedMana.length === 0){ return {backgroundColor: "beige", opacity: "0.8"} }
    if (selectedMana.length === 1){ return {backgroundColor: selectedMana[0], opacity: "0.7"} }
    if (selectedMana.length > 1){ return {backgroundImage: `linear-gradient(160deg, ${selectedMana.join(", ")})`, opacity: "0.7"} }
  }

  return (
    <aside style={backgroundColors()}>
      <input value={libraryName} placeholder="Library Name" onChange={e => setName(e.target.value)}/>
      <ul id="mana-icon-container">
        <li><img className={opacity("black")} onClick={() => toggleMana("black")} src="/images/mana/black.png"/></li>
        <li><img className={opacity("blue")} onClick={() => toggleMana("blue")} src="/images/mana/blue.png"/></li>
        <li><img className={opacity("green")} onClick={() => toggleMana("green")} src="/images/mana/green.png"/></li>
        <li><img className={opacity("red")} onClick={() => toggleMana("red")} src="/images/mana/red.png"/></li>
        <li><img className={opacity("white")} onClick={() => toggleMana("white")} src="/images/mana/white.png"/></li>
      </ul>
    </aside>
  )
}

export default LibraryInfo
