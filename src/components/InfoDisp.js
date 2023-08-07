import React from 'react'
import './InfoDisp.css'
import moment from 'moment'
import ExcelIcon from '../excel.png'

function InfoDisp({info, iterations}) {
    let startDate = moment(info.startDate)
    let endDate = moment(info.endDate)
    let diff = endDate.diff(startDate, 'days') + 1
  return (
    <React.Fragment>
        <div className='info-display'>
            <p>The Following Data is generated using {iterations} random iterations. The data form the past {diff} days between <span className='highlighter'>{info.startDate}</span> and <span className='highlighter'>{info.endDate}</span> have been used as data. </p>
            <table>
                <tr>
                    <td>
                        Daily Variance
                    </td>
                    <td>
                        {info.dailyVariance}
                    </td>
                </tr>
                <tr>
                    <td>
                        Annualized Variance
                    </td>
                    <td>
                        {info.annulazedVariance}
                    </td>
                </tr>
                <tr>
                    <td>
                        Annualized Standard Deviation
                    </td>
                    <td>
                        {info.annulazedSD}
                    </td>
                </tr>
            </table>
            <p><button className='table-export-btn'><img src={ExcelIcon}/><span>Export Model to Excel</span></button></p>

        </div>
    </React.Fragment>
  )
}

export default InfoDisp