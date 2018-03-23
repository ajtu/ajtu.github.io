import React, { Component } from 'react'
import { Navbar, Nav, NavItem , MenuItem, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">soul swim</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
            <NavDropdown eventKey="3" title="Lessons" id="nav-dropdown">
    <MenuItem eventKey="3.1" componentClass={Link} href="/baby-lessons" to="/baby-lessons">Baby + Me</MenuItem>
    <MenuItem eventKey="3.2" componentClass={Link} href="/private-lessons" to="/private-lessons" >Private</MenuItem>
    <MenuItem eventKey="3.3" componentClass={Link} href="/group-lessons" to="/group-lessons" >Group</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey="4.4" componentClass={Link} href="/trial-lesson" to="/trial-lesson" title="item">Trial Lesson</MenuItem>
  </NavDropdown>
            <NavItem eventKey={4} componentClass={Link} href="/trial-lesson" to="/trial-lesson">
              Trial Lesson
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/contact" to="/contact">
              Contact Us
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
