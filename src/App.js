import React, { useState } from "react";
import Navbar from "./components/UI/Navbar";
import Dashboard from "./components/UI/Dashboard";
import UsersDashboard from "./components/Users/UsersDashboard";

function App() {

  return (
    <div>

 
      <Navbar/>

      <Dashboard/>

      <UsersDashboard/>
      

    </div>

  );
}

export default App;