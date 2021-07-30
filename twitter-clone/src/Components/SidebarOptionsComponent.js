import React from 'react'
import '../Sidebar.css'

function SidebarOptions({ option, Icon }) {
    return (
        <div className="app__sidebarOption">
            <Icon className='sidebaroptionIcon'/>
            <h2 className="sidebarOptionText">{ option }</h2>
        </div>
    )
}

export default SidebarOptions
