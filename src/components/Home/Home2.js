import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillSkype,
} from "react-icons/ai";
import { FaLinkedinIn,FaTelegram } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            As a seasoned AI/Automation engineer with over 8 years of experience. <br/>
            I specialize in transforming complex requirements into high-quality, scalable, and intuitive applications. <br/>
            My expertise spans AI, Automation implementation, API integrations, database management, all driven by a strategic problem-solving mindset and a commitment to client satisfaction.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
