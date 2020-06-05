import React from 'react'

const SidebarItem = props => {
  const { headline, color, textColor, value } = props

  return (
    <li className="sidebar-list-item" style={{backgroundColor: color, color: textColor}}>
      {headline}
      <h1>{value}</h1>
    </li>
  )
}

export default SidebarItem
