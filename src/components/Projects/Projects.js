import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Dummy images from assets (update the filenames if needed)
import assembler from "../../Assets/Projects/assembler.png";
import heart from "../../Assets/Projects/heart.png";
import chord from "../../Assets/Projects/chord.png";
// import sign from "../../Assets/Projects/sign.png";
import enlightener from "../../Assets/Projects/enlightener.png";
import centrix from "../../Assets/Projects/centrix.png";
import test from "../../Assets/Projects/test.png";
import proxy from "../../Assets/Projects/proxy.png";

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
              imgPath={centrix}
              isBlog={false}
              title="CentrixSupport"
              description="AI-powered mental health support chatbot that provides coping mechanisms and helpful resources using natural language understanding."
              ghLink="https://github.com/DivyanshuKaintura/CentrixSupport"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={false}
              title="Test Companion"
              description="Capture code snippets or problems, get solutions, explanations, and related resources instantly. Built with Next.js and Gemini API, it enhances learning by providing context-aware assistance. Integrated with Google Cloud Vision for image processing and perform google search for additional resources."
              ghLink="https://github.com/DivyanshuKaintura/test-companion"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assembler}
              isBlog={false}
              title="Assembler and Emulator"
              description="Built a custom assembler and emulator in Python for a self-defined instruction set. Converts assembly code into machine code and executes it via the emulator."
              ghLink="https://github.com/DivyanshuKaintura/Assembler"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sign}
              isBlog={false}
              title="Sign Language Detection"
              description="Real-time sign language recognition using MediaPipe and OpenCV. Trained an ML model to detect and translate hand gestures into text."
              ghLink="https://github.com/yourusername/sign-language-detection"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart}
              isBlog={false}
              title="Heart Disease Detection"
              description="A machine learning model using Random Forest Classifier that predicts heart disease with 98.5% accuracy based on clinical features like age, BP, and cholesterol."
              ghLink="https://github.com/DivyanshuKaintura/Heart-Disease-Detection-Using-Machine-Learning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enlightener}
              isBlog={false}
              title="Enlightener"
              description="Deepfake detection platform using Meso4 and a custom CNN model. Includes a Gemini-powered chatbot to assist users and explain detection results."
              ghLink="https://github.com/DivyanshuKaintura/Enlightener"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chord}
              isBlog={false}
              title="Chord DHT"
              description="Java-based implementation of Chord, a distributed hash table (DHT) using consistent hashing. Enables decentralized data storage and retrieval in P2P networks."
              ghLink="https://github.com/DivyanshuKaintura/CHORD-DHT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proxy}
              isBlog={false}
              title="Attendance Proxy Preventer"
              description="Developed a Next.js application that detects and prevents attendance proxy attempts using geolocation. It ensures accurate attendance tracking by verifying student locations during class hours. Built with Next.js, Google Maps API, and Firebase Realtime Database. Scalable and secure solution for educational institutions. Can support up to 1000 concurrent users with real-time updates."
              ghLink="https://github.com/DivyanshuKaintura/proxy-preventer"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
