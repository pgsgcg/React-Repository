import "./App.css";
import React from "react";
import { UserList } from "./UserList";
import { userData } from "./data";

function ParentChild() {
    
  return <UserList userData={userData} />;
}

export default ParentChild;
