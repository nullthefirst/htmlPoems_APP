import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

import './Artis.css';

import Content from './views/content';
import Music from './views/music';
import Upload from './views/upload';
import Archive from './views/archive';
import Poets from './views/poets';
import Disclaimer from './views/disclaimer';
import Contact from './views/contact';

export default class AppMenu extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">htmlPoems by Poetrique</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1}>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem eventKey={2}>
                  <Link to="/music">Music</Link>
                </NavItem>
                <NavItem eventKey={3}>
                  <Link to="/upload">Upload</Link>
                </NavItem>
                <NavDropdown eventKey={4} title="More" id="basic-nav-dropdown">
                  <MenuItem eventKey={4.1}>
                    <Link to="/archive">Archive</Link>
                  </MenuItem>
                  <MenuItem eventKey={4.2}>
                    <Link to="/poets">Poets</Link>
                  </MenuItem>
                </NavDropdown>
                <NavItem eventKey={5}>
                  <Link to="/disclaimer">Disclaimer</Link>
                </NavItem>
                <NavItem eventKey={6}>
                  <Link to="/contact">Contact</Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={Content} />
          <Route path="/music" component={Music} />
          <Route path="/upload" component={Upload} />
          <Route path="/archive" component={Archive} />
          <Route path="/poets" component={Poets} />
          <Route path="/disclaimer" component={Disclaimer} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}