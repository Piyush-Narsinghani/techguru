import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="3" className="footer-copywright">
          <h3>gmail- techguru@mrmgroup.org</h3>
        </Col>
        <Col md="2" className="footer-copywright">
          <h3>Contact- 9592800007</h3>
        </Col>
        <Col md="2" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Address- S.Co-130-132, VIP Road, CCC, Zirakpur, Punjab.</h3>
        </Col>
        <Col md="7" className="footer-copywright">
          <h3> </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Piyush Narsinghani</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
