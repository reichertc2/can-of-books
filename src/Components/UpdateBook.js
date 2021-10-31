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
    console.log(`this is handleSubmit on UpdateBooks ${event.target.titleEntry.value}`);
    let createdBook = {
      title: (event.target.titleEntry.value) ? event.target.titleEntry.value : this.props.updatedBook.title,
      description: (event.target.descriptionEntry.value) ? event.target.descriptionEntry.value : this.props.updatedBook.description,
      status: (event.target.statusEntry.value) ? event.target.statusEntry.value : this.props.updatedBook.status,
      email: (event.target.emailEntry.value) ? event.target.emailEntry.value : this.props.updatedBook.email,
      _id: this.props.updatedBook._id
    };
    // console.log(createdBook);
    this.props.handleUpdate(createdBook);
    this.props.handleClose();
  }

  
  render() {
    // console.log(this.props);
    return (
      <>
        <Modal show={this.props.showUpdateModal} style={{ color: 'black' }}>
          <Modal.Header>
            <Modal.Title>Update A Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" >
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={(event) => this.setState({ title: event.target.value })} placeholder={this.props.updatedBook.title} type="text" id="titleEntry" />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(event) => this.setState({ description: event.target.value })} placeholder={this.props.updatedBook.description} type="text" id="descriptionEntry" />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" onChange={(event) => this.setState({ status: event.target.value })} placeholder={this.props.updatedBook.status} type="text" id="statusEntry">
                  <option></option>
                  <option value="5 STARS">5 of 5 Stars</option>
                  <option value="4 STARS">4 of 5 Stars</option>
                  <option value="3 STARS">3 of 5 Stars</option>
                  <option value="2 STARS">2 of 5 Stars</option>
                  <option value="1 STAR">1 of 5 Stars</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(event) => this.setState({ email: event.target.value })} placeholder={this.props.updatedBook.email} type="text" id="emailEntry" />
              </Form.Group>
              <Button style={{ backgroundColor: '#534d41', border: '1px solid transparent', width:'100%' }} type="submit" >Update</Button>
            </Form>
            <Button style={{ backgroundColor: '#534d41', border: '1px solid transparent', margin:'5px auto', width:'100%' }} onClick={this.props.handleClose} variant="secondary">Cancel</Button>
          </Modal.Body>
          <Modal.Footer>


          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UpdateBook;
