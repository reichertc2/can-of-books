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
import BookFormModal from './Components/BookFormModal';
import BestBooks from './Components/BestBooks.js';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      showModal: false,
      newBook: null,
      books: [],
      showBooks: false
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
    console.log(bookInfo);
    const newBookResponse = await axios.post('http://localhost:3001/books', bookInfo);

    this.setState({
      newBook: newBookResponse.data,
      showModal: false
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

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              <BestBooks newBook={this.state.newBook} books={this.state.books} showBooks={this.state.showBooks} getBooks={this.getBooks} deleteBook={this.deleteBook} />
              <BookFormModal handleClose={this.handleClose} handleShow={this.handleShow} showModal={this.state.showModal} onCreate={this.handleCreate} />
            </Route>
            <Main />
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
