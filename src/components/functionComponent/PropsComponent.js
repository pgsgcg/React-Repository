import React from 'react';
import Badge from 'react-bootstrap/Badge';

function PropsComponent() {
    //alert("PropsComponent..");
    const greeting = 'Hello Props Function Component!';
    var greetingVar = <Headline value={greeting} />;
    //alert("greetingVar :"+greetingVar);
    return greetingVar;
}

function Headline(props) {
    //alert("Headline.. props :"+props);
  return (
    <div>
      <h5>
      <Badge bg="secondary">{props.value}</Badge>
      </h5>      
    </div>
  )  
}

export default PropsComponent;

