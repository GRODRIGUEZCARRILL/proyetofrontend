import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center">

          
            <div className="col-md-3">
                <div className="card text-bg-dark shadow text-center">
                    <div className="card-header">Role List</div>
                    <a href="UsersDashboard.html" className="card-footer small text-black">View roles</a>
                </div>
            </div>  

        </div>
      </div>
    </div>
  );
};

export default Dashboard;