import React from 'react'
import './Sidebar.css'
import adShort from '../adShort.svg'
function Sidebar({changeRoute, responseSuccess, route}) {
  return (
    <React.Fragment>
        <div className="sidebar">
            <img src={adShort} alt="logo" srcset="" />
            <button className={route == ""?"sidebar-button sidebar-button-active": "sidebar-button"} onClick={() => changeRoute("")}>
                STA
            </button>
            <button className={route == "MC"?"sidebar-button sidebar-button-active": "sidebar-button"} onClick={() => changeRoute("MC")} disabled={!responseSuccess}>
                MC
            </button>
            <button className={route == "HSP"?"sidebar-button sidebar-button-active": "sidebar-button"} onClick={() => changeRoute("HSP")} disabled={!responseSuccess}>
                HSP
            </button>
            <button className={route == "SMA"?"sidebar-button sidebar-button-active": "sidebar-button"} onClick={() => changeRoute("SMA")} disabled={!responseSuccess}>
                SMA
            </button>
            <button className={route == "SS"?"sidebar-button sidebar-button-active": "sidebar-button"} onClick={() => changeRoute("SS")} disabled={!responseSuccess}>
                SS
            </button>
            <button className='sidebar-button' onClick={() => changeRoute("RESET")}>
                RST
            </button>
        </div>
    </React.Fragment>
  )
}

export default Sidebar