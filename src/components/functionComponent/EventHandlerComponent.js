import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';

const EventHandlerComponent = () => {
  return <Headline />;
};

const Headline = () => {
  const [greeting, setGreeting] = useState(
    'Event Handler Function Component!'
  );

  const handleChange = event => setGreeting(event.target.value);

  return (
    <div>
      <h5>{greeting}</h5>
      <input type="text" value={greeting} onChange={handleChange} />
    </div>
  );
};

export default EventHandlerComponent;