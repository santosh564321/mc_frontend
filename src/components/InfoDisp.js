import React from 'react'
import './InfoDisp.css'

function InfoDisp({info}) {
  return (
    <React.Fragment>
        <div className='info-display'>
            <p>The Following Data is generated using 200 random iterations. The previous 20 days between <span className='highlighter'>{info.startDate}</span> and <span className='highlighter'>{info.endDate}</span> have been used as data. </p>
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
        </div>
    </React.Fragment>
  )
}

export default InfoDisp