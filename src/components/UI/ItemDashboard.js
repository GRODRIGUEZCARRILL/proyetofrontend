import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import UsersList from "./UsersList";


const UsersDashboard = () => {

  const [itemList, setitemsList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentItemProperties, setCurrentItemProperties] = useState({});


  const addUserHandler = (urole,uproduct, uFlavor) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {userrole: urole, product: uproduct, flavor: uFlavor, id: Math.random().toString()} ]
    });
    console.log(usersList);
  };

  const userDeleteHandler = (id) => {
    console.log("User id:", id);
    let newUsersList = usersList.filter(user => user.id != id);
  
    console.log("New users list: ", newUsersList);

    setUsersList(newUsersList);
  };

  const setIsUpdateHandler = (userrole, userproduct, userflavor, id) => {
    console.log('User role:', userrole);
    setCurrentUserProperties({userrole, userproduct, userflavor, id});
    setIsUpdate(true);
  }

  const userUpdateHandler = (id, urole,uproduct, uFlavor) => {
    console.log("User id:", id);
    let newUsersList = usersList.map(user => {
      if(user.id === id){
        user.urole = urole;
        user.uprodcut = uproduct;
        user.uFlavor = uFlavor;
        return user;
      }
      return user;
    });
   
    console.log("New users list: ", newUsersList);

    setUsersList(newUsersList);
  };

  //Get all Users method

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetchUserDataHandler();
  }, []);

  async function fetchUserDataHandler () {
    try {

      const response = await fetch('https://localhost:7071/api/User/getAll', {

      method: 'GET',

      headers: {
            'Content-Type': 'application/json'
      },

    })

    const dataApi = await response.json();
    if(!response.ok){
    }
      const transformedData = dataApi.data.map(users => {
        return{
          id: users.userId,
          fName: users.fName,
          lName: users.lName,
          user: users.userType,
          phone: users.phone,
          email: users.email
          
        };

      });

      setUserData(transformedData);
    } catch (error) {
    }
  };

  return (

    <div>

      <AddUser onAddUser={addUserHandler} isUpdate={isUpdate} currentUserProperties={currentUserProperties} onUpdate={userUpdateHandler}/>
      <UsersList users={usersList} userDeleteHandler={userDeleteHandler} setIsUpdate={setIsUpdateHandler}/>

    </div>

  );
};

export default UsersDashboard;