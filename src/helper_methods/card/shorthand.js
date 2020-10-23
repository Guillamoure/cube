import React from 'react'

export const libraryCard = (card, onContextMenu) => {
	let mana = []
	if (card.manaCost){
		for (let i = 0; i < card.manaCost.length; i+=3){
			if (parseInt(card.manaCost[i+1]) > -1){
				mana.push(`(${card.manaCost[i+1]})`)
			} else {
				switch(card.manaCost[i+1]){
					case "B":
						mana.push(<img style={{width: "1.1em", height: "1.1em"}} src="/images/mana/black.png" alt="Black Mana"/>)
						break
					case "U":
						mana.push(<img style={{width: "1.1em", height: "1.1em"}} src="/images/mana/blue.png" alt="Blue Mana"/>)
						break
					case "G":
						mana.push(<img style={{width: "1.1em", height: "1.1em"}} src="/images/mana/green.png" alt="Green Mana"/>)
						break
					case "R":
						mana.push(<img style={{width: "1.1em", height: "1.1em"}} src="/images/mana/red.png" alt="Red Mana"/>)
						break
					case "W":
						mana.push(<img style={{width: "1.1em", height: "1.1em"}} src="/images/mana/white.png" alt="White Mana"/>)
						break
				}
			}
		}
	}

	return <li style={{display: "flex", alignItems: "center"}} onContextMenu={(e) => onContextMenu(e, card)}>{mana} {card.name}</li>
}
