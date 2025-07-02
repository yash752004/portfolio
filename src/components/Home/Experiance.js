import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiVite, SiDocker, SiAmazonaws, SiGithub } from "react-icons/si";
import { MdGroups, MdBugReport, MdWork } from "react-icons/md";
import dipclogo from "../../Assets/DIPC.png";

function Experience() {
  const experiences = [
    {
      icon: <MdWork />,
      title: "Full Stack Developer, DIPC Software",
      duration: "Sep 2023 - July 2025",
      logo: dipclogo,
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
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(168, 85, 247, 0.3)",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
              color: "#f5f5f5",
            }}
          >
            <Card.Body>
              {/* Header with logo and title */}
              <div className="d-flex align-items-center mb-4 flex-wrap">
                {/* Logo on the left */}
                <img
                  src={exp.logo}
                  alt="Company Logo"
                  style={{
                    width: "70px",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    padding: "5px",
                    marginRight: "20px"
                  }}
                />
                {/* Title + Duration */}
                <div style={{ flex: 1, minWidth: "200px", textAlign: "left" }}>
                  <div style={{ fontSize: "2rem", color: "#a855f7" }}>{exp.icon}</div>
                  <h4 style={{ fontWeight: "600", marginBottom: "6px" }}>{exp.title}</h4>
                  <div
                    style={{
                      background: "#a855f7",
                      color: "white",
                      padding: "2px 10px",
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      display: "inline-block"
                    }}
                  >
                    {exp.duration}
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul style={{ paddingLeft: "1.5rem", textAlign: "left", lineHeight: "1.6" }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: "8px" }}>{point}</li>
                ))}
              </ul>

              {/* Tech Icons */}
              <div
                className="d-flex flex-wrap justify-content-center mt-4"
                style={{ gap: "16px" }}
              >
                {exp.techIcons.map((icon, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "rgba(168, 85, 247, 0.1)",
                      border: "1px solid rgba(168, 85, 247, 0.4)",
                      color: "#a855f7",
                      fontSize: "1.6rem",
                      padding: "10px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {icon}
                  </div>
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
