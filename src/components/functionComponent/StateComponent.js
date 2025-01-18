import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
const StateComponent = () => {
  return <Headline />;
};

const Headline = () => {
    const [greeting, setGreeting] = useState('State Function Component!');
    return <div>
        <h5><Badge bg="secondary">{greeting}</Badge></h5>
        <input
        type="text"
        value={greeting}
        onChange={event => setGreeting(event.target.value)}
      />
    </div>;
};

export default StateComponent;