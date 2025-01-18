
//import { Navbar, Nav, Container } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Outlet, Link } from "react-router-dom"

function reactUtilityNavbar() {
    return (
        <>
      <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/ReactUtility/">PG</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/ReactUtility/">Home</Nav.Link>
                <Nav.Link as={Link} to="/ReactUtility/about">About</Nav.Link>
                <Nav.Link as={Link} to="/ReactUtility/contact">Contact</Nav.Link>
              <NavDropdown title="Components" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/ReactUtility/funComponent">Function Component</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/propsComponent">Props</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/arrowComponent">Arrow</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/asyncComponent">Async</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/statelessComponent">Stateless</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/stateComponent">State</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/eventHandlerComponent">Event Handler</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/callbackComponent">Callback Function</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/functionComponents">Lifecycle</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/functionComponents">Pure Function Components</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/functionComponents">Export and Import</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/functionComponents">Ref</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/functionComponents">Export and Import</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ReactUtility/classComponent">Class Components</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/stateClassComponent">State in Class Components</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/PassingPropsClassComponents">Passing props in Class Components</NavDropdown.Item>

                

              </NavDropdown>

              <NavDropdown title="Utility" id="basic-nav-dropdown">
                
                <NavDropdown.Item as={Link} to="/ReactUtility/ifComponent">If Else Statement</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/propsDemo">Props Example</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/propsWithoutDestructuring">Props with Product Description</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/ifComponent">Event</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ReactUtility/hookDemo">Hook</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/hookUseState">Use State</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/hookUseEffect">Use Effect</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/hookUseContext">Use Context</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/hookUseRef">Use Ref</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/hookUseReducer">Use Reducer</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/hookUseCallback">Use Callback</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/hookUseMemo">Use Memo</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/customHook">Custom Hook</NavDropdown.Item>
 
              </NavDropdown>

              <NavDropdown title="Communication" id="basic-nav-dropdown">                
                <NavDropdown.Item as={Link} to="/ReactUtility/parentChild">Parent to Child</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/parentToChild">Parent to Child Ex</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/childToParent">Child to Parent</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/childParentComm">Child to Parent Ex</NavDropdown.Item>
                
                <NavDropdown.Item as={Link} to="/ReactUtility/reactDataTable">Context API</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Datatables" id="basic-nav-dropdown">                
                <NavDropdown.Item as={Link} to="/ReactUtility/iterateComponent">Iterate List</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/empList">Emp Data List</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/reactDataTable">Movie List</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Charts" id="basic-nav-dropdown">                
                <NavDropdown.Item as={Link} to="/ReactUtility/iterateComponent">Iterate List</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/empList">Emp Data List</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ReactUtility/reactDataTable">Movie List</NavDropdown.Item>
              </NavDropdown>

              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
                <Outlet></Outlet>
            </section>
       </> 
      
    );
  }
  
  export default reactUtilityNavbar;