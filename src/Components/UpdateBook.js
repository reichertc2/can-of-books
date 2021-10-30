import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class UpdateBook extends React.Component {

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
      title: (event.target.title.value) ? event.target.title.value : this.state.title,
      description: (event.target.description.value) ? event.target.description.value : this.state.description,
      status: (event.target.status.value) ? event.target.status.value : this.state.status,
      email: (event.target.email.value) ? event.target.email.value : this.state.email,
      _id: this.state._id
    };
    console.log(this.state);
    this.props.
  }

  render() {
    return (
      <>
        <Modal show={this.props.showUpdateModal} style={{ color: 'black' }}>
          <Modal.Header>
            <Modal.Title>Update A Book</Modal.Title>
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
                <Form.Control as="select" onChange={(event) => this.setState({ status: event.target.value })} type="name" placeholder="Enter 'read' or 'unread'" as="select" >
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
            <Button onClick={(event) => this.handleUpdate(event)} variant="primary" type="submit" value="sumbit">Update
            </Button>
            <Button onClick={this.props.handleClose} variant="secondary">Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UpdateBook;
