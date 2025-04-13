import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import za from "../../Assets/Projects/za.png";
import wellics from "../../Assets/Projects/wellics.jpg";
import FlipSideCrypto from "../../Assets/Projects/FlipSideCrypto.jpg";
import vendor from "../../Assets/Projects/vendor.png";
import data from "../../Assets/Projects/data.png";
import tek from "../../Assets/Projects/tek.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vendor}
              isBlog={false}
              title="Buddy"
              description='𝑪𝒖𝒔𝒕𝒐𝒎 𝒎𝒖𝒍𝒕𝒊𝒗𝒆𝒏𝒅𝒐𝒓 𝑺𝒂𝒂𝑺 𝒔𝒐𝒍𝒖𝒕𝒊𝒐𝒏 𝒇𝒐𝒓 𝒕𝒆𝒙𝒕 𝒎𝒂𝒓𝒌𝒆𝒕𝒊𝒏𝒈 𝒄𝒂𝒎𝒑𝒂𝒊𝒈𝒏𝒔 - multiple users (companies) can create their accounts, buy subscription, and use the platform for their text marketing campaigns.'
              skill = 'React, Figma, SaaS, Node.js'
              demoLink="https://buddytexts.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data}
              isBlog={false}
              title="Data Generator"
              description="RNDgen is a AI-powered random number and data generator for artificial and synthetic data. It's used by developers and researchers for testing, simulations, and cryptographic applications."
              skill = 'SaaS, OpenAI API, GPT Chatbot, React, Node.js'
              demoLink="https://www.rndgen.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FlipSideCrypto}
              isBlog={false}
              title="Frontend Dev"
              description="From responsive design and UI patterns to reusable code snippets, these resources help me deliver clean. By integrating these tools into my workflow, I ensure that projects are both scalable and maintainable."
              skill = 'React, Mantine UI, Context API, SaaS'
              demoLink="https://www.frontenddev.site/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tek}
              isBlog={false}
              title="Tekvek"
              description="This project was a full fledge website for a software development agency/company. I am the developer and co-author of this website and company."
              skill = 'Next.js, Material UI, TailwindCss, JavaScript, Node.js, Firebase'
              demoLink="https://www.tekvek.com" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wellics}
              isBlog={false}
              title="Wellics"
              description="The objective of the project is to increase employee engagement in health and wellness initiatives and reduce healthcare costs associated with employee illness and absenteeism."
              skill="React, Node.js, SmartPhone, Tablet"
              demoLink="https://www.wellics.com/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={za}
              isBlog={false}
              title="WintheMatch"
              description="WintheMatch is a fast and modern web application that offers a seamless shopping experience for customers. It leverages Next.js for server-side rendering, Material-UI for sleek and responsive UI design. "
              skill="React, Next.js, Javascript, Material-UI, Firebase"
              demoLink="https://zamazor-app.vercel.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
