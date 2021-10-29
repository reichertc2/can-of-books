import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Books extends React.Component {
  render() {
    return (
      <Carousel style={{ minHeight: '25rem' , color: 'black'}}>
        {this.props.books.map((el) =>
          <Carousel.Item key={el._id}>
            <img
              className="d-block"
              src="https://via.placeholder.com/150"
              alt="First slide"
            />
            <Carousel.Caption style={{ color: 'black' }}>
              <h3>{el.title}</h3>
              <p>{el.description}</p>
            </Carousel.Caption>
          </Carousel.Item>)}
      </Carousel>
    );
  }
}

export default Books;
