import React from 'react';
import Badge from 'react-bootstrap/Badge';

const ArrowComponent = () => {
  const greeting = 'Hello Arrow Function Component!';

  return <HeadlineCons value={greeting} />;
};

const HeadlineCons = ({ value }) => {
    return <div>
            <h5>
                <Badge bg="secondary">{value}</Badge>
            </h5>
        </div>;
  };

export default ArrowComponent;
