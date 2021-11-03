import React from 'react';
import {useAuth0} from '@auth0/auth0-react'
// import {Button} from 'react-boostrap';
// import LoginForm from './LoginForm.js';
// import 'bootstrap/dist/css/bootstrap.min.css';


const LoginButton = () => {



  const {isAuthenticated, loginWithRedirect} = useAuth0()

 
    return !isAuthenticated && (
      <>
        {/* {this.state.showLogin ? (
          <LoginForm loginHandler={this.props.loginHandler}/>
        ) : (
          <Button onClick={this.handleLogin}>Login</Button>
        )} */}
        <button onClick={loginWithRedirect}>Login</button>
      </>
    )

    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
}

export default LoginButton;