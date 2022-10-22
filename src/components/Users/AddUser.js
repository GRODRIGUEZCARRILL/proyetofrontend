import React, { useEffect, useState } from "react";


const AddUser = ({onAddUser, onUpdate, currentUserProperties = {}, isUpdate = false}) => {
  
  const [userrole, setUserrole] = useState("");
  const [product, setproduct] = useState("");
  const [flavor, setflavor] = useState("");

  useEffect(() => {
    console.log(currentUserProperties);
    console.log(isUpdate);
    if(isUpdate && currentUserProperties.name){
      setUserrole(currentUserProperties.userrole);
      setproduct(currentUserProperties.userproduct);
      setflavor(currentUserProperties.userflavor);
    }
  }, [currentUserProperties, isUpdate])

  
  const AddUserHandler = (event) => {
    event.preventDefault(); 
      if(isUpdate){
        onUpdate(currentUserProperties.id, currentUserProperties.userrole, currentUserProperties.userproduct, currentUserProperties.userflavor);
        return;
      }
        onAddUser(userrole,product,flavor);
  }
  

  const UserroleChangeHandler = (event) => {
    setUserrole(event.target.value);
  };

  const productChangeHandler = (event) => {
    setproduct(event.target.value);
  };

  const flavorChangeHandler = (event) => {
    setflavor(event.target.value);
  };

  return (

    <div>

      <div className="container">

      <div className="row justify-content-center align-items-center">

        <div className="col-md-8">

          <div className="card shadow-lg mt-5">
            {/* Header */}
            <div className="card-header text-bg-dark">{isUpdate? 'Update User' : 'Add New User'}</div>

            
            <div className="card-body">

              <form 
                className="row g-3 align-items-center justify-content-center"
                onSubmit={AddUserHandler}>

                
                <div className="col-md-12">
                  <div className="mb-3">
                    <label htmlFor="Userrole">User Role</label>
                    <input
                      type="text"
                      className="form-control form-control-sm mt-2"
                      placeholder="Userrole"
                      id="Userrole"
                      onChange={UserroleChangeHandler}
                      value={userrole}
                      required
                    ></input>
                  </div>
                </div>

                
                <div className="col-md-12 ">
                  <div className="mb-3">
                    <label htmlFor="Product">Product Descripction</label>
                    <input
                      type="string"
                      className="form-control form-control-sm mt-2"
                      placeholder="Product Descripction"
                      id="Product"
                      onChange={productChangeHandler}
                      value={product}
                      required
                    ></input>
                  </div>
                </div>

                
                <div className="col-md-12 ">
                  <div className="mb-3">
                    <label htmlFor="flavor">Flavor</label>
                    <input
                      type="text"
                      className="form-control form-control-sm mt-2"
                      placeholder="Flavor Type"
                      id="flavor"
                      onChange={flavorChangeHandler}
                      value={flavor}
                      required
                    ></input>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="col-md-3">
                    <div className="d-grid">
                      <button type="submit" className="btn btn-sm btn-success">
                      {isUpdate? 'Update User' : 'Add role'}
                      </button>
                    </div>
                  </div>
                </div>

                

              </form>

            </div>


          </div>

        </div>

      </div>

      </div>

    </div>

  );
};

export default AddUser;