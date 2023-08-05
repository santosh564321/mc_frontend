import React from 'react'
import './Sidebar.css'
import adShort from '../adShort.svg'
function Sidebar() {
  return (
    <React.Fragment>
        <div className="sidebar">
            <img src={adShort} alt="logo" srcset="" />
            <button className="sidebar-button">
                MC
            </button>
            <button className="sidebar-button">
                HSP
            </button>
            <button className="sidebar-button">
                SMA
            </button>
            <button className="sidebar-button">
                SS
            </button>
        </div>
    </React.Fragment>
  )
}

export default Sidebar