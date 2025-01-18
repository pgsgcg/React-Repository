import React, { useState } from "react";
import { UserDetails } from "./UserDetails";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

export const UserList = ({ userData = [] }) => {
  const [users] = useState(userData);

  return (
    <Container>
        <div>      
            <h5>
                <Badge bg="secondary">Parent to Child Communication</Badge>
            </h5>      
        </div>
      <Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(({ id, name, city }) => (
                        <UserDetails key={id} id={id} name={name} city={city} />
                    ))}
                </tbody>
        </Table>
      </Row>
    </Container>

    
  );
};
