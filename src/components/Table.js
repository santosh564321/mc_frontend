import React from 'react'
import "./Table.css"
function Table(props) {
  return (
    <React.Fragment>
                <h3>{props.title}</h3>

    <div className="container">
        <table>
            <thead>
                <tr>
                    {props.data[0].map((item,index) => {
                        return (
                            <th className='tableHead' key={"head" + index}>
                                {index+1}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {props.data.map((item,index) => {
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
    </React.Fragment>
  )
}

export default Table