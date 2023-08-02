import React from 'react'
import './Stats.css'
function Stats({stats,title,isCurrency}) {
  return (
    <React.Fragment>
        <table className='stats-table'>
    <thead>
        <tr>
            <th colspan="2">{title}</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Max {isCurrency?"$ spent": "Shares purchased"}</td>
            <td>{stats.max}</td>
        </tr>
        <tr>
            <td>Min {isCurrency?"$ spent": "Shares purchased"}</td>
            <td>{stats.min}</td>
        </tr>
        <tr>
            <td>Mean {isCurrency?"$ spent": "Shares purchased"}</td>
            <td>{stats.mean}</td>
        </tr>
        <tr>
            <td>Median {isCurrency?"$ spent": "Shares purchased"}</td>
            <td>{stats.median}</td>
        </tr>
        <tr>
            <td>Standard Deviation</td>
            <td>{stats.stdDev}</td>
        </tr>
        <tr>
            <td>Standard Deviation - 1</td>
            <td>{stats.stdMinus1}</td>
        </tr>
        <tr>
            <td>Standard Deviation + 1</td>
            <td>{stats.stdPlus1}</td>
        </tr>
    </tbody>
</table>


    </React.Fragment>
  )
}

export default Stats