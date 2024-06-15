import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Contact.css'; // import your CSS file


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add your logic to handle form submission
    // For example, you can send the form data to a server using an API
    console.log('Form Data:', formData);
    // Reset the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container className="my-5">
      <Row>
      
        <Col md={6}>
          <h2>Send Us a Message</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Enter your message"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="px-4">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;