import React from 'react'
import { useSelector} from 'react-redux'
import SidebarItem from '../components/sidebar_item'

const Sidebar = props => {

  const state = useSelector(state => state)
  let libraryCount = state.libraryReducer.activeLibrary.length
  let handCount = state.handReducer.hand.length
  // <li className="sidebar-list-item">Life: 20</li>
  // <li className="sidebar-list-item">Library: {libraryCount}</li>

  return (
    <aside id="sidebar">
      <ul>
        <SidebarItem headline={"Life"} color={"maroon"} textColor={"cornsilk"} value={20}/>
        <SidebarItem headline={"Library"} color={"blue"} textColor={"lemonchiffon"} value={libraryCount}/>
        <SidebarItem headline={"Hand"} color={"peru"} textColor={"navy"} value={handCount}/>
      </ul>
    </aside>
  )
}

export default Sidebar
