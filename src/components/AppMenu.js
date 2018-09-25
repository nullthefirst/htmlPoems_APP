import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

import './Artis.css';

import Overview from './views/overview';
import Goals from './views/goals';
import Events from './views/events';
import History from './views/history';

export default class AppMenu extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">LCU JamCityLive Festival 2018</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1}>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem eventKey={2}>
                  <Link to="/goals">Goals</Link>
                </NavItem>
                <NavItem eventKey={3}>
                  <Link to="/events">Events</Link>
                </NavItem>
                <NavDropdown eventKey={4} title="More" id="basic-nav-dropdown">
                  <MenuItem eventKey={4.1}>Action</MenuItem>
                  <MenuItem eventKey={4.2}>Another action</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={Overview} />
          <Route path="/goals" component={Goals} />
          <Route path="/events" component={Events} />
          <Route path="/history" component={History} />

        </div>
      </Router>
    );
  }
}