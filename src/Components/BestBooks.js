import React from 'react';
import axios from 'axios';
import Books from './Books';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBooks: false
    };
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    try {
      let booksAPI = await (await axios.get(`${process.env.REACT_APP_SERVER}book`)).data;
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


  render() {
    console.log('this is state on BestBooks.js', this.state);
    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.showBooks ? <Books books={this.state.books} /> : <h3>Books not found.</h3>} 
      </>
    );
  }
}

export default BestBooks;
