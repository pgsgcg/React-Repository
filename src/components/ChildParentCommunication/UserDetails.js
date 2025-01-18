import React from "react";

export const UserDetails = (props) => {
  const { id, name, city, clickHandler } = props;

  return (
    <tr>
            <td>{name}</td>
            <td>{city}</td>
            <td>
                <span
                    role="img"
                    aria-label="delete"
                    className="action"
                    title="Delete"
                    onClick={() => clickHandler(id)}
                >
                    ❌
                </span>
            </td>
      </tr>
  );
};
