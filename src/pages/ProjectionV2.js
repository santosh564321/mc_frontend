import { useState } from "react";
import React from "react";
import InputVariables from "../components/InputVariables";
import "./ProjectionV2.css";
import Table from "../components/Table";
import Stats from "../components/Stats";
import Ad from '../ad.png'
import Sidebar from "../components/Sidebar";
import FormV2 from "../components/FormV2";
function ProjectionV2() {
  const [response, setResponse] = useState(null);

  const onResponse = (data) => {
    setResponse(data);
  };
  return (
    <div class="main-container">
      <div className="top-banner">
        <img src={Ad} alt="" srcset="" />
      </div>
      <div className="inner-container">
        <div className="sidebar-container">
          <Sidebar></Sidebar>
        </div>
        <div className="content">
          <div className="content-heading">
            Monte Carlo Analysis
          </div>
          <FormV2></FormV2>
          {/* <Table></Table> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectionV2;
