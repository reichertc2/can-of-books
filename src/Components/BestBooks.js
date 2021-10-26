import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  componentDidMount (){
    this.getBooks;
  }

  getBooks = async () => {
    try {
      let booksAPI = await axios.get(`http://localhost:3001/book`);
      this.setState({
        books: booksAPI
      });
      console.log('BestBooks state',this.state);
    }
    catch (error){
      console.log(`There was an error ${error.message}`);
    }
  }


  render() {
    console.log('this is state on BestBooks.js',this.state);
    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
