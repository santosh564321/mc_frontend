import React, { Component } from 'react'
import './FormV2.css'
class FormV2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        stock : '',
        startDate: '',
        endDate: '',
        daysForTheAnalysis: '',
        stockPricePaths: '',
        iterations:'',
        daysInMCmodel: '',
        modelPeriodSpendCap: '',
        dailyCostAvg: '',
        dailyMinSpend: '',
        limitPrice1: '',
        limitPrice2: '',
        limitPrice3: '',
        limitPrice4: '',
        dailySpend1: '',
        dailySpend2: '',
        dailySpend3: '',
        dailySpend4: '',
        dailySpendPar: '',
        dailySpendPercent2Below: '',
        dailySpendPercent4Below: '',
        currentLevel: '',
        loader: false,
      }
    }

    handleFormChange = (e) => {
        if( e.target.type === 'number'){
            this.setState({
                [e.target.name] : parseFloat(e.target.value)
            }) 
        }else{
            this.setState({
                [e.target.name] : e.target.value
            })
        }
    }


    handleSubmit = (e) => {
        this.setState({loader: true})
        e.preventDefault();
        // axios.post('https://c1536q3eob.execute-api.us-east-1.amazonaws.com/calculate',this.state).then( response => {
        //     console.log(response.data)
        //     this.props.onResponse(response.data)
        //     this.setState({loader:false})
        // }).catch(err => {
        //     console.log(err)
        // })
        console.log(this.state)
    };
  render() {

    const {
        stock,
        startDate,
        endDate,
        daysForTheAnalysis,
        stockPricePaths,
        iterations,
        daysInMCmodel,
        modelPeriodSpendCap,
        dailyCostAvg,
        dailyMinSpend,
        limitPrice1,
        limitPrice2,
        limitPrice3,
        limitPrice4,
        dailySpend1,
        dailySpend2,
        dailySpend3,
        dailySpend4,
        dailySpendPar,
        dailySpendPercent2Below,
        dailySpendPercent4Below,
        currentLevel,
        loader
      } = this.state
    return (
        <React.Fragment>
        <form action="" className='input-form' onSubmit={this.handleSubmit} >
            <h3>ANALYSIS PARAMETERS</h3>
            <div className="analysis-params-container add-bottom-margin">
                <div className="input-container long-input-field">
                    <label className='input-form-label'>Stock to be Analyzed</label>
                    <input type="text" value={stock} onChange={this.handleFormChange} name='stock'/>
                </div>

                <div className="input-container">
                    <label className='input-form-label'>Start Date</label>
                    <input type="date" value={startDate} onChange={this.handleFormChange} name='startDate'/>
                </div>
                <div className="input-container">
                    <label className='input-form-label'>End Date</label>
                    <input type="date" value={endDate} onChange={this.handleFormChange} name='endDate'/>
                </div>
                <div className="input-container">
                    <label className='input-form-label'>No of days for the Analysis</label>
                    <input type="number" value={daysForTheAnalysis} onChange={this.handleFormChange} name='daysForTheAnalysis'/>
                </div>
                <div className="input-container">
                    <label className='input-form-label'>Number of Stock Price Paths</label>
                    <input type="number" value={stockPricePaths} onChange={this.handleFormChange} name='stockPricePaths'/>
                </div>
                <div className="input-container long-input-field">
                    <label className='input-form-label'>Number of Iterations</label>
                    <input type="number" value={iterations} onChange={this.handleFormChange} name='iterations'/>
                </div>
            </div>

            <h3>INPUT VARIABLES</h3>
            <div className="input-vars-container add-bottom-margin">
                <div className="input-container">
                    <label className='input-form-label'>No of days in MC Model</label>
                    <input type="number" value={daysInMCmodel} onChange={this.handleFormChange} name='daysInMCmodel'/>
                </div>
                <div className="input-container">
                    <label className='input-form-label'>Model period spend Cap</label>
                    <input type="number" value={modelPeriodSpendCap} onChange={this.handleFormChange} name='modelPeriodSpendCap'/>
                </div>
                <div className="input-container">
                    <label className='input-form-label'>Daily $ cost avg.</label>
                    <input type="number" value={dailyCostAvg} onChange={this.handleFormChange} name='dailyCostAvg'/>
                </div>
                <div className="input-container">
                    <label className='input-form-label'>Daily min. spend $</label>
                    <input type="number" value={dailyMinSpend} onChange={this.handleFormChange} name='dailyMinSpend'/>
                </div>
            </div>
            <div className="input-tables-container">
                <table className="input-table-1">
                    <tr>
                        <th>Limit Price</th>
                        <th>Daily Spend</th>
                    </tr>
                    <tr>
                        <td><input type="number" value={limitPrice1} onChange={this.handleFormChange} name='limitPrice1'/></td>
                        <td><input type="number" value={dailySpend1} onChange={this.handleFormChange} name='dailySpend1'/></td>
                    </tr>
                    <tr>
                        <td><input type="number" value={limitPrice2} onChange={this.handleFormChange} name='limitPrice2'/></td>
                        <td><input type="number" value={dailySpend2} onChange={this.handleFormChange} name='dailySpend2'/></td>
                    </tr>
                    <tr>
                        <td><input type="number" value={limitPrice3} onChange={this.handleFormChange} name='limitPrice3'/></td>
                        <td><input type="number" value={dailySpend3} onChange={this.handleFormChange} name='dailySpend3'/></td>
                    </tr>
                    <tr>
                        <td><input type="number" value={limitPrice4} onChange={this.handleFormChange} name='limitPrice4'/></td>
                        <td className='border-bottom-right-radius'><input type="number"  value={dailySpend4} onChange={this.handleFormChange} name='dailySpend4'/></td>
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
                        <td><input type="number" value={dailySpendPar} onChange={this.handleFormChange} name='dailySpendPar'/></td>
                        <td><input type="number" value={currentLevel} onChange={this.handleFormChange} name='currentLevel'/></td>
                    </tr>
                    <tr>
                        <td><input type="text" value="2% Below" disabled="true"/></td>
                        <td><input type="number" value={dailySpendPercent2Below} onChange={this.handleFormChange} name='dailySpendPercent2Below'/></td>
                        <td><input type="number" value={currentLevel * 0.98}  disabled="true"/></td>
                    </tr>
                    <tr>
                        <td><input type="text" value="4% Below" disabled="true"/></td>
                        <td><input type="number" value={dailySpendPercent4Below} onChange={this.handleFormChange} name='dailySpendPercent4Below'/></td>
                        <td><input type="number" value={currentLevel * 0.96}  disabled="true"/></td>
                    </tr>
                </table>
            </div>
            {!loader? <button className='calculate-btn' type='submit'>CALCULATE</button> : <div class="loader"></div>}
        </form>
    </React.Fragment>
    )
  }
}

export default FormV2