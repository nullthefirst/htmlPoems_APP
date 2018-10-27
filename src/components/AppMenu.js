import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './Artis.css';

import Content from './views/content';
import Music from './views/music';
// import Upload from './views/upload';
import Archive from './views/archive';
import Poets from './views/poets';
import Disclaimer from './views/disclaimer';
import Contact from './views/contact';

export default class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        collapse: false,
        isWideEnough: false,
    };
  this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
  }
  render() {
    return (
      <Router>
        <Navbar color="pink lighten-1" dark expand="md" scrolling>
          <NavbarBrand href="/">
            <strong>htmlPoems by Poetrique</strong>
          </NavbarBrand>
          { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
          <Collapse isOpen = { this.state.collapse } navbar>
            <NavbarNav right>
              <NavItem active>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/music">Music</NavLink>
              </NavItem>
              {/* 
              <NavItem eventKey={3}>
                <Link to="/upload">Upload</Link>
              </NavItem> 
              */}
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>More</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="https://usheninte.github.io/htmlPoems/">Archive</DropdownItem>
                    <DropdownItem>
                      <NavLink to="/poets">Poets</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <NavLink to="/disclaimer">Disclaimer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">Contact"/disclaimer">Disclaimer</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>

        <Route exact path="/" component={Content} />
        <Route path="/music" component={Music} />
        {/* <Route path="/upload" component={Upload} /> */}
        <Route path="/archive" component={Archive} />
        <Route path="/poets" component={Poets} />
        <Route path="/disclaimer" component={Disclaimer} />
        <Route path="/contact" component={Contact} />
      </Router>
    );
  }
}