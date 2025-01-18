import React from "react";
import { UserList } from "./UserList";
import { userData } from "./data";

function ChildToParent() {
  return <UserList userData={userData} />;
}

export default ChildToParent;
