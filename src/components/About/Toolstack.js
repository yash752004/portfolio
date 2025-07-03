import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiDocker,
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiCanva,
  SiAmazonaws,
  SiGithub,
  SiPostman,
  SiFigma 
} from "react-icons/si";
import { MdEmail } from "react-icons/md";

function Toolstack() {
  const techs = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiAmazonaws />, name: "AWS (Lightsail/ECS)" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <DiGit />, name: "Git" },
    { icon: <MdEmail />, name: "SMTP Email" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiAdobephotoshop />, name: "Photoshop" },
    { icon: <SiCanva />, name: "Canva" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          style={{ color: "white" }}
        >
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
