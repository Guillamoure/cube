import React from 'react'

import { expressURL } from '../../helper_methods/variables'

const CardSelector = props => {

  const [searchField, setSearchField] = React.useState("")

  const searchForCards = e => {
    e.preventDefault()

    fetch(`${expressURL}/cards?q=${searchField}`)
      .then(r => r.json())
      .then(data => {
        console.log(data)
      })
  }

  return (
    <article>
      <input value={searchField} placeholder='Type Card Name' onChange={e => setSearchField(e.target.value)}/>
      <button onClick={searchForCards}>Search</button>
    </article>
  )
}

export default CardSelector
