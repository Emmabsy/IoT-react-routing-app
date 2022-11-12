
//import { Link} from "react-router-dom";

import {
  Container, Row, Col, Form, Button,Nav, Navbar, NavLink, NavItem 
} from 'reactstrap';



const Navigation = () => (
   <header>
   
    <Navbar  color="dark" light expand="xs" className="navbar fixed-top navbar-dark bg-primary "  style={{ height: 80 }}>

      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">

          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">
                   
                 
                </NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold text-primary" href="/">HOME</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center ">
                <NavLink className="font-weight-bold text-primary" href="/about">ABOUT</NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold text-primary" href="/contact"> CONTACT</NavLink>
              </NavItem>
               <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold text-primary" href="/services"> SERVICES</NavLink>
              </NavItem>
              {/*

              < UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <DropdownToggle className="font-weight-bold" nav caret>More</DropdownToggle>
                <DropdownMenu right>
                 
                  <DropdownItem>FreeRTOS</DropdownItem>
                  <DropdownItem>IoT Greengas</DropdownItem>
                  <DropdownItem>IoT EduKit</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

*/}
            </Nav>
          </Col>

         

          <Col className="d-none d-lg-flex justify-content-end">
            <Form inline>
            
              <Button type="submit" color="info" outline>Search</Button>
            </Form>
          </Col>

        </Row>
      </Container>

    </Navbar>
  </header>
  
);

export default Navigation

 {/*
    <div >
        <nav className='headerlink-title'>
            <Link to='/'>Home </Link>
            <Link to='/about'>About </Link>
            <Link to='/contact'>Contact </Link>
        </nav>
    </div>
  */}