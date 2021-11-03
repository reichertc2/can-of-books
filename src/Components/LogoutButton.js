import React from 'react';
import {useAuth0} from '@auth0/auth0-react'
// import {Button} from 'react-boostrap';
// import LoginForm from './LoginForm.js';
// import 'bootstrap/dist/css/bootstrap.min.css';


const LogoutButton = () => {



  const {isAuthenticated, logout} = useAuth0()

 
    return isAuthenticated && (
      <>
        <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
      </>
    )

    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
}

export default LogoutButton;
