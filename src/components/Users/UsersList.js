import React, {useState } from "react";


const UsersList = ({users, userDeleteHandler, setIsUpdate}) => {


  return (

    <div className="container">
    <div className="row justify-content-center align-items-center">
     
      <div className="col-md-8 mt-3">
        <div className="card shadow-sm border-0 mb-3">
          <div className="card-header text-bg-black text-center">
            User Information
          </div>
          <table className="table table-bg table-bordered align-middle mb-3">
           
            <thead>
              <tr>
                <th>ID</th>
                <th>User role</th>
                <th>Product description</th>
                <th>Flavor type</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
    
          
            {users.map(user => 
              <tbody key={user.id}>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.role}</td>
                  <td>{user.product}</td>
                  <td>{user.flavor}</td>
                  <td>
                      <div class="d-grid">
                          <button class="btn btn-sm btn-primary"
                            onClick={() => setIsUpdate(user.id, user.role, user.product, user.flavor)}
                          >
                              
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                              </svg>
                          </button>
                      </div>
                  </td>
                  <td>
                    <div class="d-grid">
                        <button 
                            onClick={() => userDeleteHandler(user.id)}
                            class="btn btn-sm btn-danger"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UsersList;

