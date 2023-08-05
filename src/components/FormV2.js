import React from 'react'
import './FormV2.css'

function FormV2() {
    return (
        <React.Fragment>
            <form action="" className='input-form' >
                <h3>ANALYSIS PARAMETERS</h3>
                <div className="analysis-params-container add-bottom-margin">
                    <div className="input-container long-input-field">
                        <label className='input-form-label'>Stock to be Analyzed</label>
                        <input type="text" />
                    </div>

                    <div className="input-container">
                        <label className='input-form-label'>Start Date</label>
                        <input type="text" />
                    </div>
                    <div className="input-container">
                        <label className='input-form-label'>End Date</label>
                        <input type="text" />
                    </div>
                    <div className="input-container">
                        <label className='input-form-label'>No of days for the Analysis</label>
                        <input type="text" />
                    </div>
                    <div className="input-container">
                        <label className='input-form-label'>Number of Stock Price Paths</label>
                        <input type="text" />
                    </div>
                    <div className="input-container long-input-field">
                        <label className='input-form-label'>Number of Iterations</label>
                        <input type="text" />
                    </div>
                </div>

                <h3>INPUT VARIABLES</h3>
                <div className="input-vars-container add-bottom-margin">
                    <div className="input-container">
                        <label className='input-form-label'>No of days in MC Model</label>
                        <input type="text" />
                    </div>
                    <div className="input-container">
                        <label className='input-form-label'>Model period spend Cap</label>
                        <input type="text" />
                    </div>
                    <div className="input-container">
                        <label className='input-form-label'>Daily $ cost avg.</label>
                        <input type="text" />
                    </div>
                    <div className="input-container">
                        <label className='input-form-label'>Daily min. spend $</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="input-tables-container">
                    <table className="input-table-1">
                        <tr>
                            <th>Limit Price</th>
                            <th>Daily Spend</th>
                        </tr>
                        <tr>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td><input type="text" /></td>
                            <td className='border-bottom-right-radius'><input type="text" /></td>
                        </tr>
                    </table>
                    <table className="input-table-2">
                        <caption>20 days SMA Grid</caption>
                        <tr>
                            <th>Limit Price</th>
                            <th>Daily Spend</th>
                            <th>Current Level</th>
                        </tr>
                        <tr>
                            <td><input type="text" value="Par" disabled="true"/></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td><input type="text" value="2% Below" disabled="true"/></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td><input type="text" value="4% Below" disabled="true"/></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                        </tr>
                    </table>
                </div>
                <button className='calculate-btn'>CALCULATE</button>
            </form>
        </React.Fragment>
    )
}

export default FormV2
