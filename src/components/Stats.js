import React from 'react'
import './Stats.css'
function Stats({stats,title,isCurrency}) {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(amount);
    }
  return (
    <React.Fragment>
        <table className='stats-table'>
    <thead>
        <tr>
            <th colspan="2">{title.toUpperCase()}</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Max {isCurrency?"$ spent": "Shares purchased"}</td>
            <td>{isCurrency?formatCurrency(stats.max):stats.max}</td>
        </tr>
        <tr>
            <td>Min {isCurrency?"$ spent": "Shares purchased"}</td>
            <td>{isCurrency?formatCurrency(stats.min):stats.min}</td>
        </tr>
        <tr>
            <td>Mean {isCurrency?"$ spent": "Shares purchased"}</td>
            <td>{isCurrency?formatCurrency(stats.mean):stats.mean}</td>
        </tr>
        <tr>
            <td>Median {isCurrency?"$ spent": "Shares purchased"}</td>
            <td>{isCurrency?formatCurrency(stats.median):stats.median}</td>
        </tr>
        <tr>
            <td>Standard Deviation</td>
            <td>{isCurrency?formatCurrency(stats.stdDev):stats.stdDev}</td>
        </tr>
        <tr>
            <td>Standard Deviation - 1</td>
            <td>{isCurrency?formatCurrency(stats.stdMinus1):stats.stdMinus1}</td>
        </tr>
        <tr>
            <td>Standard Deviation + 1</td>
            <td>{isCurrency?formatCurrency(stats.stdPlus1):stats.stdPlus1}</td>
        </tr>
    </tbody>
</table>


    </React.Fragment>
  )
}

export default Stats