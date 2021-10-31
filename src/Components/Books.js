import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


class Books extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <>
        <Carousel style={{ minHeight: '30rem', color: 'black', backgroundColor: 'transparent' }}>
          {this.props.books.map((el) =>
            <Carousel.Item key={el._id}>
              <img style={{ display: 'inline-block', margin: '0px auto', backgroundColor: 'transparent' }}
                className="d-block"
                src="https://via.placeholder.com/400"
                alt="First slide"
              />
              <Carousel.Caption style={{ color: 'black', backgroundColor: 'transparent' }}>
                <h3 style={{ backgroundColor: 'transparent' }} >{el.title}</h3>
                <p style={{ backgroundColor: 'transparent' }}>{el.description}</p>
                <Button style={{ backgroundColor: '#534d41', border: '1px solid transparent' }} onClick={()=>{this.props.handleUpdate(el) }}>
                  Update
                </Button>
                <Button style={{ backgroundColor: '#db2b39', border: '1px solid transparent', margin: '5px' }} onClick={() => this.props.deleteBook(el._id)}>
                  Delete
                </Button>
              </Carousel.Caption>
            </Carousel.Item>)}
        </Carousel>
      </>
    );
  }
}

export default Books;
