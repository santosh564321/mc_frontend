import React from 'react'
import './Hsp.css'
import ExcelIcon from '../excel.png'
import moment from 'moment'
function Hsp({data}) {
    let startDate = moment(data[data.length - 1].date).format('YYYY-MM-DD')
    let endDate = moment(data[0].date).format('YYYY-MM-DD')
  return (
    <div className='hsp-container'>
        <h3>Historic Stock Price</h3>
        <p><button className='table-export-btn'><img src={ExcelIcon}/><span>Export to Excel</span></button></p>
        <div className='start-date-end-date-container'>
        <div className="input-container">
              <label className="input-form-label">Start Date</label>
              <input
                type="date"
                value={startDate}
                name="startDate"
              />
            </div>
            <div className="input-container">
              <label className="input-form-label">End Date</label>
              <input
                type="date"
                value={endDate}
                name="endDate"
              />
            </div>
            </div>
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