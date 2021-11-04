import React from 'react';
import BestBooks from './BestBooks.js';
import BookFormModal from './BookFormModal.js';


class Main extends React.Component {
  render() {
    return (
      <>
        <h2 style={{ display: 'inline-block' }}>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <BookFormModal
          handleClose={this.props.handleClose}
          handleShow={this.props.handleShow}
          showModal={this.props.showModal}
          onCreate={this.props.onCreate} />
        
        <BestBooks
          newBook={this.props.newBook}
          books={this.props.books}
          showBooks={this.props.showBooks}
          getBooks={this.props.getBooks}
          deleteBook={this.props.deleteBook}
          updateBook={this.props.updateBook}
          handleUpdate={this.props.handleUpdate}
          jwt={this.props.jwt}
          jwtFuntion={this.props.jwtFuntion}  />
      </>
    );
  }
}

export default Main;
