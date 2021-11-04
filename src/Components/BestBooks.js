import React from 'react';
import Books from './Books';


class BestBooks extends React.Component {


  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  componentDidMount() {
    this.props.getBooks();
    this.props.jwtFuntion();
  }

  render() {
    /* TODO: render user's books in a Carousel */
    return (
      <>
        
        {this.props.showBooks ? <Books books={this.props.books} deleteBook={this.props.deleteBook} handleUpdate={this.props.handleUpdate} /> : <h3>Books not found.</h3>}
      </>
    );
  }
}

export default BestBooks;
