import React from 'react'
import './TableV2.css'
import ExcelIcon from '../excel.png'

function TableV2({title, data}) {
  return (
    <div className='main-table-container'>
    <h3>{title}</h3>
    <p><button className='table-export-btn'><img src={ExcelIcon}/><span>Export to Excel</span></button></p>

    <div className="main-table">
        <table>
            <thead>
                <tr>
                    {data[0].map((item,index) => {
                        return (
                            <th className='tableHead' key={"head" + index}>
                                {index+1}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((item,index) => {
                    return (
                        <tr>
                            {item.map((i,index) => {
                            return (
                                <td>
                                    {i}
                                </td>
                            )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default TableV2