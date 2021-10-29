import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#f3a712'}}>
          <Navbar.Brand style={{backgroundColor: '#f3a712'}}>My Favorite Books</Navbar.Brand>
          <NavItem style={{backgroundColor: '#f3a712'}}><Link to="/profile" className="nav-link">Profile</Link></NavItem>
          {/* TODO: if the user is logged in, render a navigation link to profile page */}
          <NavItem style={{backgroundColor: '#f3a712'}}><Link to="/" className="nav-link">Home</Link></NavItem>
          {/* TODO: if the user is logged in, render the `LogoutButton` */}
        </Navbar>
      </header>
    );
  }
}

export default Header;
