import { Link } from "react-router-dom";
import React from "react";
import DisplayDashboardData from "./DisplayDashboardData";
import ProjectProgress from "./ProjectProgress";
import ColorSystem from "./ColorSystem";
import DoughnutChart from "./doughtnutchart";
import Linechart from "./Linechart";
function AdminDashboard() {
  const datas = [
    {
      Earnings: "Earnings (Monthly)",
      value: "$ 40,000",
      symbol: "fas fa-calendar",
      bar: 0,
      color: "primary",
    },
    {
      Earnings: "Earnings (Annual)",
      value: "$ 215,000",
      symbol: "fas fa-dollar-sign",
      bar: 0,
      color: "success",
    },
    {
      Earnings: "Tasks",
      value: "50%",
      symbol: "fas fa-clipboard-list",
      bar: 1,
      color: "info",
    },
    {
      Earnings: "Pending Requests",
      value: "18",
      symbol: "fas fa-comments",
      bar: 0,
      color: "warning",
    },
  ];

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-light-800">Dashboard</h1>
        <span className="d-none d-sm-inline-block btn btn-sm btn-dark shadow-sm">
          <i className="fas fa-download fa-sm text-white-50"></i>
          Generate Report
        </span>
      </div>

      <div className="row">
        {datas.map((data, index) => {
          return <DisplayDashboardData key={index} data={data} />;
        })}
      </div>
      <div className="row">
        {/* <!-- Area Chart --> */}
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div className="card-header py-3 d-flex flex-row align-items-center bg-dark justify-content-between">
              <h6 className="m-0 font-weight-bold text-light">
                Earnings Overview
              </h6>
              <div className="dropdown no-arrow">
                <Link
                  className="dropdown-toggle"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="dropdown-header">Dropdown Header:</div>
                  <Link className="dropdown-item">Action</Link>
                  <Link className="dropdown-item">Another action</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item">Something else here</Link>
                </div>
              </div>
            </div>
            {/* <!-- Card Body --> */}
            <div className="card-body">
              <div>
                <Linechart />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Pie Chart --> */}
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div className="card-header py-3 d-flex flex-row align-items-center  bg-dark justify-content-between">
              <h6 className="m-0 font-weight-bold text-success">
                Revenue Sources
              </h6>
              <div className="dropdown no-arrow">
                <Link
                  className="dropdown-toggle"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="dropdown-header">Dropdown Header:</div>
                  <Link className="dropdown-item">Action</Link>
                  <Link className="dropdown-item">Another action</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item">Something else here</Link>
                </div>
              </div>
            </div>
            {/* <!-- Card Body --> */}
            <div className="card-body">
              <div>
                <DoughnutChart />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Illustrations --> */}
        <div className="row">
        <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Illustrations
                </h6>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    class="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: "13rem" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkcRTlcP_LA4N_5F4GF1_ijfH1qfiGrFDpw&usqp=CAU"
                    alt="..."
                  />
                </div>
                <p>
                  Add some quality, svg illustrations to your project courtesy
                  of{" "}
                  <a target="_blank" rel="nofollow" href="https://undraw.co/">
                    unDraw
                  </a>
                  , a constantly updated collection of beautiful svg images that
                  you can use completely free and without attribution!
                </p>
                <a target="_blank" rel="nofollow" href="https://undraw.co/">
                  Browse Illustrations on unDraw &rarr;
                </a>
              </div>
            </div>

          
          </div>
        
          {/* <!-- Approach --> */}
          
          <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Development Approach
                </h6>
              </div>
              <div className="card-body">
                <p>
                  SB Admin 2 makes extensive use of Bootstrap 4 utility classes
                  in order to reduce CSS bloat and poor page performance. Custom
                  CSS classes are used to create custom components and custom
                  utility classes.
                </p>
                <p class="mb-0">
                  Before working with this theme, you should become familiar
                  with the Bootstrap framework, especially the utility classes.
                </p>
              </div>
            </div>
            </div>
            </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <ProjectProgress />
        </div>
        <div className="col-lg-6 mb-4">
          {/* <div className="row"> */}
          <ColorSystem />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
