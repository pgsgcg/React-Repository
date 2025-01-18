import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HookUserRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <Container>
      <Row>
        <Col>Please enter text : </Col>
        <Col>
            <input type="text" style={{width:300}} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </Col>
      </Row>
    
      <Row>
        <Col>Render Count: {count.current}</Col>
      </Row>
      </Container>
    </>
  );
}

export default HookUserRef;