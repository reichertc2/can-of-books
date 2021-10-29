import React from 'react';
import BestBooks from './BestBooks.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookFormModal from './BookFormModal.js';

class Main extends React.Component{
  render(){
    return (
      <>
        <BestBooks />
        <BookFormModal />
      </>
    );
  }
}

export default Main;
