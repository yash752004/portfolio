import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiVite, SiDocker, SiAmazonaws, SiGithub } from "react-icons/si";
import { MdGroups, MdBugReport, MdWork } from "react-icons/md";

function Experience() {
  const experiences = [
    {
      icon: <MdWork />,
      title: "Full Stack Developer, DIPC Software",
      duration: "Sep 2023 - July 2025",
      points: [
        "Worked with Vite, TypeScript, and Node.js to build full-stack applications.",
        "Implemented cloud deployment using AWS Lightsail and ECS for scalable production.",
        "Configured CI/CD pipelines and used Docker for containerized builds.",
        "Enhanced debugging and problem-solving skills through real-world tasks.",
        "Collaborated in agile teams and participated in client requirement meetings.",
        "Developed a holistic understanding of the full software development lifecycle."
      ],
      techIcons: [
        <SiVite />, <SiTypescript />, <FaNodeJs />, <SiAmazonaws />, <SiDocker />, <SiGithub />, <MdGroups />, <MdBugReport />
      ]
    }
  ];

  return (
 <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  {experiences.map((exp, index) => (
    <Col md={10} key={index}>
      <Card
        className="p-4 mb-4"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(200, 137, 230, 0.637)",
          borderRadius: "1.5rem",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          color: "#fff",
        }}
      >
        <Card.Body>
          {/* Centered Header */}
          <div className="d-flex flex-column align-items-center text-center mb-4">
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{exp.icon}</div>
            <div>
              <Card.Title className="mb-1 fw-bold">{exp.title}</Card.Title>
              <Card.Subtitle className="text-muted">{exp.duration}</Card.Subtitle>
            </div>
          </div>

          {/* Left-Aligned Bullet Points */}
          <ul style={{ paddingLeft: "1.25rem", textAlign: "left" }}>
            {exp.points.map((point, i) => (
              <li key={i} style={{ marginBottom: "6px", lineHeight: "1.5" }}>{point}</li>
            ))}
          </ul>

          {/* Center-Aligned Tech Icons with Custom Color */}
          <div
            className="d-flex flex-wrap justify-content-center mt-4"
            style={{ gap: "20px", fontSize: "1.8rem", color: "#a855f7" }} // purple color
          >
            {exp.techIcons.map((icon, i) => (
              <div key={i} style={{ color: "#a855f7" }}>{icon}</div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>


  );
}

export default Experience;
