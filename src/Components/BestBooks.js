import React from 'react';
import Books from './Books';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    /* TODO: render user's books in a Carousel */
    return (
      <>
        <h2 style={{display:'inline-block'}}>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.props.showBooks ? <Books books={this.props.books} deleteBook={this.props.deleteBook} /> : <h3>Books not found.</h3>}
      </>
    );
  }
}

export default BestBooks;
