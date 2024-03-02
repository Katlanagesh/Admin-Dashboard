import React from "react";
import DoughnutChart from "./doughtnutchart";
import Linechart from "./Linechart";

function Charts() {
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h2 mb-2 text-gray-800">Charts</h1>

      {/* <!-- Content Row --> */}
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          {/* <!-- Area Chart --> */}
          <div className="card shadow ">
            <div className="card-header bg-dark">
              <h6 className=" font-weight-bold text-danger ">Line Chart</h6>
            </div>

            <div className="card-body bg-info text-light">
              <div>
                <Linechart />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Donut Chart --> */}
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4 ">
            {/* <!-- Card Header - Dropdown --> */}
            <div className="card-header py-3 bg-dark text-danger">
              <h6 className="m-0 font-weight-bold text-danger">Donut Chart</h6>
            </div>
            {/* <!-- Card Body --> */}
            <div className="card-body bg-info">
              <div>
                <DoughnutChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;