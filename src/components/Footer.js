import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillMail } from "react-icons/ai";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Yunis Osmanov</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} DL</h3>
        </Col>
        <Col md="4" >
          <h3 id="contact">
            <div>
            <AiFillMail /> yunisosmanov387@gmail.com
            </div>
            </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
