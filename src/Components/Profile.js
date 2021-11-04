import React from 'react';
import { withAuth0 } from '@auth0/auth0-react'

class Profile extends React.Component {

  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    return (
      <>
        <section style={{display: 'inline-block', width:'50%'}}>
          <h3>Welcome {this.props.auth0.user.name}, </h3>
          <h3>{this.props.auth0.user.nickname}</h3>
        </section>

        <img src={this.props.auth0.user.picture} alt={this.props.auth0.user.name} style={{display: 'inline-block'}}></img>

      </>
    );
  }
}

export default withAuth0(Profile);
