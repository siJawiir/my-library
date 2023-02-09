import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="container p-3 mx-auto">
        <div className="w-100 my-3 text-center">
          <div className="flex">
            <h3>Dashboard Page</h3>
            <p>This is a dashboard page</p>
          </div>
          <div className="row g-4">
            <div className="col-sm-12 col-xl-6">
              <div className="container-fluid pt-4 px-4">
                <table className="table table-hover table-rounded table-responsive w-100">
                  <thead className="table-light">
                    <td>
                      <th>asdf</th>
                      <th>asdf</th>
                      <th>asdf</th>
                      <th>asdf</th>
                    </td>
                  </thead>
                  <tbody className="table table-info">
                    <tr>
                      <td>asdf</td>
                      <td>asdf</td>
                      <td>asdf</td>
                      <td>asdf</td>
                      <td>asdf</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-sm-12 col-xl-6">
              <div className="container-fluid pt-4 px-4">
                <table className="table table-hover table-rounded table-responsive w-100">
                  <thead className="table-light">
                    <td>
                      <th>asdf</th>
                      <th>asdf</th>
                      <th>asdf</th>
                      <th>asdf</th>
                    </td>
                  </thead>
                  <tbody className="table table-info">
                    <tr>
                      <td>asdf</td>
                      <td>asdf</td>
                      <td>asdf</td>
                      <td>asdf</td>
                      <td>asdf</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="container-fluid pt-4 px-4">
              <div className="bg-secondary text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h1>asdf</h1>
                </div>
                <div className="table-responsive">
                  <table className="table text-start align-middle table-bordered table-hover mb-0">
                    <thead className="table table-info">
                      <tr>
                        <th>Name</th>
                        <th>Name</th>
                        <th>Name</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody className="table table-info">
                      <tr>
                        <td>asdf</td>
                        <td>asdf</td>
                        <td>asdf</td>
                        <td>asdf</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
