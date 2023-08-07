import React from 'react'
import './Sidebar.css'
import adShort from '../adShort.svg'
import Tooltip from '@mui/material/Tooltip';

import ResetIcon from '../circular.png'

function Sidebar({changeRoute, responseSuccess, route}) {
  return (
    <React.Fragment>
        <div className="sidebar">
            <img src={adShort} alt="logo" srcset="" />
            <Tooltip title="Statistics">
            <button className={route == ""?"sidebar-button sidebar-button-active": "sidebar-button"} onClick={() => changeRoute("")}>
                STA
            </button>
            </Tooltip>
            <Tooltip title="Monte Carlo Values">
            <button className={route == "MC"?"sidebar-button sidebar-button-active": "sidebar-button"} onClick={() => changeRoute("MC")} disabled={!responseSuccess}>
                MC
            </button>
            </Tooltip>
            <Tooltip title="Historical Stock Prices Data">
            <button className={route == "HSP"?"sidebar-button sidebar-button-active": "sidebar-button"} onClick={() => changeRoute("HSP")} disabled={!responseSuccess}>
                HSP
            </button>
            </Tooltip>
            <Tooltip title="Simple Moving Average Table">
            <button className={route == "SMA"?"sidebar-button sidebar-button-active": "sidebar-button"} onClick={() => changeRoute("SMA")} disabled={!responseSuccess}>
                SMA
            </button>
            </Tooltip>
            <Tooltip title="Scenario Spend Table">
            <button className={route == "SS"?"sidebar-button sidebar-button-active": "sidebar-button"} onClick={() => changeRoute("SS")} disabled={!responseSuccess}>
                SS
            </button>
            </Tooltip>
            <Tooltip title="Reset">
            <button className='sidebar-button reset-button' onClick={() => changeRoute("RESET")}>
                <img src={ResetIcon} />
            </button>
            </Tooltip>
        </div>
    </React.Fragment>
  )
}

export default Sidebar