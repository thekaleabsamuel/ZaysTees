import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={8} className="mx-auto">
          <h1 className="text-center mb-4">About Us</h1>
          <p className="text-center mb-5">
            Local small business dedicated to providing high-quality custom apparel printing services. We offer a wide range of printing options, including screen printing, embroidery, DTG (Direct-to-Garment) printing, and heat transfers. Our team of experienced designers and printers are committed to delivering exceptional results for every project. Whether you're looking to create custom t-shirts for your business, personalized merchandise for an event, or embroidered caps for your team, we've got you covered. Contact us today to learn more about our services and start your custom printing project.
          </p>
          <p>
            Our mission is to do all the work so you can focus on what you do best. We take pride in our craftsmanship and attention to detail, ensuring that every garment we produce meets the highest standards of quality. From the initial design concept to the final product, we work closely with our clients to bring their vision to life. Whether you're looking for custom apparel for your business, organization, or event, we're here to help. Contact us today to learn more about our services and start your custom printing project.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;