import React from "react";
import Table from 'react-bootstrap/Table';

export const UserDetails = (props) => {
  const { id, name, city } = props;
  const clickHandler = (userId) => {
    alert(`Delete user: ${userId}`);
  };

  return (
    
        <tr>
            <td>{name}</td>
            <td>{city}</td>
            <td>
                <span role="img" aria-label="delete" className="action" title="Delete" 
                onClick={() => {clickHandler(id); console.log(id); }} >
                ❌
                </span>
            </td>
        </tr>
  );
};
