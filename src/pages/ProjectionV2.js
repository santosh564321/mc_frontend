import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import InputVariables from "../components/InputVariables";
import "./ProjectionV2.css";
import Table from "../components/Table";
import Stats from "../components/Stats";
import Ad from '../ad.png'
import Sidebar from "../components/Sidebar";
import FormV2 from "../components/FormV2";
import InfoDisp from "../components/InfoDisp";
import TableV2 from "../components/TableV2";
import Hsp from "../components/Hsp";
function ProjectionV2() {
  const [response, setResponse] = useState(null);
  const [responseSuccess, setResponseSuccess] = useState(false)
  const [route, setRoute] = useState("")

  const onResponse = (data) => {
    setResponse(data);
    setResponseSuccess(true)
  };

  const changeRoute = (data) => {
    console.log("this is called",data)
    if(data === 'RESET'){
      setResponseSuccess(false)
    }
    setRoute(data)
  };

  return (
    <div class="main-container">
      <div className="top-banner">
        <img src={Ad} alt="" srcset="" />
      </div>
      <div className="inner-container">
        <div className="sidebar-container">
          <Sidebar changeRoute={changeRoute} responseSuccess = {responseSuccess} route={route}></Sidebar>
        </div>
        <div className="content">
          <div className="content-heading">
            Monte Carlo Analysis
          </div>
          {(() => {
            switch(route) {
              case 'MC': return <TableV2 data={response.mcTable} title="Stock Price Paths" />
              case 'SMA' : return <TableV2 data={response.sma} title="SMA Table" />
              case 'SS': return <TableV2 data={response.snSpend} title="Scenario Spend Table" />
              case 'HSP': return <Hsp data={response.closingPrices}/>
              default: return <>{!responseSuccess && <FormV2 onResponse={onResponse}></FormV2>}
              {responseSuccess && <>
                <InfoDisp info={response} iterations={response.mcTable.length} className="info-display-container"></InfoDisp>
                <div className="stats-container">
                  <Stats stats={response.stats} title="Stats" isCurrency="true" />
                  <Stats stats={response.sharesStats} title="Shares Stats" />
                </div>
              </>}</>
            }
          })()}
          
        </div>
      </div>
    </div>
  );
}

export default ProjectionV2;
