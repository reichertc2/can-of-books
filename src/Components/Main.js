import React from 'react';
import BestBooks from './BestBooks.js';
import BookFormModal from './BookFormModal.js';

class Main extends React.Component{
  render(){
    return (
      <>
        <BestBooks newBook={this.props.newBook}/>
        <BookFormModal
          handleClose={this.props.handleClose}
          handleShow={this.props.handleShow}
          showModal={this.props.showModal}
          onCreate={this.props.handleCreate} />
      </>
    );
  }
}

export default Main;
