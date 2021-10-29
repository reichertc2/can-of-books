import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <footer style={{backgroundColor:'#29335c'}}>
        <Navbar style={{backgroundColor:'#29335c'}} collapseOnSelect expand="lg" >
          <Navbar.Brand style={{backgroundColor:'#29335c', color:'#f3a712', margin: '0px auto'}}>Code Fellows</Navbar.Brand>
        </Navbar>
        <h4 style={{backgroundColor:'#29335c', color:'#f3a712', margin: '0px 40%', fontSize:'1rem', width: '75%', padding:'0rem 0rem 1rem'}}>Brought to you by Angela Dzodzomenyo and Chris Reichert</h4>
      </footer>
    );
  }
}

export default Footer;
