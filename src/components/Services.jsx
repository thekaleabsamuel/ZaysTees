import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <p className="text-center mb-5">
        At our print shop, we offer a wide range of services to meet your apparel printing and design needs. Whether you're looking for custom t-shirts, embroidered caps, or personalized merchandise, we've got you covered.
      </p>

      <Row>
        <Col md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Screen Printing</Card.Title>
              <Card.Text>
                Our screen printing service allows you to create vibrant and long-lasting designs on a variety of garments, including t-shirts, hoodies, and more. We use high-quality inks and state-of-the-art equipment to ensure exceptional print quality.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Embroidery Design</Card.Title>
              <Card.Text>
                Our skilled embroidery designers can transform your ideas into beautiful embroidered designs for hats, polos, and other apparel items. We use top-notch materials and techniques to deliver stunning results.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>DTG (Direct-to-Garment) Printing</Card.Title>
              <Card.Text>
                With our DTG printing service, you can create full-color, high-resolution prints directly on your garments. This technology allows for intricate designs and photo-quality prints, making it perfect for small batch orders or personalized items.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Heat Transfers</Card.Title>
              <Card.Text>
                Our heat transfer service offers a cost-effective and versatile solution for creating custom designs on a variety of materials, including t-shirts, bags, and more. We use high-quality transfer materials to ensure long-lasting and vibrant prints.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;