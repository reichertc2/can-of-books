import React from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Main from './Components/Main.js';
import Profile from './Components/Profile.js';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      showModal: false,
      newBook: null
    };
  }

  loginHandler = (user) => {
    this.setState({
      user,
    });
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    });
  }

  handleShow = () => {
    this.setState({
      showModal: true,
    });
  }
  handleClose = () => {
    this.setState({
      showModal: false,
    });
  }

  handleCreate = async (bookInfo) => {
    const newBookResponse = await axios.post(`${process.env.REACT_APP_SERVER}books`, bookInfo);

    this.setState({
      newBook: newBookResponse.data
    });
  }

  render() {
    return (
      <>
        <Router>
          <Header
            user={this.state.user}
            onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              <Main
                newBook={this.state.newBook}
                handleClose={this.handleClose}
                handleShow={this.handleShow}
                showModal={this.state.showModal}
                onCreate={this.handleCreate} />
            </Route>
            {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route path="/create">
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
