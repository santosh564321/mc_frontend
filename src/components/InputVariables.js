import React, { Component } from "react";
import axios from "axios";
import "./InputVariables.css";

export class InputVariables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 26,
      periodSpendCap: 50000000,
      dailyCostAvg: 0,
      costAvgLimitPricePerShare: 0,
      dailyMinSpend : 0,
      limitPrice1: 0,
      limitPrice2: 237,
      limitPrice3: 0,
      limitPrice4: 0,
      limitPrice5: 0,
      dailySpend1: 0,
      dailySpend2: 650000,
      dailySpend3: 1250000,
      dailySpend4: 0,
      dailySpend5: 0,
      belowPrice: 500000,
      percent2BelowPrice: 1250000,
      percent4BelowPrice: 2000000,
      currentLevel: 0,
      loader: false,
    };
  }

  handleFormChange = (e) => {
    this.setState({
      [e.target.name]:
        e.target.value === "" ? "" : parseFloat(e.target.value, 10),
    });
  };

  handleSubmit = (e) => {
    this.setState({loader: true})
    e.preventDefault();
    axios.post('https://c1536q3eob.execute-api.us-east-1.amazonaws.com/calculate',this.state).then( response => {
        console.log(response.data)
        this.props.onResponse(response.data)
        this.setState({loader:false})
    }).catch(err => {
        console.log(err)
    })
  };
  render() {
    const {
      loader,
      days,
      periodSpendCap,
      dailyCostAvg,
      costAvgLimitPricePerShare,
      dailyMinSpend,
      limitPrice1,
      limitPrice2,
      limitPrice3,
      limitPrice4,
      limitPrice5,
      dailySpend1,
      dailySpend2,
      dailySpend3,
      dailySpend4,
      dailySpend5,
      belowPrice,
      percent2BelowPrice,
      percent4BelowPrice,
      currentLevel
    } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <p>Monte Carlo Calculator</p>
          <div>
            <label>Days in MC model</label>
            <input
              placeholder="Days"
              value={days}
              onChange={this.handleFormChange}
              name="days"
              type="number"
              min="0"
              step="any"
              className="marginRight"
            />
          </div>
          <div>
          <label>Spend Cap</label>
            <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="Model Period Spend Cap"
              value={periodSpendCap}
              onChange={this.handleFormChange}
              name="periodSpendCap"
              type="number"
            />
          </div>
          <div>
          <label>Daily Cost Avg </label>
            <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="Daily Cost Average"
              value={dailyCostAvg}
              onChange={this.handleFormChange}
              name="dailyCostAvg"
              type="number"
            />
          </div>
          <div>
          <label>Cost Avg Limit Price/Share</label>
            <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="Daily Cost Average"
              value={costAvgLimitPricePerShare}
              onChange={this.handleFormChange}
              name="costAvgLimitPricePerShare"
              type="number"
            />
          </div>
          <div>
          <label>Daily Min Spend</label>
            <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="Daily Cost Average"
              value={dailyMinSpend}
              onChange={this.handleFormChange}
              name="dailyMinSpend"
              type="number"
            />
          </div>
          <div>
          <label>Limit Price 1</label>
          <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="limit Price 1"
              value={limitPrice1}
              onChange={this.handleFormChange}
              name="limitPrice1"
              type="number"
              className="marginRight"
            />
            <label>Daily Spend 1</label>
            <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="Daily Spend 1"
              value={dailySpend1}
              onChange={this.handleFormChange}
              name="dailySpend1"
              type="number"
            />
          </div>
          <div>
          <label>Limit Price 2</label>
          <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="limit Price 2"
              value={limitPrice2}
              onChange={this.handleFormChange}
              name="limitPrice2"
              type="number"
              className="marginRight"
            />
            <label>Daily Spend 2</label>
            <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="Daily Spend 2"
              value={dailySpend2}
              onChange={this.handleFormChange}
              name="dailySpend2"
              type="number"
            />
          </div>
          <div>
          <label>Limit Price 3</label>
          <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="limit Price 3"
              value={limitPrice3}
              onChange={this.handleFormChange}
              name="limitPrice3"
              type="number"
              className="marginRight"
            />
            <label>Daily Spend 3</label>
            <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="Daily Spend 3"
              value={dailySpend3}
              onChange={this.handleFormChange}
              name="dailySpend3"
              type="number"
            />
          </div>
          <div>
          <label>Limit Price 4</label>
          <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="limit Price 4"
              value={limitPrice4}
              onChange={this.handleFormChange}
              name="limitPrice4"
              type="number"
              className="marginRight"
            />
            <label>Daily Spend 4</label>
            <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="Daily Spend 4"
              value={dailySpend4}
              onChange={this.handleFormChange}
              name="dailySpend4"
              type="number"
            />
          </div>
          <div>
          <label>Limit Price 5</label>
          <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="limit Price 5"
              value={limitPrice5}
              onChange={this.handleFormChange}
              name="limitPrice5"
              type="number"
              className="marginRight"
            />
            <label>Daily Spend 5</label>
            <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="Daily Spend 5"
              value={dailySpend5}
              onChange={this.handleFormChange}
              name="dailySpend5"
              type="number"
            />
          </div>
          <div>
          <label>Below Price</label>
          <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="Below Price"
              value={belowPrice}
              onChange={this.handleFormChange}
              name="belowPrice"
              type="number"
              className="marginRight"
            />
            <label>Current Level (1) </label>
            <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              value={currentLevel}
              onChange={this.handleFormChange}
              name="currentLevel"
              type="number"
              className="marginRight"
            />
          </div>
          <div>
          <label>Below 2% Price</label>
          <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="Below 2% Price"
              value={percent2BelowPrice}
              onChange={this.handleFormChange}
              name="percent2BelowPrice"
              type="number"
              className="marginRight"
            />
            <label>Current Level (0.98) </label>
            <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              value={(currentLevel * 0.98).toFixed(2)}
              name="currentLevel"
              type="number"
              disabled="disabled"
              step=".01"
              className="marginRight"
            />
          </div>

          <div>
          <label>Below 4% Price</label>
          <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              placeholder="Below 4% Price"
              value={percent4BelowPrice}
              onChange={this.handleFormChange}
              name="percent4BelowPrice"
              type="number"
              className="marginRight"
            />
            <label>Current Level (0.96) </label>
            <i class="fa fa-usd" aria-hidden="true"></i>
            <input
              value={(currentLevel * 0.96).toFixed(2)}
              onChange={this.handleFormChange}
              name="currentLevel"
              type="number"
              disabled="disabled"
              step=".01"
              className="marginRight"
            />
          </div>

          <button type="submit">Calculate</button>
          {loader && <div class="loader"></div>}
        </form>
      </React.Fragment>
    );
  }
}

export default InputVariables;
