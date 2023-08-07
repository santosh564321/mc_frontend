import React from 'react'
import './Sidebar.css'
import adShort from '../adShort.svg'
function Sidebar({changeRoute}) {
  return (
    <React.Fragment>
        <div className="sidebar">
            <img src={adShort} alt="logo" srcset="" />
            <button className="sidebar-button" onClick={() => changeRoute("MC")}>
                MC
            </button>
            <button className="sidebar-button" onClick={() => changeRoute("HSP")}>
                HSP
            </button>
            <button className="sidebar-button" onClick={() => changeRoute("SMA")}>
                SMA
            </button>
            <button className="sidebar-button" onClick={() => changeRoute("SS")}>
                SS
            </button>
            <button className='sidebar-button' onClick={() => changeRoute("RESET")}>
                RESET
            </button>
        </div>
    </React.Fragment>
  )
}

export default Sidebar