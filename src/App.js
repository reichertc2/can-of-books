import React from 'react';
import './Styles/App.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import Main from './Components/Main.js';
import Profile from './Components/Profile.js';
import axios from 'axios';
import Main from './Components/Main.js';
import UpdateBook from './Components/UpdateBook';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      showModal: false,
      newBook: null,
      books: [],
      showBooks: false,
      showUpdateModal: false,
      updatedBook: {}
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
      showUpdateModal: false
    });
  }

  handleCreate = async (bookInfo) => {

    console.log(bookInfo);
    const newBookResponse = await axios.post(`${process.env.REACT_APP_SERVER}books`, bookInfo);


    this.setState({
      newBook: newBookResponse.data,
      showModal: false,
    });
    this.getBooks();
  }

  getBooks = async () => {
    try {
      let booksAPI = await (await axios.get(`${process.env.REACT_APP_SERVER}books`)).data;
      console.log(booksAPI);
      this.setState({
        books: booksAPI,
        showBooks: true
      });
      console.log('BestBooks state', this.state);
    }
    catch (error) {
      console.log(`There was an error ${error.message}`);
    }
  }

  deleteBook = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER}books/${id}`);
    this.getBooks();
  }

  handleUpdate = () => {
    // let updatedBook = this.props.updateBook();
    console.log('this is', this.handleUpdate);
    this.setState( {
      showUpdateModal: true
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
                books={this.state.books}
                showBooks={this.state.showBooks}
                getBooks={this.getBooks}
                deleteBook={this.deleteBook}
                handleClose={this.handleClose}
                handleShow={this.handleShow}
                showModal={this.state.showModal}
                onCreate={this.handleCreate}
                handleUpdate={this.handleUpdate} />
            </Route>
            {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route path="/create">
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          {(this.state.showUpdateModal)?<UpdateBook showUpdateModal={this.state.showUpdateModal} handleClose={this.handleClose} updatedBook={this.state.updatedBook} />: '' }
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
