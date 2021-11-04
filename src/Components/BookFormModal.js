import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class BookFormModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      status: '',
      email: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let createdBook = {
      title: this.state.title,
      description: this.state.description,
      status: this.state.status,
      email: this.state.email
    };
    console.log(this.state);

    this.props.onCreate(createdBook);
  }

  render() {
    return (
      <>
        <Button style={{ backgroundColor: '#534d41' , border: '1px solid transparent', display:'inline-block', margin:'5px 0px 5px 50%'}} onClick={this.props.handleShow}>
          Add a book
        </Button>
        <Modal show={this.props.showModal} style={{ color: 'black' }}>
          <Modal.Header>
            <Modal.Title>Add a book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={(event) => this.setState({ title: event.target.value })} type="name" placeholder="Enter title of book" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(event) => this.setState({ description: event.target.value })} type="name" placeholder="Enter book description" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" onChange={(event) => this.setState({ status: event.target.value })} type="name" placeholder="Enter 'read' or 'unread'" >
                  <option></option>
                  <option value="5 STARS">5 of 5 Stars</option>
                  <option value="4 STARS">4 of 5 Stars</option>
                  <option value="3 STARS">3 of 5 Stars</option>
                  <option value="2 STARS">2 of 5 Stars</option>
                  <option value="1 STAR">1 of 5 Stars</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(event) => this.setState({ email: event.target.value })} type="name" placeholder="Enter your email" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button style={{ backgroundColor: '#534d41', border: '1px solid transparent', margin:'5px auto', width:'100%' }} onClick={(event) => this.handleSubmit(event)} variant="primary" type="submit" value="sumbit">Submit
            </Button>
            <Button style={{ backgroundColor: '#534d41', border: '1px solid transparent', margin:'5px auto', width:'100%' }} onClick={this.props.handleClose} variant="secondary">Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default BookFormModal;
