import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Nav, NavDropdown } from 'react-bootstrap'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//Top Navbar links
import ForKidsPage from '../forkids/ForKidsPage';
import Pricing from '../pricing';
import Login from '../login';
import Home from '../home';
import Learning from '../learning';

var topnavbar = {
    backgroundColor: 'rgb(58, 12, 134)',
    // backgroundImage: 'url(' + imgUrl + ')',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all', // 'ms' is the only lowercase vendor prefix
    color: 'white',
    // padding:'20px 50px 50px 50px'
  };

  var style = {
    color:'white !important', 
    padding:'140px 50px 50px 50px'
}
  



const TopNavBar = () => {
    return(
        <Router>
            <Navbar collapseOnSelect expand="lg" style={topnavbar}>
                <Navbar.Brand href="/" style={{color:'white'}}>Fuelup Skills</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/forkids" style={{color:'white'}}>For Kids</Nav.Link>
                    <Nav.Link href="/pricing" style={{color:'white'}}>Pricing</Nav.Link>
                    <NavDropdown bsPrefix={style} title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/login" style={{color:'white'}}>Login</Nav.Link>
                    <Nav.Link eventKey={2} href="learning" style={{color:'white'}}>
                        Start Learning
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/forkids" component={ForKidsPage} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/login" component={Login} />
                <Route path="/learning" component={Learning} />
            </Switch>
      </Router>
    )
}

export default TopNavBar