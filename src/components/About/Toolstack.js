import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiGithub,
  SiFigma,
  SiGooglechrome,
  SiJupyter,
  SiAmazonaws,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiGooglechrome />, name: "Chrome DevTools" },
    { icon: <SiJupyter />, name: "Jupyter Notebook" },
    { icon: <SiAmazonaws />, name: "AWS Console" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <OverlayTrigger
          key={index}
          placement="top"
          overlay={<Tooltip id={`tooltip-${tool.name}`}>{tool.name}</Tooltip>}
        >
          <Col xs={4} md={2} className="tech-icons">
            {tool.icon}
          </Col>
        </OverlayTrigger>
      ))}
    </Row>
  );
}

export default Toolstack;
