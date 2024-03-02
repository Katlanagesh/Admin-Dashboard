import React from "react";

function Tables() {
  let table = [
    {
      Name: "Tiger Nixon",
      Position: "System Architect",
      Office: "Manhaten",
      Age: 61,
      Startdate: "2011/04/25",
      Salary: "$320,800",
    },
    {
      Name: "Quinn Flynn",
      Position: "Support Lead",
      Office: "Edinburgh",
      Age: 22,
      Startdate: "2013/03/03",
      Salary: "$342,000",
    },
    {
      Name: "Charde Marshall",
      Position: "Regional Director",
      Office: "San Francisco",
      Age: 36,
      Startdate: "2008/10/16",
      Salary: "$342,000",
    },
    {
      Name: "Charde Marshall",
      Position: "Regional Director",
      Office: "florida",
      Age: 36,
      Startdate: "2008/10/16",
      Salary: "$390,800",
    },
    {
      Name: "Gowtham",
      Position: " Full Stack Developer",
      Office: "India",
      Age: 26,
      Startdate: "2022/04/01",
      Salary: "$430,800",
    },
    {
      Name: "Bradley Greer",
      Position: "System Architect",
      Office: "Edinburgh",
      Age: 23,
      Startdate: "2013/04/23",
      Salary: "$290,800",
    },
    {
      Name: "Dai Rios",
      Position: "Personnel Lead",
      Office: "paris",
      Age: 45,
      Startdate: "2012/10/13",
      Salary: "₹132,000",
    },
    {
      Name: "Yuri Berry",
      Position: "Chief Marketing Officer (CMO)",
      Office: "New York",
      Age: 41,
      Startdate: "2009/06/25",
      Salary: "₹675,000",
    },
    {
      Name: "Tiger Nixon",
      Position: "System Architect",
      Office: "Edinburgh",
      Age: 61,
      Startdate: "2011/04/25",
      Salary: "₹320,800",
    },
    {
      Name: "Caesar Vance",
      Position: "Pre-Sales Support",
      Office: "New York",
      Age: 21,
      Startdate: "2011/06/21",
      Salary: "₹220,200",
    },
    {
      Name: "Mark",
      Position: "Support Engineer",
      Office: "San Francisco",
      Age: 47,
      Startdate: "2009/07/07",
      Salary: "₹ 87,500",
    },
    {
      Name: "bolt",
      Position: "Data associate",
      Office: "Singapore",
      Age: 64,
      Startdate: "2012/02/09",
      Salary: "₹ 30,800",
    },
    {
      Name: "doe",
      Position: "cloud Architect",
      Office: "Edinburgh",
      Age: 37,
      Startdate: "2010/04/17",
      Salary: "₹ 50,670",
    },
    {
      Name: "john",
      Position: "Junior System Architect",
      Office: "Edinburgh",
      Age: 39,
      Startdate: "2011/04/15",
      Salary: "₹ 320,800",
    },
  ];
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-2 text-gray-800">Tables</h1>

      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4 bg-dark">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered bg-dark text-warning"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </tfoot>
              <tbody>
                {table.map(
                  ({ Name, Position, Office, Age, Startdate, Salary }) => (
                    <tr>
                      <td>{Name}</td>
                      <td>{Position}</td>
                      <td>{Office}</td>
                      <td>{Age}</td>
                      <td>{Startdate}</td>
                      <td>{Salary}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tables;