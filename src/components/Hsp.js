import React from 'react'
import './Hsp.css'
function Hsp({data}) {
  return (
    <div className='hsp-container'>
        <h3>Historic Stock Price</h3>
        <table className='hsp-table'>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Date</th>
                    <th>Closing Price</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index) => {
                    return (
                        <tr>
                           <td>{index+1}</td>
                           <td>{item.date}</td>
                           <td>{item.closingPrice}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Hsp