import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-qp0uom38.us.auth0.com"
    clientId="t2v2unaErQPTf7SwDHu6s6pW9pOGRINU"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
