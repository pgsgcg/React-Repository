import React from 'react';
import Badge from 'react-bootstrap/Badge';

function FunctionComponents() {
    return <Headline />;
}

function Headline() {
    const greeting = 'Hello Function Component!';
    return (
      <div>
        <h5>
        <Badge bg="secondary">{greeting}</Badge>
        </h5>      
      </div>
    )    
  }

export default FunctionComponents;