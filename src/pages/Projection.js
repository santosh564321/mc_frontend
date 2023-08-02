import { useState } from "react";
import React from "react";
import InputVariables from "../components/InputVariables";
import "./Projection.css";
import Table from "../components/Table";
import Stats from "../components/Stats";
function Projection() {
  const [response, setResponse] = useState(null);

  const onResponse = (data) => {
    setResponse(data);
  };
  return (
    <div class="main">
      <div className="row1">
        <InputVariables className="row1-col1"  onResponse={onResponse} />
        <div className="row1-col2">
            {response && response.startDate && (<p>
              The Following Data is generated using 200 random iterations. The previous 20 days between <b>{response.startDate} and {response.endDate}</b> have been used as data. The Daily Variance, Annualized Variance and Annualized Standard Deviation are <b>{response.dailyVariance}, {response.annulazedVariance}, and {response.annulazedSD}</b>.
            </p>)}
          <div className="stats">
            {response && response.stats && (
              <Stats stats={response.stats} title="Stats" isCurrency="true" />
            )}
          </div>
          <div className="stats">
            {response && response.sharesStats && (
              <Stats stats={response.sharesStats} title="Shares Stats" />
            )}
          </div>
        </div>
        
      </div>
      
      <div className="table-container">
        {response && response.mcTable && (
          <Table data={response.mcTable} title="MC Table" />
        )}
      </div>
      <div className="table-container">
        {response && response.sma && (
          <Table data={response.sma} title="SMA Table" />
        )}
      </div>
      <div className="table-container">
        {response && response.snSpend && (
          <Table data={response.snSpend} title="Scenario Spend Table" />
        )}
      </div>
    </div>
  );
}

export default Projection;
